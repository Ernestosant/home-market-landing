export default {
  async fetch(request, env, ctx) {
    // Este archivo es un placeholder para asegurar la configuración correcta
    // La lógica real viene de @cloudflare/next-on-pages
    return new Response("Configured with Node.js compatibility", {
      headers: { "Content-Type": "text/plain" }
    });
  }
}; 