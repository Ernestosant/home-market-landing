"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ScrollToButton } from "@/components/scroll-to-button"
import { scrollToSection } from "@/utils/scroll-utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Home Market Logo"
            width={50}
            height={50}
            className="object-contain logo-image"
            priority
          />
          <span className="text-xl font-bold">Home Market Co.,Ltd.</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <a
            href="#inicio"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("inicio")
            }}
          >
            Inicio
          </a>
          <a
            href="#nosotros"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("nosotros")
            }}
          >
            Nosotros
          </a>
          <a
            href="#servicios"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("servicios")
            }}
          >
            Servicios
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("contacto")
            }}
          >
            Contacto
          </a>
        </nav>
        <ScrollToButton targetId="contacto" variant="outline" className="hidden md:flex">
          Contáctanos
        </ScrollToButton>
        <div className="relative md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menú</span>
          </Button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-12 w-64 rounded-lg border bg-background shadow-lg"
              >
                <div className="flex items-center justify-between border-b p-4">
                  <span className="font-medium">Menú</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Cerrar menú</span>
                  </Button>
                </div>
                <nav className="p-4">
                  <div className="grid gap-2">
                    <a
                      href="#inicio"
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("inicio")
                        setIsMenuOpen(false)
                      }}
                    >
                      Inicio
                    </a>
                    <a
                      href="#nosotros"
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("nosotros")
                        setIsMenuOpen(false)
                      }}
                    >
                      Nosotros
                    </a>
                    <a
                      href="#servicios"
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("servicios")
                        setIsMenuOpen(false)
                      }}
                    >
                      Servicios
                    </a>
                    <a
                      href="#contacto"
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("contacto")
                        setIsMenuOpen(false)
                      }}
                    >
                      Contacto
                    </a>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <ScrollToButton targetId="contacto" className="w-full" onClick={() => setIsMenuOpen(false)}>
                      Contáctanos
                    </ScrollToButton>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

