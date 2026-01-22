import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import MotionButton from "./MotionButton";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ibrahimabiodun2019@gmail.com",
      href: "mailto:ibrahimabiodun2019@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+2349077612682",
      href: "tel:+2349077612682"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Atan Ota, Ogun State",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Ar-ramoneey"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/Ibrahimabi16871"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl mb-4 text-black">Get In Touch</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div 
                key={index} 
                className="p-6 bg-gray-50 rounded-lg border border-gray-300 text-center hover:border-black hover:shadow-xl hover:-translate-y-1 transition-all animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4 hover:rotate-12 hover:scale-110 transition-transform">
                  <Icon className="size-6 text-white" />
                </div>
                <div className="text-sm text-gray-600 mb-1">{info.label}</div>
                {info.href ? (
                  <a 
                    href={info.href}
                    className="text-black hover:text-gray-700 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="text-black">{info.value}</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center animate-on-scroll" style={{ animationDelay: '0.4s' }}>
          <div className="mb-6">
            <MotionButton size="lg" asChild className="hover:scale-105 transition-transform bg-black hover:bg-gray-800 text-white">
              <a href="mailto:ibrahimabiodun2019@gmail.com">
                Send Me an Email
              </a>
            </MotionButton>
          </div>
          
          <div className="flex gap-6 justify-center">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-black hover:bg-gray-100 hover:scale-110 hover:rotate-6 transition-all"
                  aria-label={social.label}
                >
                  <Icon className="size-5 text-gray-700 hover:text-black" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}