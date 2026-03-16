import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, BookOpen, Calendar, GraduationCap, MapPin, Network, Server, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const education = {
  degree: 'BSc in Computer Science Engineering',
  university: 'University of Debrecen',
  location: 'Debrecen, Hungary',
  period: 'Sep 2020 – Jun 2024',
};

const certifications = [
  {
    name: 'Cisco Certified Network Associate (CCNAv7)',
    provider: 'Cisco',
    icon: Network,
    color: 'from-blue-500 to-cyan-500',
    courses: [
      'Introduction to Networks (CCNA 1)',
      'Switching, Routing, and Wireless Essentials (CCNA 2)',
      'Enterprise Networking, Security, and Automation (CCNA 3)',
    ],
  },
  {
    name: 'The Complete Python Developer',
    provider: 'Zero To Mastery Academy (ZMT)',
    icon: Server,
    color: 'from-yellow-500 to-green-500',
    courses: [],
  },
  {
    name: 'ASP.NET C# Programming with JS and HTML',
    provider: 'Udemy',
    subtitle: 'Beginner to Expert',
    icon: Shield,
    color: 'from-purple-500 to-pink-500',
    courses: [],
  },
  {
    name: 'The Complete SQL Bootcamp',
    provider: 'Udemy',
    icon: BookOpen,
    color: 'from-orange-500 to-red-500',
    courses: [],
  },
];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);

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

      // Education card animation
      gsap.fromTo(
        educationRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: educationRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Certification cards animation
      const certCards = certsRef.current?.querySelectorAll('.cert-card');
      if (certCards) {
        gsap.fromTo(
          certCards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: certsRef.current,
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
      id="education"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-green-400 mb-4">
            Education
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Learning & <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A strong academic foundation combined with industry-recognized certifications.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Education & Certifications grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div ref={educationRef}>
            <div className="glass rounded-2xl p-8 h-full hover:glow-purple transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-2xl font-bold gradient-text mb-2">
                    {education.degree}
                  </h4>
                  <p className="text-lg text-foreground">{education.university}</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-cyan-400" />
                    {education.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-purple-400" />
                    {education.period}
                  </span>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-muted-foreground">
                    Completed a comprehensive computer science program with focus on software
                    engineering, algorithms, data structures, and system design.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div ref={certsRef} className="space-y-4">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <Award className="text-cyan-400" size={24} />
              Certifications
            </h3>

            {certifications.map((cert, index) => (
              <div
                key={index}
                className="cert-card glass rounded-xl p-5 hover:glow-cyan transition-all duration-500 group"
                data-cursor-hover
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <cert.icon className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.provider}
                      {cert.subtitle && (
                        <span className="text-cyan-400"> • {cert.subtitle}</span>
                      )}
                    </p>

                    {/* CCNA courses */}
                    {cert.courses.length > 0 && (
                      <div className="mt-3 space-y-1">
                        {cert.courses.map((course, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1 h-1 rounded-full bg-cyan-400" />
                            {course}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
