import { About } from './components/About'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='font-primary w-full bg-gradient-to-r from-slate-950 to-slate-900 overflow-hide items-center'>
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default App
