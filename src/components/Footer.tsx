import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Hexagon, Mail, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Home", path: "/" },
    { label: "Core Protocol", path: "/game" },
    { label: "Systems", path: "/systems" },
    { label: "Studio", path: "/studio" },
    { label: "Devlog", path: "/devlog" },
    { label: "Contact", path: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 bg-background/80 backdrop-blur-sm">
      {/* Top Border Glow */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 30 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Hexagon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-xs font-bold text-primary">H</span>
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-wider text-foreground">
                  HEXAGIX STUDIO
                </span>
                <span className="font-mono text-[10px] tracking-widest text-primary/70">
                  INTELLIGENCE • ADAPTATION • PROTOCOL
                </span>
              </div>
            </Link>
            
            <p className="mt-4 max-w-md font-body text-sm text-muted-foreground">
              An independent game development studio dedicated to system-driven design,
              intelligent mechanics, and player mastery.
            </p>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href="mailto:contact@hexagixstudio.com"
                className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                contact@hexagixstudio.com
              </a>
              <div className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                India
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="mb-4 font-display text-sm tracking-wider text-foreground">
              NAVIGATION
            </h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-4 font-display text-sm tracking-wider text-foreground">
              LEGAL
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border/50 bg-card/50 px-4 py-2 font-mono text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                <ExternalLink className="h-3 w-3" />
                Google Play Store
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-8 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} HEXAGIX STUDIO. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-[10px] text-muted-foreground/50">
            SIMULATION VERSION 1.0.0 // PROTOCOL STATUS: ACTIVE
          </p>
        </div>
      </div>
    </footer>
  );
};
