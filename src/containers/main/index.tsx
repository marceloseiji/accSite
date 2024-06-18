import Home from 'containers/main/sections/home/index'
import Psicanalise from './sections/psicanalise'
import About from './sections/about'
import Contact from './sections/contact'
import BottomNav from 'containers/main/components/bottomNav'
import { MainSection } from 'containers/main/style'
import ConsultButton from 'components/buttons/consultButton'
import { MainButtonWrapper } from 'components/buttons/consultButton/style'

const Main = () => (
  <>
    <MainSection>
      <Home />
      <Psicanalise />
      <About />
      <Contact />
      <MainButtonWrapper>
        <ConsultButton />
      </MainButtonWrapper>
    </MainSection>
    <BottomNav />
  </>
)

export default Main
