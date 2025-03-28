"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

// Importar la función scrollToSection
import { scrollToSection } from "@/utils/scroll-utils"

export function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Home Market Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <h3 className="text-lg font-medium">Home Market Co.,Ltd.</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Una empresa global de comercio que proporciona una amplia gama de productos.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("inicio")
                  }}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("nosotros")
                  }}
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("servicios")
                  }}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("contacto")
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Home Market Co.,Ltd. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

