import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import MotionButton from "./MotionButton";

function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white animate-fade-in">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 animate-slide-up" style={{ animationDelay: '0s' }}>
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-900 rounded-full text-sm mb-6 border border-gray-300">
            Available for freelance work
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl mb-6 text-black animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Full-Stack Web Developer <br /> (Backend-focused)
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Hi, I'm <span className="text-black">Ibrahim Abdurahmon</span>
        </p>
        
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
         I build scalable APIs and full-stack applications using Node.js, Express, PostgreSQL, MongoDB, Prisma, and React.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <MotionButton onClick={scrollToProjects} size="lg" className="gap-2 hover:scale-105 transition-transform bg-black hover:bg-gray-800 text-white">
            View My Work
            <ArrowRight className="size-5" />
          </MotionButton>
          <MotionButton onClick={scrollToContact} variant="outline" size="lg" className="hover:scale-105 transition-transform border-black text-black hover:bg-gray-100">
            Get In Touch
          </MotionButton>
        </div>
        
        <div className="flex gap-6 justify-center text-gray-600 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://github.com/Ar-ramoneey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-black hover:scale-110 transition-all"
            aria-label="GitHub"
          >
            <Github className="size-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-black hover:scale-110 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-6" />
          </a>
          <a 
            href="mailto:ibrahimabiodun2019@gmail.com"
            className="hover:text-black hover:scale-110 transition-all"
            aria-label="Email"
          >
            <Mail className="size-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
