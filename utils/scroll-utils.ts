export function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (element) {
    // Obtener la posición del elemento
    const yOffset = -80 // Ajuste para el header fijo
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

    // Desplazamiento suave
    window.scrollTo({
      top: y,
      behavior: "smooth",
    })
  }
}

