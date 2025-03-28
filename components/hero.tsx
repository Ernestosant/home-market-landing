"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
// Importar el nuevo componente ScrollToButton
import { ScrollToButton } from "@/components/scroll-to-button"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Home Market Co.,Ltd.</h1>
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            Una empresa global de comercio que proporciona una amplia gama de productos.
          </p>
          {/* Reemplazar los botones con los nuevos componentes ScrollToButton */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <ScrollToButton targetId="nosotros" size="lg" className="gap-2">
              Conoce más <ArrowRight className="h-4 w-4" />
            </ScrollToButton>
            <ScrollToButton targetId="contacto" size="lg" variant="outline">
              Contáctanos
            </ScrollToButton>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Global trade background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}

