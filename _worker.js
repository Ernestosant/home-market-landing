/**
 * Worker principal para Cloudflare Pages con Next.js
 */

// Importar el worker específico de Next.js desde @cloudflare/next-on-pages
import { handleRequest } from '@cloudflare/next-on-pages/worker';

// Configurar flag de compatibilidad con Node.js
export const config = {
  compatibilityFlags: ['nodejs_compat'],
};

// Exportar el handler principal que procesará todas las solicitudes
export default {
  async fetch(request, env, ctx) {
    // Intentar procesar la solicitud a través del handler de Next.js
    try {
      return await handleRequest(request, env, ctx);
    } catch (error) {
      // En caso de error, devolver una respuesta controlada
      return new Response(`Error en la aplicación: ${error.message || 'Error desconocido'}`, {
        status: 500,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
  },
}; 