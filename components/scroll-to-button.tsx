"use client"

import type React from "react"

import type { ReactNode } from "react"
import { scrollToSection } from "@/utils/scroll-utils"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface ScrollToButtonProps extends ButtonProps {
  targetId: string
  children: ReactNode
}

export function ScrollToButton({ targetId, children, ...props }: ScrollToButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollToSection(targetId)
  }

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  )
}

