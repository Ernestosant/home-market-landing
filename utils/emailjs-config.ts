import emailjs from '@emailjs/browser';

// Inicializa EmailJS con tu clave pública
export const initEmailJS = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  console.log('Inicializando EmailJS con la clave:', publicKey);
  
  if (!publicKey) {
    console.error('EmailJS: Falta la clave pública en las variables de entorno');
    return;
  }
  
  emailjs.init({
    publicKey,
  });
};

// Constantes para EmailJS - usar valores del archivo .env.local
export const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'default_service';
export const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default'; 