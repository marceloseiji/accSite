import Home from 'containers/main/sections/home/index'
import Psicanalise from './sections/psicanalise'
import BottomNav from 'containers/main/components/bottomNav'
import { MainSection } from 'containers/main/style'
import DragIcon from 'components/dragIcon'

const Main = () => (
  <>
    <MainSection>
      <Home />
      <Psicanalise />
    </MainSection>
    <DragIcon />
    <BottomNav />
  </>
)

export default Main
