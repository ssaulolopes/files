"use client"

import { Settings, Moon, Sun, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  sidebarVisible: boolean
  setSidebarVisible: (visible: boolean) => void
  setCurrentPage: (page: string | null) => void
}

export function Header({ sidebarVisible, setSidebarVisible, setCurrentPage }: HeaderProps) {
  return (
    <header className="bg-[#0a2756] border-b border-[#1a3b6d] p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-white"
          onClick={() => setSidebarVisible(!sidebarVisible)}
          aria-label="Toggle sidebar"
        >
          <MenuIcon className="h-5 w-5" />
        </Button>
        <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage(null)}>
          <img src="/logo-prefeitura.png" alt="Prefeitura Rio Logo" className="h-10 w-auto" />
        </div>
      </div>

      <h1 className="text-white text-xl font-semibold">SISTEMA INTEGRADO SMAS-RIO</h1>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-white">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
