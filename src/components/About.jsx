import { Code2, Palette, Zap } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code is my priority",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description:
        "Creating beautiful user interfaces with attention to detail",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing for speed and delivering exceptional user experiences",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl mb-4 text-black">About Me</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I’m a backend-focused full-stack developer with experience building
            REST APIs, authentication systems, and data-driven applications. I
            enjoy designing clean backend architecture and connecting it with
            responsive frontend interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-300 bg-white hover:border-black hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4 hover:rotate-12 hover:scale-110 transition-transform duration-300">
                  <Icon className="size-6 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-black">{highlight.title}</h3>
                <p className="text-gray-700">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
