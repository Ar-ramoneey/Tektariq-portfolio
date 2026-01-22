import { ExternalLink, Github } from "lucide-react";
import MotionButton from "./MotionButton";


export function ProjectCard({ project }) {
  return (
    <div className="group rounded-lg overflow-hidden border border-gray-300 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative overflow-hidden aspect-video bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl mb-2 text-black group-hover:text-gray-700 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              variant="secondary"
              className="hover:scale-110 transition-transform bg-gray-100 text-gray-800 border-gray-300"
            >
              {tag}
            </span>
        //   ))} */}
        {/* // </div> */}

        <div className="flex gap-3">
          {project.liveUrl && (
            <MotionButton
              variant="default"
              size="sm"
              className="gap-2 bg-black hover:bg-gray-800 text-white"
              asChild
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-4" />
                Live Demo
              </a>
            </MotionButton>
          )}

          {project.githubUrl && (
            <MotionButton
              variant="outline"
              size="sm"
              className="gap-2 border-black text-black hover:bg-gray-100"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4" />
                Code
              </a>
            </MotionButton>
          )}
        </div>
      </div>
    </div>
  );
}
