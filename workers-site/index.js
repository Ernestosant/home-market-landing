/**
 * Configuración de Cloudflare Worker para servir el sitio Next.js
 */

import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

/**
 * The DEBUG flag will do two things:
 * 1. We will skip caching on the edge, which makes it easier to debug
 * 2. We will return more detailed error messages from the worker
 */
const DEBUG = false;

/**
 * Handle the request and serve assets from KV
 */
async function handleEvent(event) {
  let options = {};

  try {
    if (DEBUG) {
      options.cacheControl = {
        bypassCache: true,
      };
    }

    const page = await getAssetFromKV(event, options);

    // Allow headers to be modified
    const response = new Response(page.body, page);

    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Referrer-Policy', 'unsafe-url');
    response.headers.set('Feature-Policy', 'none');

    return response;
  } catch (e) {
    // If an error is thrown, handle it
    if (DEBUG) {
      return new Response(e.message || e.toString(), {
        status: 500,
      });
    }

    // Not found or server error
    if (e.status === 404 || e.status === 500) {
      return new Response(e.message || e.toString(), {
        status: e.status,
      });
    }

    return new Response('An unexpected error occurred', {
      status: 500,
    });
  }
}

// Listen on fetch event
addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event));
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        })
      );
    }
    event.respondWith(new Response('Internal Error', { status: 500 }));
  }
}); 