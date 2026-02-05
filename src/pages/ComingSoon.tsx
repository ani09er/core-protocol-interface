import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Hexagon,
  Shield,
  Brain,
  BarChart3,
  Layers,
  Bell,
  CheckCircle,
  ExternalLink,
  Smartphone,
  Clock,
  Lock,
  ChevronRight,
} from "lucide-react";

const previewModules = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "PROTOCOL-BASED COMBAT",
    description: "Switch between Aggressive, Defensive, and Evasive protocols in real-time to counter dynamic threats.",
    status: "LOCKED",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "TACTICAL DECISION-MAKING",
    description: "Every choice matters. Outsmart AI opponents through strategic thinking, not reflex spam.",
    status: "LOCKED",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "AI CLEARANCE LEVELS",
    description: "Climb ranked tiers based on tactical performance. Detailed analytics track your mastery.",
    status: "LOCKED",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "SIMULATION CHAMBERS",
    description: "Handcrafted environments with unique hazards, obstacles, and enemy configurations.",
    status: "LOCKED",
  },
];

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="relative min-h-screen pt-20">
      {/* Hero Section - Simulation Status */}
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card/40 p-8 backdrop-blur-sm lg:p-12"
          >
            {/* Background Effects */}
            <div className="hex-grid absolute inset-0 opacity-20" />
            <div className="scan-lines absolute inset-0" />
            
            {/* Corner Accents */}
            <div className="absolute left-0 top-0 h-16 w-px bg-gradient-to-b from-primary to-transparent" />
            <div className="absolute left-0 top-0 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
            <div className="absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-primary to-transparent" />
            <div className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-primary to-transparent" />

            <div className="relative text-center">
              {/* System Label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2"
              >
                <motion.span
                  className="h-2 w-2 rounded-full bg-primary"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="font-mono text-xs tracking-wider text-primary">
                  SIMULATION INITIALIZATION
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-4 font-display text-4xl font-bold tracking-wider text-foreground sm:text-5xl lg:text-6xl"
              >
                <span className="text-gradient-primary">CORE</span>{" "}
                <span>PROTOCOL</span>
              </motion.h1>

              {/* Status Display */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-6"
              >
                <div className="mb-2 font-mono text-sm text-muted-foreground">
                  STATUS:
                </div>
                <div className="inline-flex items-center gap-3 rounded-lg border border-warning/30 bg-warning/5 px-6 py-3">
                  <motion.div
                    className="h-3 w-3 rounded-full bg-warning"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="font-display text-lg tracking-wider text-warning">
                    SIMULATION IN PROGRESS
                  </span>
                </div>
              </motion.div>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mx-auto max-w-lg font-body text-lg text-muted-foreground"
              >
                The AI core is undergoing protocol validation.
              </motion.p>

              {/* Abstract Progress Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2"
              >
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-1 flex-1 overflow-hidden rounded-full bg-muted"
                  >
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Release Status Module */}
      <section className="section-module relative py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-3"
          >
            {/* Platform */}
            <div className="protocol-card flex items-center gap-4 rounded-lg border border-border/40 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/5">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <span className="block font-mono text-[10px] tracking-wider text-muted-foreground">
                  PLATFORM
                </span>
                <span className="font-display text-sm tracking-wider text-foreground">
                  Android (Google Play)
                </span>
              </div>
            </div>

            {/* Release State */}
            <div className="protocol-card flex items-center gap-4 rounded-lg border border-border/40 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-warning/30 bg-warning/5">
                <Clock className="h-5 w-5 text-warning" />
              </div>
              <div>
                <span className="block font-mono text-[10px] tracking-wider text-muted-foreground">
                  RELEASE STATE
                </span>
                <span className="font-display text-sm tracking-wider text-warning">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Current Phase */}
            <div className="protocol-card flex items-center gap-4 rounded-lg border border-border/40 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent/30 bg-accent/5">
                <Lock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <span className="block font-mono text-[10px] tracking-wider text-muted-foreground">
                  CURRENT PHASE
                </span>
                <span className="font-display text-sm tracking-wider text-accent">
                  Internal Testing
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Coming - Preview Blocks */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <span className="mb-3 block font-mono text-xs tracking-[0.3em] text-primary">
              // PENDING MODULES
            </span>
            <h2 className="font-display text-2xl font-bold tracking-wider text-foreground sm:text-3xl">
              SIMULATION COMPONENTS
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {previewModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="protocol-card group relative overflow-hidden rounded-xl border border-border/40 p-6"
              >
                {/* Lock Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/40" />
                
                {/* Status Badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-muted-foreground/30 bg-muted/50 px-3 py-1">
                  <Lock className="h-3 w-3 text-muted-foreground" />
                  <span className="font-mono text-[9px] tracking-wider text-muted-foreground">
                    {module.status}
                  </span>
                </div>

                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary/70">
                    {module.icon}
                  </div>

                  <h3 className="mb-2 font-display text-sm font-bold tracking-wider text-foreground/90">
                    {module.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {module.description}
                  </p>
                </div>

                {/* Scan line on hover */}
                <motion.div
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  animate={{ y: [0, 200] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notify / Interest Capture */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="protocol-card overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-8"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <Bell className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg tracking-wider text-foreground">
                RECEIVE SIMULATION ACCESS UPDATES
              </h3>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    required
                    placeholder="Enter your email address"
                    className="w-full rounded-lg border border-border/50 bg-card/50 px-4 py-3 font-body text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-card"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-primary"
                    animate={{ width: focused ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-protocol w-full"
                >
                  REQUEST NOTIFICATION
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 py-4 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-success/50 bg-success/10">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  You will be notified when CORE PROTOCOL enters public deployment.
                </p>
              </motion.div>
            )}

            <p className="mt-4 text-center font-mono text-[10px] text-muted-foreground/60">
              NOTIFICATION SYSTEM // SECURE CHANNEL
            </p>
          </motion.div>
        </div>
      </section>

      {/* Developer Note */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="protocol-card rounded-xl border border-border/30 p-8 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2">
              <Hexagon className="h-5 w-5 text-primary" />
              <span className="font-mono text-xs tracking-wider text-primary">
                DEVELOPER NOTE
              </span>
            </div>

            <div className="space-y-4 font-body text-muted-foreground">
              <p>
                <span className="font-display tracking-wider text-foreground">CORE PROTOCOL</span> is
                currently in development at{" "}
                <span className="font-display tracking-wider text-foreground">HEXAGIX STUDIO</span>.
              </p>
              <p>
                The game focuses on system-driven design, intelligent protocol switching,
                and mastery-based progression.
              </p>
              <p>
                Public release details will be announced once simulation validation is complete.
              </p>
            </div>

            <motion.div
              className="mt-6 font-mono text-[10px] text-muted-foreground/50"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              DOCUMENTATION STATUS: VERIFIED // INTEGRITY: CONFIRMED
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <span className="font-mono text-xs tracking-[0.3em] text-primary">
              // EXPLORE FURTHER
            </span>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            <Link to="/game">
              <motion.div
                whileHover={{ scale: 1.02, borderColor: "hsl(185, 100%, 55%)" }}
                className="protocol-card flex items-center justify-between rounded-lg border border-border/40 p-5 transition-colors"
              >
                <span className="font-display text-sm tracking-wider text-foreground">
                  Learn About the Game
                </span>
                <ChevronRight className="h-4 w-4 text-primary" />
              </motion.div>
            </Link>

            <Link to="/studio">
              <motion.div
                whileHover={{ scale: 1.02, borderColor: "hsl(185, 100%, 55%)" }}
                className="protocol-card flex items-center justify-between rounded-lg border border-border/40 p-5 transition-colors"
              >
                <span className="font-display text-sm tracking-wider text-foreground">
                  Explore HEXAGIX STUDIO
                </span>
                <ChevronRight className="h-4 w-4 text-primary" />
              </motion.div>
            </Link>

            <Link to="/devlog">
              <motion.div
                whileHover={{ scale: 1.02, borderColor: "hsl(185, 100%, 55%)" }}
                className="protocol-card flex items-center justify-between rounded-lg border border-border/40 p-5 transition-colors"
              >
                <span className="font-display text-sm tracking-wider text-foreground">
                  View Development Logs
                </span>
                <ChevronRight className="h-4 w-4 text-primary" />
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;
