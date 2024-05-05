import { Route, Routes } from 'react-router-dom'
import { ENUM_FRONTEND_LINKS } from './utils/constants/linksManual'
import Home from './views/landing/Home/Home'
import About from './views/landing/About/About'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path={ENUM_FRONTEND_LINKS.HOME} element={<Home />} />
        <Route path={ENUM_FRONTEND_LINKS.ABOUT} element={<About />} />
      </Routes>
    </>
  )
}

export default App
