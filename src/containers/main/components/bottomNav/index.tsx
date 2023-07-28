import { Link, List, Nav } from 'containers/main/components/bottomNav/style'

const BottomNav = () => (
  <Nav aria-label="Menu do site">
    <List>
      <Link href="">Home</Link>
      <Link href="">Psicanálise</Link>
      <Link href="">Sobre</Link>
      <Link href="">Contato</Link>
    </List>
  </Nav>
)

export default BottomNav
