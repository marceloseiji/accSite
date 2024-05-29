import { createRoot } from 'react-dom/client'
import App from './App'
import './style.scss'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <div className="root">
      <App />
    </div>
  )
}
