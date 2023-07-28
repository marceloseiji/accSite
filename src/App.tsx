import Router from 'router'
import { StyleReset } from 'styles/styleReset'
import { FontStyles } from 'styles/fontStyles'

const App = () => {
  return (
    <>
      <StyleReset />
      <FontStyles />
      <Router />
    </>
  )
}

export default App
