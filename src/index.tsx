import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import MainWrapper from 'components/wrapper'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <HashRouter>
      <MainWrapper>
        <App />
      </MainWrapper>
    </HashRouter>
  )
}
