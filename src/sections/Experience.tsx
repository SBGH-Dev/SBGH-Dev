import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Building2, Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'SBTC',
    subtitle: 'Said Bawazier Trading Company - Indomie KSA',
    role: 'ERP Software Developer',
    location: 'Jeddah, Saudi Arabia',
    type: 'On-Site - Full-Time',
    period: 'May 2025 – Present',
    description: [
      'Design and develop ERP web pages using ASP.NET C# and SQL Server',
      'Write stored procedures (SPs), build custom reports, and implement business logic',
      'Support real-time operational workflows with UI development and backend integration',
      'Develop and maintain automated .NET APIs for daily data submission to government systems',
      'Ensure compliance and system reliability for enterprise-grade operations',
    ],
    color: 'from-yellow-500 to-orange-500',
    icon: Building2,
  },
  {
    company: 'Luday SE',
    subtitle: 'Swedish Tech Company',
    role: 'Full Stack Developer',
    location: 'Gothenburg, Sweden',
    type: 'Remote - Internship',
    period: 'Sep 2024 – Feb 2025',
    description: [
      'Developed and maintained backend APIs using Python (Flask)',
      'Implemented modern React-based frontend interfaces',
      'Built and integrated RESTful services with seamless data flow',
      'Improved application performance and reliability',
      'Worked in Agile/Scrum environment with sprint planning and code reviews',
    ],
    color: 'from-purple-500 to-pink-500',
    icon: Briefcase,
  },
  {
    company: 'Lime Light Renhold AS',
    subtitle: 'Norwegian Cleaning Services',
    role: 'Full Stack Developer',
    location: 'Oslo, Norway',
    type: 'Remote - Internship',
    period: 'Jul 2023 – Dec 2023',
    description: [
      'Designed and developed responsive web applications using JavaScript, HTML, CSS',
      'Implemented backend logic with Python for data processing',
      'Collaborated with designers and developers in cross-functional teams',
      'Used Git for version control and maintained clean, scalable code',
    ],
    color: 'from-cyan-500 to-blue-500',
    icon: Briefcase,
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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

      // Timeline line animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );

      // Experience cards animation
      const cards = timelineRef.current?.querySelectorAll('.experience-card');
      if (cards) {
        cards.forEach((card, index) => {
          const isLeft = index % 2 === 0;
          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: isLeft ? -80 : 80,
              rotateY: isLeft ? 15 : -15,
            },
            {
              opacity: 1,
              x: 0,
              rotateY: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // Timeline dots animation
      const dots = timelineRef.current?.querySelectorAll('.timeline-dot');
      if (dots) {
        gsap.fromTo(
          dots,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.3,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: timelineRef.current,
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
      id="experience"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-pink-400 mb-4">
            Experience
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From internships in Sweden and Norway to a full-time role at a major Saudi company,
            I've built a diverse and impactful career.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center line - desktop only */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500 -translate-x-1/2 origin-top"
          />

          {/* Experience cards */}
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                    index > 0 ? 'lg:mt-12' : ''
                  }`}
                >
                  {/* Timeline dot - desktop */}
                  <div
                    className={`timeline-dot hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} items-center justify-center`}
                  >
                    <div className="w-3 h-3 rounded-full bg-background" />
                  </div>

                  {/* Card */}
                  <div
                    className={`experience-card ${
                      isLeft ? 'lg:pr-12' : 'lg:col-start-2 lg:pl-12'
                    }`}
                  >
                    <div
                      className="glass rounded-2xl p-6 sm:p-8 hover:glow-purple transition-all duration-500 group"
                      data-cursor-hover
                    >
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <exp.icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold">{exp.company}</h3>
                          <p className="text-sm text-muted-foreground">{exp.subtitle}</p>
                        </div>
                      </div>

                      {/* Role & Details */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                          {exp.role}
                        </h4>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                        <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs bg-white/5">
                          {exp.type}
                        </span>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
