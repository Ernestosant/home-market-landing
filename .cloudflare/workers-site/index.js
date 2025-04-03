/**
 * Configuración para Cloudflare Workers en Cloudflare Pages
 */

// La función principal que se ejecutará en el Worker
export default {
  async fetch(request, env, ctx) {
    // Obtener la URL solicitada
    const url = new URL(request.url);
    const path = url.pathname;

    try {
      // Si estamos accediendo a archivos estáticos, servir directamente
      if (path.startsWith('/_next/') || 
          path.startsWith('/static/') || 
          path === '/favicon.ico' ||
          path === '/robots.txt') {
        // Pasar la solicitud al handler predeterminado para archivos estáticos
        return env.ASSETS.fetch(request);
      }

      // Para todas las demás rutas, procesamos a través de la aplicación Next.js
      return env.ASSETS.fetch(request);
    } catch (err) {
      // En caso de error
      return new Response(`Error al procesar la solicitud: ${err.message}`, {
        status: 500,
        headers: {
          'Content-Type': 'text/plain'
        }
      });
    }
  }
}; 