export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "TailwindCSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB","Prisma", "REST APIs", "Swagger"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Vercel", "Figma", "Postman", "Render"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl mb-4 text-black">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-white border border-gray-300 hover:border-black hover:shadow-xl transition-all animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-xl mb-4 text-black">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gray-100 border border-gray-300 text-gray-800 rounded-full text-sm hover:border-black hover:text-black hover:bg-gray-200 hover:scale-110 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
