import { Inter } from 'next/font/google'
import Headers from './ui/header';
import Hero from './ui/hero';
import Skills from './ui/skills';
import About from './ui/about';
import Portfolio from './ui/portfolio';
import Footer from './ui/footer';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className={`flex  min-h-screen flex-col items-center justify-between ${inter.className}`}>
      <Headers/>

      <Hero/>

      <About/>

      <Skills/>

      <Portfolio/>

      <Footer/>
    </main>
  )
}
