import About from "@/components/sections/About";
import Landing from "@/components/sections/Landing";
import Projects from "@/components/sections/Projects";
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
