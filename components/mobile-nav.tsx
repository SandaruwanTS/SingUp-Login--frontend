"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Logo } from "@/components/logo"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex justify-between items-center">
      <Logo />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-6 mt-8">
            <a
              href="#"
              className="text-lg font-medium text-gray-600 hover:text-violet-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#"
              className="text-lg font-medium text-gray-600 hover:text-violet-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-lg font-medium text-gray-600 hover:text-violet-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="text-lg font-medium text-gray-600 hover:text-violet-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
