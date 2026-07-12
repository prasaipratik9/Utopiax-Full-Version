import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import OpenMindX from './pages/OpenMindX.jsx'
import IdeationWorX from './pages/IdeationWorX.jsx'
import LumiereX from './pages/LumiereX.jsx'
import Xperiences from './pages/Xperiences.jsx'
import Media from './pages/Media.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/openmindx" element={<OpenMindX />} />
        <Route path="/ideationworx" element={<IdeationWorX />} />
        <Route path="/lumierex" element={<LumiereX />} />
        <Route path="/xperiences" element={<Xperiences />} />
        <Route path="/media" element={<Media />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
