"use client"

// Importar la función scrollToSection
import { scrollToSection } from "@/utils/scroll-utils"

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-medium">Home Market Co.,Ltd.</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Una empresa global de comercio que proporciona una amplia gama de productos.
            </p>
          </div>
          <div className="flex justify-end">
            <div>
              <h3 className="mb-4 text-lg font-medium">Enlaces Rápidos</h3>
              <ul className="flex flex-wrap gap-4 text-sm">
                <li className="mr-4">
                  <a
                    href="#inicio"
                    className="text-primary-foreground/80 hover:text-primary-foreground"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("inicio")
                    }}
                  >
                    Inicio
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="#nosotros"
                    className="text-primary-foreground/80 hover:text-primary-foreground"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("nosotros")
                    }}
                  >
                    Nosotros
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="#servicios"
                    className="text-primary-foreground/80 hover:text-primary-foreground"
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
                    className="text-primary-foreground/80 hover:text-primary-foreground"
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
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p className="flex items-center justify-center gap-2">
            &copy; {new Date().getFullYear()} Home Market Co.,Ltd. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

