import logoImg from "../../assets/favicon-circle.png";
import { Mail, MapPin, Globe } from "lucide-react";
import { useLenis } from "lenis/react";

export function Footer() {
  const lenis = useLenis();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target && lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Branding Section */}
        <div className="flex items-center gap-3 mb-8">
          <div className="rounded-full overflow-hidden w-10 h-10">
            <img src={logoImg} alt="CodeMasters Logo" className="w-full h-full object-contain bg-white/10" />
          </div>
          <h2 className="text-4xl font-bold tracking-tighter">
            CODE<span className="text-accent italic">MASTERS</span>
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-white/40 max-w-xl text-xl mb-12 font-light leading-relaxed">
          Transforming complex challenges into <span className="text-white">exceptional digital solutions.</span> <br />
          Engineering the future, one pixel at a time.
        </p>

        {/* Contact Info Row */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16 text-white/50 text-sm font-medium uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-accent" />
            <span>kandhalshakil@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-accent" />
            <span>Gujarat, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-accent" />
            <span>codemasters.tech</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-xs tracking-widest font-bold">
          <p>© 2026 CODEMASTERS AGENCY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="hover:text-white transition-colors text-accent"
            >
              HIRE US
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
