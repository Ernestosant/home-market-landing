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
  
  // Configuración de manejo de entorno
  buildOutputDirectory: '.next',
  enableNextOnPagesConfigFile: true,
  
  // Configuración para el acceso a variables de entorno
  environmentVariables: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: {
      edge: true,
      build: true,
    },
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: {
      edge: true,
      build: true,
    },
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: {
      edge: true,
      build: true,
    }
  }
} 