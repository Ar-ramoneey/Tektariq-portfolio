import { ProjectCard } from "./ProjectCards";

const projects = [
  {
    id: "1",
    title: "Etoariya",
    description:
      "TURNING OCCASIONS INTO LASTING MEMORIES",
    image:
      "https://res.cloudinary.com/dd5zyiyem/image/upload/v1769066202/Screenshot_151_dzl53m.png",
    
    liveUrl: "https://dev.etoariya.com.ng",
    githubUrl: "https://github.com/iotb-tech/etoariya_frontend.git",
  },
  {
    id: "2",
    title: "EchoReads",
    description:
      "A digital library platform that makes books, research, and educational resources easy to access in one place.",
    image:
      "https://res.cloudinary.com/dd5zyiyem/image/upload/v1769066912/Screenshot_152_pqwwq0.png",
  
    liveUrl: "https://echo-reads-nu.vercel.app/",
    githubUrl: "https://github.com/iotb-tech/EchoReads.git",
  },
  {
    id: "3",
    title: "Easy School Management",
    description:
      "Easy School Management is a simple, efficient platform for managing students, teachers, classes, and school operations in one place.",
    image:
      "https://res.cloudinary.com/dd5zyiyem/image/upload/v1769069912/Screenshot_153_agsoan.png",
    liveUrl: "https://pre-capstone-e0h95jgce-arrahmoneeys-projects.vercel.app/",
    githubUrl: "https://github.com/Ar-ramoneey/Pre-Capstone-.git",
  },
  {
    id: "4",
    title: "Dicee Game",
    description:
      "A simple dice game website featuring interactive gameplay and a clean, user-friendly design.",
    image:
      "https://res.cloudinary.com/dd5zyiyem/image/upload/v1769070645/Screenshot_154_zrfgxa.png",
 
    liveUrl: "https://ar-ramoneey.github.io/Dicee-game/",
    githubUrl: "https://github.com/Ar-ramoneey/Dicee-game.git",
  },
  {
    id: "5",
    title: "Number Guessing Challenge",
    description:
      "A fun number challenge game website that encourages users to think fast and solve number-based puzzles.",
    image:
      "https://res.cloudinary.com/dd5zyiyem/image/upload/v1769071467/Screenshot_155_dowzmc.png",
  
    liveUrl:
      "https://secret-numbers-ktzc7fd94-arrahmoneeys-projects.vercel.app/",
    githubUrl: "https://github.com/Ar-ramoneey/SecretNumbers.git",
  },
  {
    id: "6",
    title: "Etoariya Backend",
    description:
            "A full-stack event management app for creating, managing, and attending events, with a strong focus on backend architecture and APIs.",

    image:
      "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY4NTc3ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
   
    liveUrl: "https://api.dev.etoariya.com.ng",
    githubUrl: "https://github.com/iotb-tech/etoariya_backend.git",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl mb-4 text-black">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
