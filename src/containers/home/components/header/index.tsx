import { Link, List } from 'containers/home/components/header/style'

const Header = () => (
  <nav aria-label="Menu do site">
    <List>
      <Link href="">Home</Link>
      <Link href="">Psicanálise</Link>
      <Link href="">Sobre</Link>
      <Link href="">Contato</Link>
    </List>
  </nav>
)

export default Header
