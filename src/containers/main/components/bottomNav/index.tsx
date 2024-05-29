import { useEffect, useState } from 'react'
import {
  Link,
  List,
  Nav,
  NavWrapper
} from 'containers/main/components/bottomNav/style'
import { useLocation } from 'react-router-dom'
import ResponsiveWrapper from 'components/responsiveWrapper'

const BottomNav = () => {
  const minScroll = 50
  const location = useLocation()
  const [sectionHash, setSectionHash] = useState('#home-section')
  const [isScrollDown, setIsScrollDown] = useState(false)

  const sections = [
    { name: 'Home', href: '#home-section' },
    { name: 'Psicanálise', href: '#psicanalise-section' },
    { name: 'Sobre', href: '#about-section' },
    { name: 'Contato', href: '#contact-section' }
  ]

  useEffect(() => {
    addEventListener('scroll', () => {
      if (window.scrollY > minScroll) {
        setIsScrollDown(true)
      } else {
        setIsScrollDown(false)
      }
    })
  }, [])

  useEffect(() => {
    setSectionHash(location.hash)
  }, [location.hash])

  return (
    <Nav aria-label="Menu do site" $isScrollDown={isScrollDown}>
      <NavWrapper>
        <ResponsiveWrapper>
          <List>
            {sections.map((section, index) => (
              <Link
                key={index}
                $isactive={sectionHash === section.href}
                href={section.href}
                onClick={() => setSectionHash(section.href)}
              >
                {section.name}
              </Link>
            ))}
          </List>
        </ResponsiveWrapper>
      </NavWrapper>
    </Nav>
  )
}

export default BottomNav
