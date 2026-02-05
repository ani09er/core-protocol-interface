import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Shield, Wind, ChevronDown, Play, Hexagon } from "lucide-react";
import { BootSequence } from "@/components/BootSequence";
import { ProtocolNode } from "@/components/ProtocolNode";
import { SectionHeader } from "@/components/SectionHeader";
import heroImage from "@/assets/hero-simulation-chamber.jpg";

const protocols = [
  {
    name: "AGGRESSIVE",
    icon: <Zap className="h-8 w-8" />,
    color: "hsl(0, 85%, 55%)",
    description: "Maximize damage output. High risk, high reward. Overwhelm enemies with relentless offense.",
    stats: { speed: 90, damage: 95, regen: 20 },
  },
  {
    name: "DEFENSIVE",
    icon: <Shield className="h-8 w-8" />,
    color: "hsl(210, 100%, 55%)",
    description: "Prioritize survival. Absorb damage and outlast opponents through superior defense.",
    stats: { speed: 40, damage: 50, regen: 90 },
  },
  {
    name: "EVASIVE",
    icon: <Wind className="h-8 w-8" />,
    color: "hsl(150, 80%, 45%)",
    description: "Agility is key. Dodge threats and strike when opportunity presents itself.",
    stats: { speed: 95, damage: 60, regen: 55 },
  },
];

const features = [
  {
    title: "ADAPTIVE AI",
    description: "Enemies learn your patterns. No two runs are the same.",
    icon: "🧠",
  },
  {
    title: "PROTOCOL MASTERY",
    description: "Switch strategies in real-time. Think faster than the simulation.",
    icon: "⚡",
  },
  {
    title: "RANKED SYSTEM",
    description: "Climb the clearance levels. Prove your tactical superiority.",
    icon: "📊",
  },
  {
    title: "MINIMAL UI",
    description: "Clean, distraction-free interface. Focus on what matters.",
    icon: "💎",
  },
];

const Index = () => {
  const [showBoot, setShowBoot] = useState(true);
  const [activeProtocol, setActiveProtocol] = useState<string | null>(null);

  useEffect(() => {
    // Check if already shown this session
    const hasBooted = sessionStorage.getItem("hexagix-booted");
    if (hasBooted) {
      setShowBoot(false);
    }
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem("hexagix-booted", "true");
    setShowBoot(false);
  };

  return (
    <>
      <AnimatePresence>
        {showBoot && <BootSequence onComplete={handleBootComplete} />}
      </AnimatePresence>

      <div className="relative">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          {/* Hero Background Image */}
          <div className="absolute inset-0">
            <motion.img
              src={heroImage}
              alt="AI Simulation Chamber"
              className="h-full w-full object-cover"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ filter: "brightness(1.2) saturate(1.3)" }}
            />
            {/* Gradient overlays - lighter for more visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
          </div>

          {/* Protocol Color Effect */}
          <motion.div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: activeProtocol
                ? `radial-gradient(ellipse at center, ${
                    protocols.find((p) => p.name === activeProtocol)?.color
                  }15 0%, transparent 60%)`
                : "transparent",
              opacity: activeProtocol ? 1 : 0,
            }}
          />

          {/* Floating Core */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <Hexagon className="h-96 w-96 text-primary" strokeWidth={0.5} />
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 px-4 text-center">
            {/* Version Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="font-mono text-xs tracking-wider text-primary">
                SIMULATION ACTIVE // v1.0
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6 font-display text-5xl font-bold tracking-wider text-foreground sm:text-7xl lg:text-8xl"
            >
              <span className="text-gradient-primary">CORE</span>
              <br />
              <span>PROTOCOL</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mx-auto mb-8 max-w-xl font-body text-xl text-muted-foreground sm:text-2xl"
            >
              Adapt the protocol. Survive the simulation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link to="/game" className="btn-protocol group flex items-center gap-2">
                <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>ENTER SIMULATION</span>
              </Link>
              <Link
                to="/studio"
                className="px-6 py-3 font-display text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                ABOUT HEXAGIX
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                SCROLL TO EXPLORE
              </span>
              <ChevronDown className="h-4 w-4 text-primary" />
            </motion.div>
          </motion.div>
        </section>

        {/* Protocol Preview Section */}
        <section className="section-module relative py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="// PROTOCOL MATRIX"
              title="CHOOSE YOUR APPROACH"
              description="Three distinct protocols. Infinite tactical possibilities. Each decision shapes your survival."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {protocols.map((protocol, index) => (
                <motion.div
                  key={protocol.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProtocolNode
                    {...protocol}
                    onHover={(isHovered) =>
                      setActiveProtocol(isHovered ? protocol.name : null)
                    }
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-module relative py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="// SYSTEM FEATURES"
              title="ENGINEERED FOR MASTERY"
              description="Every system designed to reward thinking over reflexes."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="protocol-card group rounded-lg border border-border/30 bg-card/30 p-6"
                >
                  <motion.span
                    className="mb-4 block text-3xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.span>
                  <h3 className="mb-2 font-display text-sm font-bold tracking-wider text-foreground">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-module relative py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-12"
            >
              {/* Background Grid */}
              <div className="hex-grid absolute inset-0 opacity-30" />

              <h2 className="relative mb-4 font-display text-3xl font-bold tracking-wider text-foreground sm:text-4xl">
                READY TO ENTER?
              </h2>
              <p className="relative mx-auto mb-8 max-w-md font-body text-lg text-muted-foreground">
                The simulation awaits. Adapt or be eliminated.
              </p>
              <Link to="/game" className="btn-protocol relative inline-flex items-center gap-2">
                <Hexagon className="h-4 w-4" />
                <span>BEGIN PROTOCOL</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
