import Home from 'containers/main/sections/home/index'
import Psicanalise from './sections/psicanalise'
import About from "./sections/about"
import Contact from "./sections/contact"
import BottomNav from 'containers/main/components/bottomNav'
import { MainSection } from 'containers/main/style'
import DragIcon from 'components/dragIcon'

const Main = () => (
  <>
    <MainSection>
      <Home />
      <Psicanalise />
      <About />
      <Contact />
    </MainSection>
    <DragIcon />
    <BottomNav />
  </>
)

export default Main
