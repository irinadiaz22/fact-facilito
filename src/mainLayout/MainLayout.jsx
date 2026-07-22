import { useState } from "react"
import { Sidebar } from "../components/organisms/Sidebar/Sidebar"
import { HamburgerButton } from "../components/atoms/HamburguerButton/HamburguerButton"
import "./mainLayout.css"

export const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="layout">

      <HamburgerButton onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <main className="content">
        {children}
      </main>
    </div>
  )
}
