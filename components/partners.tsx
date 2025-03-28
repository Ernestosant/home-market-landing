"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "TechCorp", logo: "/placeholder.svg?height=80&width=200" },
  { name: "InnovateSolutions", logo: "/placeholder.svg?height=80&width=200" },
  { name: "GlobalTrade", logo: "/placeholder.svg?height=80&width=200" },
  { name: "FutureBuilders", logo: "/placeholder.svg?height=80&width=200" },
  { name: "EcoSystems", logo: "/placeholder.svg?height=80&width=200" },
  { name: "SmartLogistics", logo: "/placeholder.svg?height=80&width=200" },
]

export function Partners() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Nuestros Socios</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Colaboramos con empresas líderes en todo el mundo para ofrecer soluciones comerciales excepcionales.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-center"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={150}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

