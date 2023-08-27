import { Link, List, Nav } from 'containers/main/components/bottomNav/style'

const BottomNav = () => (
  <Nav aria-label="Menu do site">
    <List>
      <Link href="#home-section">Home</Link>
      <Link href="#psicanalise-section">Psicanálise</Link>
      <Link href="#about-section">Sobre</Link>
      <Link href="#contact-section">Contato</Link>
    </List>
  </Nav>
)

export default BottomNav
