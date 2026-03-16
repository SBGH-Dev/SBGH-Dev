import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Layers, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'Luda Cards',
    subtitle: 'A Trello Alternative',
    url: 'ludacards.com',
    description:
      'A comprehensive project management platform inspired by Trello, enabling teams to organize tasks, collaborate in real-time, and track project progress efficiently.',
    role: 'Full Stack Developer',
    organization: 'Luday SE',
    contributions: [
      'Designed and implemented the front-end interface using React',
      'Ensured user-friendly and responsive design across all devices',
      'Developed RESTful APIs with Python for robust backend functionality',
      'Implemented task creation, user authentication, and real-time updates',
      'Integrated frontend and backend for seamless data flow',
    ],
    tech: ['React', 'Python', 'Flask', 'BitBucket', 'REST APIs', 'Agile'],
    color: 'from-purple-500 to-pink-500',
    gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
  },
  {
    name: 'Best Deal Naija',
    subtitle: 'Deals and Discounts Platform',
    url: 'bestdealnaija.com',
    description:
      'A platform connecting Nigerian consumers with the best deals and discounts from various retailers, featuring real-time updates and personalized recommendations.',
    role: 'Full Stack Developer',
    organization: 'Luday SE',
    contributions: [
      'Built responsive user interfaces using React',
      'Developed RESTful APIs with Python and Flask',
      'Worked closely with team of Full Stack Developers',
      'Enabled seamless data flow and real-time collaboration',
      'Implemented deal aggregation and user recommendation system',
    ],
    tech: ['React', 'Python', 'Flask', 'BitBucket', 'REST APIs', 'Agile'],
    color: 'from-cyan-500 to-blue-500',
    gradient: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80, rotateX: -20 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-cyan-400 mb-4">
            Projects
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world projects built during my internships, showcasing my ability to deliver
            complete full-stack solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Project cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8"
          style={{ perspective: '1000px' }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`glass rounded-2xl overflow-hidden hover:glow-purple transition-all duration-500 h-full ${project.gradient}`}
                data-cursor-hover
              >
                {/* Card header with gradient */}
                <div className={`h-32 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="text-white/30" size={80} />
                  </div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                    <p className="text-white/80 text-sm">{project.subtitle}</p>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  {/* Role & Organization */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <Users size={14} />
                      {project.role}
                    </span>
                    <span className="text-muted-foreground">@ {project.organization}</span>
                  </div>

                  {/* Contributions */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Key Contributions:</h4>
                    <ul className="space-y-1">
                      {project.contributions.slice(0, 3).map((contribution, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} mt-1.5 flex-shrink-0`} />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center text-sm py-2"
                      data-cursor-hover
                    >
                      <ExternalLink size={14} className="inline mr-2" />
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects hint */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More projects available on request.{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-cyan-400 hover:underline"
              data-cursor-hover
            >
              Get in touch
            </a>{' '}
            to learn more!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
