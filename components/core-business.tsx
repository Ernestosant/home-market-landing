"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import Image from "next/image"

export function CoreBusiness() {
  return (
    <section id="servicios" className="bg-muted py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Nuestro Negocio Principal</h2>
          <p className="mb-8 text-muted-foreground">
            Especializados en proporcionar soluciones globales para nuestros clientes.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-4xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center bg-background rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Comercio Internacional"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col items-center md:items-start text-center md:text-left">
              <Globe className="mb-4 h-16 w-16 text-primary" />
              <h3 className="mb-2 text-2xl font-bold">Comercio Internacional</h3>
              <p className="text-muted-foreground">
                Facilitamos el comercio global, conectando proveedores y clientes de todo el mundo para proporcionar
                productos de alta calidad que satisfagan las necesidades específicas de cada proyecto.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

