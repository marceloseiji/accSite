import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ResponsiveWrapper from 'components/responsiveWrapper'
import MainWrapper from 'components/wrapper'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <BrowserRouter>
      <MainWrapper>
        <ResponsiveWrapper>
          <App />
        </ResponsiveWrapper>
      </MainWrapper>
    </BrowserRouter>
  )
}
