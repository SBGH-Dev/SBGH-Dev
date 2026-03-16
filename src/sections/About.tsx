import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Globe, Layers, Sparkles, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code with best practices',
    color: 'text-purple-400',
    glow: 'glow-purple',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Expert in SQL Server and efficient data architecture',
    color: 'text-cyan-400',
    glow: 'glow-cyan',
  },
  {
    icon: Globe,
    title: 'Global Experience',
    description: 'Worked remotely with teams across Sweden & Norway',
    color: 'text-pink-400',
    glow: 'glow-pink',
  },
  {
    icon: Layers,
    title: 'Full Stack',
    description: 'End-to-end development from frontend to backend',
    color: 'text-blue-400',
    glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed and efficiency',
    color: 'text-yellow-400',
    glow: 'hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]',
  },
  {
    icon: Sparkles,
    title: 'Modern Tech',
    description: 'Staying current with latest technologies and trends',
    color: 'text-green-400',
    glow: 'hover:shadow-[0_0_20px_rgba(74,222,128,0.5)]',
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
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

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.highlight-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-cyan-400 mb-4">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Passionate About{' '}
            <span className="gradient-text">Building Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - About text */}
          <div ref={contentRef} className="space-y-6">
            <div className="glass rounded-2xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a <span className="text-foreground font-semibold">Software Engineer</span> and{' '}
                <span className="text-foreground font-semibold">Full-Stack Developer</span> with
                strong hands-on experience in C#, React, Python, JavaScript, HTML, and CSS.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I have a proven ability to design and build{' '}
                <span className="text-cyan-400">scalable web applications</span>,{' '}
                <span className="text-purple-400">APIs</span>, and{' '}
                <span className="text-pink-400">enterprise-grade systems</span>, with a focus on
                clean architecture, performance, and real-world business requirements.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working at <span className="text-foreground font-semibold">SBTC</span>{' '}
                (Said Bawazier Trading Company - Indomie KSA) as an ERP Software Developer, where I
                design and develop ERP web pages using ASP.NET C# and SQL Server.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">Lebanese</div>
                <div className="text-sm text-muted-foreground">Nationality</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">Bilingual</div>
                <div className="text-sm text-muted-foreground">English & Arabic</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-pink-400 mb-1">Valid Iqama</div>
                <div className="text-sm text-muted-foreground">Transferable</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">Open</div>
                <div className="text-sm text-muted-foreground">To Opportunities</div>
              </div>
            </div>
          </div>

          {/* Right column - Highlight cards */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`highlight-card glass rounded-xl p-6 hover:${item.glow} transition-all duration-500 group cursor-pointer`}
                data-cursor-hover
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`${item.color}`} size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
