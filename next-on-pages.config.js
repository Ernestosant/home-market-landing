/**
 * Configuration file for @cloudflare/next-on-pages
 */
module.exports = {
  // Asegúrate de que se añada la bandera nodejs_compat
  compatibilityFlags: ["nodejs_compat"],
  
  // Configuración opcional adicional
  experimentalMinify: true,
  skipTracing: false, // Activa el trazado de dependencias
  disableExperimentalWarning: true,
} 