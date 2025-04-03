"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, User } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from '@emailjs/browser'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import Image from "next/image"
import { initEmailJS, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "@/utils/emailjs-config"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  lastName: z.string().min(2, {
    message: "El apellido debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  subject: z.string().min(3, {
    message: "El asunto debe tener al menos 3 caracteres.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Inicializar EmailJS cuando el componente se monta
    initEmailJS();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    // Log más detallado para debugging
    console.log('Enviando email con los siguientes parámetros:');
    console.log('SERVICE_ID:', EMAILJS_SERVICE_ID);
    console.log('TEMPLATE_ID:', EMAILJS_TEMPLATE_ID);
    console.log('PUBLIC_KEY:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      console.error('Faltan configuraciones de EmailJS. Verifica tus variables de entorno.');
      toast({
        title: "Error de configuración",
        description: "Hay un problema con la configuración del formulario de contacto. Por favor, inténtalo más tarde.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Prepara los datos para enviar por EmailJS con variables que coincidan con la plantilla mostrada
    const templateParams = {
      // Campos estándar para la plantilla visualizada
      title: values.subject || `Contact Us: Mensaje de ${values.name} ${values.lastName}`,  // Para el Subject {{title}}
      email: values.email,                                               // Correo del remitente para {{email}}
      name: `${values.name} ${values.lastName}`,                         // Para From Name {{name}}
      time: new Date().toLocaleString(),                                 // Para la hora del mensaje {{time}}
      message: values.message,                                           // Para el mensaje {{message}}
      
      // Asegurarse de que el correo del remitente esté claramente identificado
      from_name: `${values.name} ${values.lastName}`,
      from_email: values.email,
      reply_to: values.email,
      sender_email: values.email,
      
      // Destinatario - no debería mostrarse como remitente
      to_name: "Home Market Co.",
      to_email: "ernestosantiesteban5@gmail.com",
      recipient: "ernestosantiesteban5@gmail.com"
    }
    
    console.log('Template params:', templateParams);

    // Inicializa explícitamente EmailJS aquí también para asegurarnos
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();
    emailjs.init({
      publicKey,
    });

    // Enviar el email usando EmailJS
    emailjs.send(
      EMAILJS_SERVICE_ID, 
      EMAILJS_TEMPLATE_ID, 
      templateParams,
      {
        publicKey: publicKey,
      }
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        console.log('Email enviado correctamente. Remitente:', values.email);
        toast({
          title: "Formulario enviado",
          description: "Gracias por contactarnos. Te responderemos pronto.",
        })
        form.reset()
      })
      .catch((error) => {
        console.error('FAILED...', error);
        console.error('Error completo:', JSON.stringify(error, null, 2));
        console.error('Datos enviados:', JSON.stringify(templateParams, null, 2));
        
        // Mostrar información más detallada del error
        let errorMessage = "Ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo.";
        
        if (error.text) {
          console.error('Error text:', error.text);
          
          // Errores específicos
          if (error.text.includes("template ID not found")) {
            errorMessage = "Error de configuración: Plantilla no encontrada. Por favor, contacta al administrador.";
            console.error(`Template ID utilizado: ${EMAILJS_TEMPLATE_ID}`);
          } else if (error.text.includes("service ID not found")) {
            errorMessage = "Error de configuración: Servicio no encontrado. Por favor, contacta al administrador.";
            console.error(`Service ID utilizado: ${EMAILJS_SERVICE_ID}`);
          } else if (error.text.includes("Invalid public key")) {
            errorMessage = "Error de configuración: Clave pública inválida. Por favor, contacta al administrador.";
          } else if (error.text.includes("recipients address is empty")) {
            errorMessage = "Error de configuración: La dirección del destinatario está vacía. Por favor, contacta al administrador.";
            console.error("Problema con las direcciones de correo:", {
              to_email: templateParams.to_email,
              recipient: templateParams.recipient
            });
          }
        }
        
        toast({
          title: "Error al enviar",
          description: errorMessage,
          variant: "destructive"
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <section id="contacto" className="py-20 relative bg-gradient-to-b from-muted to-background">
      {/* Franja decorativa superior con los colores de la bandera búlgara */}
      <div className="absolute top-0 left-0 right-0 h-2 flex">
        <div className="w-1/3 bg-white"></div>
        <div className="w-1/3 bg-primary"></div>
        <div className="w-1/3 bg-secondary"></div>
      </div>
      
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/placeholder.svg?height=800&width=1600" alt="Contact background" fill className="object-cover" />
      </div>
      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Contáctanos</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Estamos aquí para responder a tus preguntas y ayudarte con tus necesidades.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm"
          >
            <div className="flex items-start space-x-4">
              <User className="mt-1 h-5 w-5 text-secondary" />
              <div>
                <h3 className="text-lg font-medium">Presidente</h3>
                <p className="text-muted-foreground">Nikoleta Ivanova Tchepileva</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="mt-1 h-5 w-5 text-secondary" />
              <div>
                <h3 className="text-lg font-medium">Dirección</h3>
                <p className="text-muted-foreground">
                  Ciudad de Sofía 1000, Provincia de Sofía, Municipio de Sofía, Distrito Triaditsa, Sandor Petiofi No.47
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="mt-1 h-5 w-5 text-secondary" />
              <div>
                <h3 className="text-lg font-medium">Correo Electrónico</h3>
                <p className="text-muted-foreground">president@homemarketco.com</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Apellido</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu apellido" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo Electrónico</FormLabel>
                      <FormControl>
                        <Input placeholder="tu@ejemplo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Asunto de tu mensaje" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea placeholder="¿Cómo podemos ayudarte?" className="min-h-32" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

