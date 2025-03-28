"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Director de Operaciones, TechSolutions",
    content:
      "Home Market ha sido un socio comercial excepcional. Su capacidad para entregar productos de alta calidad en plazos ajustados ha sido fundamental para nuestro éxito.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "María González",
    role: "CEO, Innovatech",
    content:
      "Trabajar con Home Market ha transformado nuestra cadena de suministro. Su conocimiento del mercado global y su atención al detalle son incomparables.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Javier Méndez",
    role: "Gerente de Proyectos, Construye+",
    content:
      "Desde que comenzamos a trabajar con Home Market, nuestros proyectos se han completado a tiempo y dentro del presupuesto. Un socio comercial en quien realmente podemos confiar.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Lo que dicen nuestros clientes</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Descubre por qué las empresas confían en Home Market para sus necesidades de comercio global.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mb-6 italic">{testimonial.content}</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

