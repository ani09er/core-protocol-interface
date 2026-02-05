import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Hexagon, 
  Shield, 
  Brain, 
  BarChart3, 
  Layers, 
  Lock,
  ChevronRight,
  Smartphone,
  Clock,
  FlaskConical,
  Mail,
  CheckCircle2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const previewModules = [
  {
    icon: Shield,
    title: "Protocol-Based Combat",
    description: "Strategic stance switching between Aggressive, Defensive, and Evasive protocols.",
  },
  {
    icon: Brain,
    title: "Tactical Decision-Making",
    description: "Every choice matters. Outthink, don't outclick.",
  },
  {
    icon: BarChart3,
    title: "AI Clearance Analytics",
    description: "Track your protocol mastery across simulation runs.",
  },
  {
    icon: Layers,
    title: "Simulation Chambers",
    description: "Handcrafted encounters designed to test your tactical intelligence.",
  },
];

const PreLaunch = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="relative min-h-screen pt-20">
      {/* Scanning line effect */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero Section - Simulation Status */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* System Panel */}
            <div className="relative mx-auto max-w-2xl rounded-2xl border border-border/40 bg-card/30 p-8 backdrop-blur-sm">
              {/* Corner accents */}
              <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-primary/50" />
              <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-primary/50" />
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-primary/50" />

              {/* Hexagon icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mx-auto mb-6 w-fit"
              >
                <Hexagon className="h-16 w-16 text-primary" strokeWidth={1} />
              </motion.div>

              <h1 className="mb-4 font-display text-3xl font-bold tracking-wider text-foreground sm:text-4xl">
                CORE PROTOCOL
              </h1>

              {/* Status indicator */}
              <div className="mb-6 flex items-center justify-center gap-3">
                <motion.div
                  className="h-2 w-2 rounded-full bg-primary"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="font-mono text-sm tracking-widest text-primary">
                  SIMULATION IN PROGRESS
                </span>
              </div>

              <p className="font-body text-muted-foreground">
                The AI core is undergoing protocol validation.
              </p>

              {/* Abstract progress indicator */}
              <div className="mt-8 flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-1 w-8 rounded-full bg-primary/30"
                    animate={{
                      backgroundColor: [
                        "hsl(var(--primary) / 0.3)",
                        "hsl(var(--primary) / 1)",
                        "hsl(var(--primary) / 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Release Status Module */}
      <section className="relative py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            <div className="flex items-center gap-4 rounded-xl border border-border/30 bg-card/20 p-4">
              <Smartphone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">PLATFORM</p>
                <p className="font-display text-sm tracking-wide text-foreground">
                  Android (Google Play)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-border/30 bg-card/20 p-4">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">RELEASE STATE</p>
                <p className="font-display text-sm tracking-wide text-foreground">
                  Coming Soon
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-border/30 bg-card/20 p-4">
              <FlaskConical className="h-5 w-5 text-primary" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">CURRENT PHASE</p>
                <p className="font-display text-sm tracking-wide text-foreground">
                  Internal Testing
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Preview Modules */}
      <section className="relative py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-10 text-center"
          >
            <span className="font-mono text-xs tracking-[0.3em] text-primary">
              // SYSTEM PREVIEW
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-wider text-foreground">
              INCOMING MODULES
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {previewModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-border/30 bg-card/20 p-6"
              >
                {/* Lock overlay */}
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-border/30 bg-background/50 px-3 py-1">
                  <Lock className="h-3 w-3 text-muted-foreground" />
                  <span className="font-mono text-[10px] text-muted-foreground">LOCKED</span>
                </div>

                {/* Scan effect on hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <motion.div
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>

                <module.icon className="mb-4 h-8 w-8 text-primary/70" strokeWidth={1.5} />
                <h3 className="mb-2 font-display text-lg font-bold tracking-wide text-foreground">
                  {module.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notification Section */}
      <section className="relative py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="rounded-2xl border border-border/30 bg-card/20 p-8 text-center"
          >
            <Mail className="mx-auto mb-4 h-8 w-8 text-primary" strokeWidth={1.5} />
            <h3 className="mb-2 font-display text-xl font-bold tracking-wider text-foreground">
              Receive Simulation Access Updates
            </h3>
            <p className="mb-6 font-body text-sm text-muted-foreground">
              Request notification when CORE PROTOCOL enters public deployment.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-border/30 bg-background/50 font-mono text-sm"
                  required
                />
                <Button type="submit" className="font-display tracking-wider">
                  Request Notification
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 rounded-lg border border-primary/30 bg-primary/10 p-4"
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <p className="font-mono text-sm text-primary">
                  You will be notified when CORE PROTOCOL enters public deployment.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Developer Note */}
      <section className="relative py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="rounded-xl border border-border/20 bg-card/10 p-8"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              <span className="font-mono text-xs tracking-widest text-muted-foreground">
                DEVELOPER NOTE
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            <div className="space-y-4 text-center font-body text-sm leading-relaxed text-muted-foreground">
              <p>
                <span className="text-foreground">CORE PROTOCOL</span> is currently in development at{" "}
                <span className="text-primary">HEXAGIX STUDIO</span>.
              </p>
              <p>
                The game focuses on system-driven design, intelligent protocol switching, 
                and mastery-based progression.
              </p>
              <p>
                Public release details will be announced once simulation validation is complete.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="relative py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              to="/game"
              className="group flex items-center gap-2 rounded-lg border border-border/30 bg-card/20 px-6 py-3 font-display text-sm tracking-wider text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
            >
              Learn About the Game
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/studio"
              className="group flex items-center gap-2 rounded-lg border border-border/30 bg-card/20 px-6 py-3 font-display text-sm tracking-wider text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
            >
              Explore HEXAGIX STUDIO
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/devlog"
              className="group flex items-center gap-2 rounded-lg border border-border/30 bg-card/20 px-6 py-3 font-display text-sm tracking-wider text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
            >
              View Development Logs
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PreLaunch;
