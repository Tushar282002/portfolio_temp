import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Skills } from '@/components/sections/skills';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { CodingJourney } from '@/components/sections/coding-journey';
import { Research } from '@/components/sections/research';
import { Achievements } from '@/components/sections/achievements';
import { Education } from '@/components/sections/education';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <CodingJourney />
      <Research />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
