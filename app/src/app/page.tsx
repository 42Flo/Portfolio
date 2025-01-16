import About from "@/components/About";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
