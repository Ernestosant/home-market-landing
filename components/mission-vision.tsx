"use client"

import { motion } from "framer-motion"
import { Compass, Eye } from "lucide-react"
import Image from "next/image"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MissionVision() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="nosotros" className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Nuestra Misión y Visión</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Comprometidos con la excelencia y enfocados en nuestros clientes.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Compass className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Misión</CardTitle>
                  <CardDescription>Nuestro propósito</CardDescription>
                </div>
              </CardHeader>
              <div className="px-6 pb-4">
                <Image
                  src="/international_ships.png"
                  alt="Misión empresarial - Transporte internacional"
                  width={600}
                  height={300}
                  className="rounded-md object-cover mb-4"
                />
                <p>
                  Suministrar bienes de alta calidad para los proyectos de nuestros clientes con prontitud y precisión.
                </p>
              </div>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Eye className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Visión</CardTitle>
                  <CardDescription>Hacia dónde vamos</CardDescription>
                </div>
              </CardHeader>
              <div className="px-6 pb-4">
                <Image
                  src="/helpping_hand.png"
                  alt="Visión empresarial - Ayudando a nuestros clientes"
                  width={600}
                  height={300}
                  className="rounded-md object-cover mb-4"
                />
                <p>Convertirnos en socios clave para nuestros clientes y potenciar su desarrollo.</p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

