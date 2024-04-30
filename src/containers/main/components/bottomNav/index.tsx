import { useEffect, useState } from 'react'
import { Link, List, Nav } from 'containers/main/components/bottomNav/style'
import { useLocation } from 'react-router-dom'
import ResponsiveWrapper from 'components/responsiveWrapper'

const BottomNav = () => {
  const location = useLocation()
  const [sectionHash, setSectionHash] = useState('#home-section')

  const sections = [
    { name: 'Home', href: '#home-section' },
    { name: 'Psicanálise', href: '#psicanalise-section' },
    { name: 'Sobre', href: '#about-section' },
    { name: 'Contato', href: '#contact-section' }
  ]

  useEffect(() => {
    setSectionHash(location.hash)
  }, [location.hash])

  return (
    <Nav aria-label="Menu do site">
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
    </Nav>
  )
}

export default BottomNav
