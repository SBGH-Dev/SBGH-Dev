import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    name: 'Backend & .NET',
    skills: [
      { name: 'C#', level: 95 },
      { name: 'ASP.NET / .NET Core', level: 90 },
      { name: 'REST APIs', level: 92 },
      { name: 'SQL Server (MSSQL)', level: 88 },
      { name: 'Stored Procedures', level: 85 },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Blazor', level: 80 },
    ],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Python & Tools',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'Flask', level: 85 },
      { name: 'Git & Bitbucket', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Azure & CI/CD', level: 70 },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Other Skills',
    skills: [
      { name: 'Crystal Reports', level: 85 },
      { name: 'ERP Systems', level: 88 },
      { name: 'Postman', level: 90 },
      { name: 'Agile/Scrum', level: 85 },
    ],
    color: 'from-orange-500 to-yellow-500',
  },
];

const techStack = [
  'C#', '.NET Core', 'React', 'Python', 'Flask', 'SQL Server',
  'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git', 'Docker',
  'Azure', 'Blazor', 'Crystal Reports', 'Postman'
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);

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

      // Category cards animation
      const categories = categoriesRef.current?.querySelectorAll('.skill-category');
      if (categories) {
        gsap.fromTo(
          categories,
          { opacity: 0, y: 60, rotateX: -15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Skill bars animation
      const skillBars = sectionRef.current?.querySelectorAll('.skill-bar-fill');
      if (skillBars) {
        skillBars.forEach((bar) => {
          const level = bar.getAttribute('data-level');
          gsap.to(bar, {
            width: `${level}%`,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          });
        });
      }

      // Tech stack animation
      const techItems = techStackRef.current?.querySelectorAll('.tech-item');
      if (techItems) {
        gsap.fromTo(
          techItems,
          { opacity: 0, scale: 0.5, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: techStackRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-purple-400 mb-4">
            My Skills
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience across multiple projects
            and industries.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Skills grid */}
        <div
          ref={categoriesRef}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="skill-category glass rounded-2xl p-6 sm:p-8 hover:glow-purple transition-all duration-500"
              style={{ perspective: '1000px' }}
              data-cursor-hover
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                />
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-bar-fill bg-gradient-to-r ${category.color}`}
                        data-level={skill.level}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Tech Stack</h3>
          <div
            ref={techStackRef}
            className="flex flex-wrap justify-center gap-3"
          >
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="tech-item px-4 py-2 rounded-full glass text-sm font-medium hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-default"
                data-cursor-hover
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
