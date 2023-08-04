import Home from 'containers/main/sections/home/index'
import BottomNav from 'containers/main/components/bottomNav'
import { MainSection } from 'containers/main/style'
import DragIcon from 'components/dragIcon'

const Main = () => (
  <>
    <MainSection>
      <Home />
    </MainSection>
    <DragIcon />
    <BottomNav />
  </>
)

export default Main
