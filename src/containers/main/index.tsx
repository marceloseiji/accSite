import Home from 'containers/main/sections/home/index'
import BottomNav from 'containers/main/components/bottomNav'
import { MainSection } from 'containers/main/style'

const Main = () => (
  <>
    <MainSection>
      <Home />
    </MainSection>
    <BottomNav />
  </>
)

export default Main
