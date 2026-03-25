import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchModal from './components/SearchModal'
import MobileDrawer from './components/MobileDrawer'
import Home from './pages/Home'
import ReactBasics from './pages/ReactBasics'
import HooksGuide from './pages/HooksGuide'
import StateRouting from './pages/StateRouting'
import StylingGuide from './pages/StylingGuide'
import AdvancedTopics from './pages/AdvancedTopics'
import QnA from './pages/QnA'
import Education from './pages/Education'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <SearchModal />
      <MobileDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basics" element={<ReactBasics />} />
        <Route path="/hooks" element={<HooksGuide />} />
        <Route path="/state-routing" element={<StateRouting />} />
        <Route path="/styling" element={<StylingGuide />} />
        <Route path="/advanced" element={<AdvancedTopics />} />
        <Route path="/qna" element={<QnA />} />
        <Route path="/education" element={<Education />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
