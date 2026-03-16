import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp, Heart, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={footerRef} className="relative py-16 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="text-3xl font-bold gradient-text-animated mb-6"
            data-cursor-hover
          >
            Samah
          </a>

          {/* Tagline */}
          <p className="text-muted-foreground max-w-md mb-8">
            Full Stack Developer & Software Engineer crafting scalable solutions with clean code
            and modern technologies.
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(`#${link.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-cursor-hover
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://linkedin.com/in/samah-al-sabbagh-629449314/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-cyan-400 hover:glow-cyan transition-all duration-300"
              data-cursor-hover
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:samah.alsabbaghs@gmail.com"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-purple-400 hover:glow-purple transition-all duration-300"
              data-cursor-hover
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Samah Al Sabbagh. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart size={14} className="text-pink-400 fill-pink-400" /> in Jeddah
            </span>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-cyan-400 hover:glow-cyan transition-all duration-300 z-50"
          data-cursor-hover
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
