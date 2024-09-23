import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import {BrowserRouter as Router, Routes, Navigate, Route} from 'react-router-dom'
import HomePage from './components/pages/Homepage'
import AboutPage from './components/pages/AboutPage'
import Navigation from './components/common/Navigation'
import ContactPage from './components/pages/ContactPage'

function App() {
  return (
    <>
      <Router>
        <Header />
          <Navigation />
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/home' exact element={<Navigate replace to='/' />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            {/* <Route path='*' element={<Page404 />} /> */}
          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
