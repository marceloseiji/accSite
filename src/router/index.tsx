import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Main from 'containers/main'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/accSite" element={<Main />} />
    </Routes>
  </BrowserRouter>
)

export default Router
