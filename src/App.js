import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Join from './pages/Join.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import NotFound from './pages/NotFound.jsx'
import About from './pages/About.jsx'
import Team from './pages/Team.jsx'
import SponsorUs from './pages/SponsorUs.jsx'

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='team' element={<Team />} />
          <Route path='projects' element={<Projects />} />
          <Route path='sponsorus' element={<SponsorUs />} />
          <Route path='join' element={<Join />} />
		      <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        
      </div>
      
    </Router>
  );
}

export default App;
