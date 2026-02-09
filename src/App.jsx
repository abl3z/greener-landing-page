// src/App.jsx
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import About from './components/About'
// import Features from './components/Features' // Legacy Features section kept in code, not rendered
import Impact from './components/Impact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Problem />
      <Solution />
      {/* Legacy Features section kept for reference
      <Features />
      */}
      <Impact />
      <Footer />
    </div>
  )
}

export default App
