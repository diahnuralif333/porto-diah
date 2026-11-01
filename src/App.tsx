import { LanguageProvider } from './context/LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedShowcase } from './components/FeaturedShowcase'
import { ValueProposition } from './components/ValueProposition'
import { ProcessSection } from './components/ProcessSection'
import { SelectedWorks } from './components/SelectedWorks'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#fbfbfb] text-zinc-900 flex flex-col font-sans selection:bg-[#d4fb52] selection:text-black">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <FeaturedShowcase />
          <ValueProposition />
          <ProcessSection />
          <SelectedWorks />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
