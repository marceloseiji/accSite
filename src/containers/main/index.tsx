import Home from 'containers/main/sections/home/index'
import Psicanalise from './sections/psicanalise'
import Quote from './sections/quote'
import Footer from './sections/footer'
import BottomNav from 'containers/main/components/bottomNav'
import { MainSection } from 'containers/main/style'
import ConsultButton from 'components/buttons/consultButton'
import { MainButtonWrapper } from 'components/buttons/consultButton/style'
import Treatment from './sections/treatment'

const Main = () => (
  <>
    <MainSection>
      <Home />
      <Psicanalise />
      <Quote />
      <Treatment />
      <Footer />
      <MainButtonWrapper>
        <ConsultButton />
      </MainButtonWrapper>
    </MainSection>
    <BottomNav />
  </>
)

export default Main
