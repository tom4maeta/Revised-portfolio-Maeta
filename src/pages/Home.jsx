import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import {
  aboutContent,
  contactContent,
  heroContent,
  projectsContent,
  skillsContent
} from '../data/homeContent'

function Home() {
  return (
    <main className="bg-white text-gray-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
      <Hero content={heroContent} />
      <About content={aboutContent} />
      <Skills content={skillsContent} />
      <Projects content={projectsContent} />
      <Contact content={contactContent} />
    </main>
  )
}

export default Home
