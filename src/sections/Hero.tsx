import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Title animation with character split effect
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 80, rotateX: -45 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.7'
        )
        .fromTo(
          buttonsRef.current?.children || [],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
          '-=0.5'
        )
        .fromTo(
          statsRef.current?.children || [],
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        )
        .fromTo(
          decorRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)' },
          '-=1'
        );

      // Floating animation for decorative elements
      gsap.to('.hero-float-1', {
        y: -20,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.hero-float-2', {
        y: 20,
        rotation: -5,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.hero-float-3', {
        scale: 1.1,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative floating elements */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none">
        {/* Floating orbs */}
        <div className="hero-float-1 absolute top-20 left-[10%] w-32 h-32 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="hero-float-2 absolute top-40 right-[15%] w-48 h-48 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="hero-float-3 absolute bottom-32 left-[20%] w-40 h-40 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="hero-float-1 absolute bottom-20 right-[10%] w-36 h-36 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Geometric shapes */}
        <div className="hero-float-2 absolute top-[30%] right-[8%] w-16 h-16 border border-purple-500/30 rotate-45" />
        <div className="hero-float-1 absolute bottom-[25%] left-[5%] w-12 h-12 border border-cyan-500/30 rounded-full" />
        <div className="hero-float-3 absolute top-[60%] right-[20%] w-8 h-8 bg-gradient-to-br from-purple-500/30 to-cyan-500/30" />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 perspective-1000"
        >
          <span className="block text-foreground">Hi, I'm</span>
          <span className="block gradient-text-animated mt-2">Samah Al Sabbagh</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 max-w-3xl mx-auto"
        >
          Full Stack Developer & Software Engineer
        </p>

        {/* Location & Contact */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-cyan-400" />
            Jeddah, Saudi Arabia
          </span>
          <span className="flex items-center gap-2">
            <Phone size={16} className="text-purple-400" />
            +966 533 204 969
          </span>
          <span className="flex items-center gap-2">
            <Mail size={16} className="text-pink-400" />
            samah.alsabbaghs@gmail.com
          </span>
        </div>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
            data-cursor-hover
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-outline"
            data-cursor-hover
          >
            View My Work
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '10+', label: 'Projects Built' },
            { value: '3', label: 'Countries Worked' },
            { value: '15+', label: 'Technologies' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass rounded-xl p-4 hover:glow-purple transition-all duration-500"
              data-cursor-hover
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-12">
          <a
            href="https://linkedin.com/in/samah-al-sabbagh-629449314/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-cyan-400 hover:glow-cyan transition-all duration-300"
            data-cursor-hover
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:samah.alsabbaghs@gmail.com"
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-purple-400 hover:glow-purple transition-all duration-300"
            data-cursor-hover
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        data-cursor-hover
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
