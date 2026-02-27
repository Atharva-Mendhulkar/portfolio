import LoadingAnimation from "@/components/loading-animation"
import Porygon3D from "@/components/porygon-3d"
import ProjectTiles from "@/components/project-tiles"
import SocialLinks from "@/components/social-links"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AboutSection from "@/components/sections/about-section"
import ProjectsSection from "@/components/sections/projects-section"
import ResearchSection from "@/components/sections/research-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  return (
    <>
      <LoadingAnimation />

      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-1 -top-1 w-2 h-2 bg-blue-500 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
                  <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-900 px-3 py-1 text-sm border border-gray-200 dark:border-gray-800">
                    Tech Polymath
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-in slide-in-from-bottom-4 fade-in duration-1000">
                  Hi, I'm <span className="monochrome-gradient">Atharva</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                  Aspiring Software Engineer & Competitive Programmer passionate about building innovative solutions and solving
                  complex problems.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button asChild size="lg">
                    <Link href="#about">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Porygon3D />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectsSection />
      <ResearchSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}

