import { useEffect, useState } from 'react'
import { Link, List, Nav } from 'containers/main/components/bottomNav/style'

const BottomNav = () => {
  const [isActive, setIsActive] = useState('') // WIP deixar os itens do menu ativos

  useEffect(() => {
    console.log()
  })

  return (
    <Nav aria-label="Menu do site">
      <List>
        <Link isActive href="#home-section">
          Home
        </Link>
        <Link href="#psicanalise-section">Psicanálise</Link>
        <Link href="#about-section">Sobre</Link>
        <Link href="#contact-section">Contato</Link>
      </List>
    </Nav>
  )
}

export default BottomNav
