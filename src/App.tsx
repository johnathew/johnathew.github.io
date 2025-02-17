import { About } from './components/About'
import { Hero } from './components/Hero'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <main className='font-primary w-full bg-gradient-to-r from-slate-950 to-slate-900 overflow-hide items-center'>
      <Header />
      <Hero />
      <About />
      <Footer />
    </main>
  )
}

export default App
