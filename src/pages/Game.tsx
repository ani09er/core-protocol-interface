import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Shield, Wind, AlertTriangle, Lock, Timer, Activity } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const protocols = [
  {
    id: "aggressive",
    name: "AGGRESSIVE",
    icon: <Zap className="h-6 w-6" />,
    color: "hsl(0, 85%, 55%)",
    description: "Maximum offense. Overwhelm enemies with relentless damage output.",
    behavior: "Prioritizes attack speed and damage multipliers. Reduced regeneration. High-risk engagement patterns.",
    speed: 90,
    damage: 95,
    regen: 20,
  },
  {
    id: "defensive",
    name: "DEFENSIVE",
    icon: <Shield className="h-6 w-6" />,
    color: "hsl(210, 100%, 55%)",
    description: "Survival first. Absorb damage and outlast all threats.",
    behavior: "Enhanced shield capacity and HP regeneration. Reduced mobility. Optimal for sustained encounters.",
    speed: 40,
    damage: 50,
    regen: 90,
  },
  {
    id: "evasive",
    name: "EVASIVE",
    icon: <Wind className="h-6 w-6" />,
    color: "hsl(150, 80%, 45%)",
    description: "Speed is survival. Dodge everything, strike opportunistically.",
    behavior: "Maximum velocity and maneuverability. Balanced damage output. Ideal for navigating complex threat patterns.",
    speed: 95,
    damage: 60,
    regen: 55,
  },
];

const enemies = [
  {
    name: "TRACKER DRONE",
    threat: "LOW",
    behavior: "Follows player movement patterns. Predictable but persistent.",
    counters: "AGGRESSIVE",
    counterColor: "hsl(0, 85%, 55%)",
    optimalResponse: "Destroy before they accumulate. Aggressive protocol recommended.",
  },
  {
    name: "SHIELD BARRIER",
    threat: "MEDIUM",
    behavior: "Static defensive entity. Blocks pathways and absorbs damage.",
    counters: "EVASIVE",
    counterColor: "hsl(150, 80%, 45%)",
    optimalResponse: "Navigate around. Evasive protocol conserves resources.",
  },
  {
    name: "PULSE CANNON",
    threat: "HIGH",
    behavior: "High-damage burst attacks. Long cooldown between shots.",
    counters: "DEFENSIVE",
    counterColor: "hsl(210, 100%, 55%)",
    optimalResponse: "Tank the damage during cooldowns. Defensive protocol ensures survival.",
  },
  {
    name: "SWARM CLUSTER",
    threat: "CRITICAL",
    behavior: "Multiple fast-moving units. Overwhelming in numbers.",
    counters: "AGGRESSIVE",
    counterColor: "hsl(0, 85%, 55%)",
    optimalResponse: "Eliminate before they multiply. Maximum aggression required.",
  },
];

const obstacles = [
  {
    name: "PROTOCOL LOCK",
    icon: <Lock className="h-5 w-5" />,
    description: "Forces specific protocol activation. Must switch to required protocol to pass.",
    required: "VARIES",
    color: "hsl(190, 100%, 50%)",
  },
  {
    name: "OVERLOAD ZONE",
    icon: <AlertTriangle className="h-5 w-5" />,
    description: "Drains HP rapidly. Defensive protocol reduces damage taken.",
    required: "DEFENSIVE",
    color: "hsl(0, 85%, 55%)",
  },
  {
    name: "TIMING GATE",
    icon: <Timer className="h-5 w-5" />,
    description: "Opens and closes on intervals. Evasive protocol increases window timing.",
    required: "EVASIVE",
    color: "hsl(150, 80%, 45%)",
  },
];

const Game = () => {
  const [activeProtocol, setActiveProtocol] = useState<string>("defensive");
  const [analyzingEnemy, setAnalyzingEnemy] = useState<string | null>(null);

  const selectedProtocol = protocols.find((p) => p.id === activeProtocol);

  return (
    <div className="relative min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="mb-4 inline-block font-mono text-xs tracking-[0.3em] text-primary">
              // GAME EXPERIENCE
            </span>
            <h1 className="mb-4 font-display text-4xl font-bold tracking-wider text-foreground sm:text-5xl lg:text-6xl">
              CORE PROTOCOL
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
              A tactical action puzzle game where survival depends on intelligent protocol switching.
              Adapt to threats, master timing, and prove your tactical superiority.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Protocol System - Live Comparison */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="// PROTOCOL SYSTEM"
            title="LIVE COMPARISON MODE"
            description="Toggle between protocols to see real-time stat changes."
          />

          {/* Protocol Selector */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {protocols.map((protocol) => (
              <motion.button
                key={protocol.id}
                onClick={() => setActiveProtocol(protocol.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative overflow-hidden rounded-lg border px-6 py-4 transition-all ${
                  activeProtocol === protocol.id
                    ? "border-opacity-100"
                    : "border-border/30 hover:border-opacity-50"
                }`}
                style={{
                  borderColor:
                    activeProtocol === protocol.id ? protocol.color : undefined,
                }}
              >
                {/* Active Glow */}
                {activeProtocol === protocol.id && (
                  <motion.div
                    layoutId="protocol-glow"
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundColor: protocol.color }}
                  />
                )}

                <div className="relative flex items-center gap-3">
                  <span style={{ color: protocol.color }}>{protocol.icon}</span>
                  <span
                    className="font-display text-sm tracking-wider"
                    style={{
                      color:
                        activeProtocol === protocol.id
                          ? protocol.color
                          : undefined,
                    }}
                  >
                    {protocol.name}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Protocol Details */}
          <AnimatePresence mode="wait">
            {selectedProtocol && (
              <motion.div
                key={selectedProtocol.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="protocol-card mx-auto max-w-3xl overflow-hidden rounded-xl border p-8"
                style={{ borderColor: `${selectedProtocol.color}40` }}
              >
                {/* Header */}
                <div className="mb-6 flex items-center gap-4">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-lg border"
                    style={{
                      borderColor: selectedProtocol.color,
                      boxShadow: `0 0 30px ${selectedProtocol.color}40`,
                    }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span style={{ color: selectedProtocol.color }}>
                      {selectedProtocol.icon}
                    </span>
                  </motion.div>
                  <div>
                    <h3
                      className="font-display text-2xl font-bold tracking-wider"
                      style={{ color: selectedProtocol.color }}
                    >
                      {selectedProtocol.name}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {selectedProtocol.description}
                    </p>
                  </div>
                </div>

                {/* Behavior */}
                <div className="mb-8 rounded-lg bg-card/50 p-4">
                  <span className="mb-2 block font-mono text-xs text-muted-foreground">
                    // BEHAVIOR PATTERN
                  </span>
                  <p className="font-body text-sm text-foreground">
                    {selectedProtocol.behavior}
                  </p>
                </div>

                {/* Stats Visualization */}
                <div className="grid gap-6 md:grid-cols-3">
                  <StatMeter
                    label="SPEED"
                    value={selectedProtocol.speed}
                    color={selectedProtocol.color}
                  />
                  <StatMeter
                    label="DAMAGE"
                    value={selectedProtocol.damage}
                    color={selectedProtocol.color}
                  />
                  <StatMeter
                    label="REGEN"
                    value={selectedProtocol.regen}
                    color={selectedProtocol.color}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Enemy Intelligence Section */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="// THREAT ANALYSIS"
            title="ENEMY INTELLIGENCE"
            description="Classified AI threat profiles. Know your enemy."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {enemies.map((enemy, index) => (
              <motion.div
                key={enemy.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setAnalyzingEnemy(enemy.name)}
                onMouseLeave={() => setAnalyzingEnemy(null)}
                className="protocol-card group relative overflow-hidden rounded-lg border border-border/30 p-6"
              >
                {/* Analysis Animation */}
                <AnimatePresence>
                  {analyzingEnemy === enemy.name && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"
                    >
                      <motion.div
                        className="absolute inset-y-0 left-0 w-px bg-primary"
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="relative">
                  {/* Header */}
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold tracking-wider text-foreground">
                      {enemy.name}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-[10px] ${
                        enemy.threat === "CRITICAL"
                          ? "bg-danger/20 text-danger"
                          : enemy.threat === "HIGH"
                          ? "bg-warning/20 text-warning"
                          : enemy.threat === "MEDIUM"
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {enemy.threat} THREAT
                    </span>
                  </div>

                  {/* Behavior */}
                  <p className="mb-4 font-body text-sm text-muted-foreground">
                    {enemy.behavior}
                  </p>

                  {/* Counter Info */}
                  <div className="rounded-lg bg-muted/30 p-3">
                    <span className="mb-1 block font-mono text-[10px] text-muted-foreground">
                      OPTIMAL COUNTER PROTOCOL
                    </span>
                    <span
                      className="font-display text-sm font-bold tracking-wider"
                      style={{ color: enemy.counterColor }}
                    >
                      {enemy.counters}
                    </span>
                  </div>

                  {/* Analysis Complete */}
                  <AnimatePresence>
                    {analyzingEnemy === enemy.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-4 font-mono text-xs text-primary"
                      >
                        ANALYSIS COMPLETE // {enemy.optimalResponse}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HP System - Stability Monitor */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="// STABILITY MONITOR"
            title="HP & BALANCE SYSTEM"
            description="System stability over brute force HP. Smart switching = survival."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="protocol-card mx-auto max-w-2xl overflow-hidden rounded-xl border border-border/30 p-8"
          >
            {/* Stability Visualization */}
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-sm tracking-wider text-foreground">
                  SYSTEM STABILITY
                </span>
                <span className="font-mono text-xs text-success">OPTIMAL</span>
              </div>

              <div className="relative h-4 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-success to-primary"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute top-0 h-full w-2"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, white, transparent)",
                  }}
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>

            {/* Activity Monitor */}
            <div className="mb-6 flex items-center gap-4">
              <Activity className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <div className="flex h-12 items-end gap-1">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t bg-primary"
                      initial={{ height: 4 }}
                      animate={{
                        height: Math.random() * 40 + 8,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.05,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Info */}
            <p className="font-body text-sm text-muted-foreground">
              HP is represented as System Stability. Intelligent protocol switching
              triggers regeneration pulses, while incorrect choices accelerate
              instability. The system rewards <span className="text-primary">thinking over reflex</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Obstacles Section */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="// ENVIRONMENT HAZARDS"
            title="PROTOCOL LOCKS & OBSTACLES"
            description="Environmental challenges that demand specific protocol responses."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {obstacles.map((obstacle, index) => (
              <motion.div
                key={obstacle.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="protocol-card group overflow-hidden rounded-lg border border-border/30 p-6"
              >
                <motion.div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border"
                  style={{ borderColor: obstacle.color }}
                  whileHover={{
                    boxShadow: `0 0 30px ${obstacle.color}60`,
                  }}
                >
                  <span style={{ color: obstacle.color }}>{obstacle.icon}</span>
                </motion.div>

                <h3 className="mb-2 font-display text-sm font-bold tracking-wider text-foreground">
                  {obstacle.name}
                </h3>
                <p className="mb-4 font-body text-sm text-muted-foreground">
                  {obstacle.description}
                </p>

                <div className="rounded bg-muted/30 px-3 py-2">
                  <span className="font-mono text-xs" style={{ color: obstacle.color }}>
                    REQUIRES: {obstacle.required}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const StatMeter = ({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) => (
  <div className="text-center">
    <div className="relative mx-auto mb-3 h-24 w-24">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-muted"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 40}`}
          initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
          animate={{
            strokeDashoffset: 2 * Math.PI * 40 * (1 - value / 100),
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-xl font-bold" style={{ color }}>
          {value}
        </span>
      </div>
    </div>
    <span className="font-mono text-xs text-muted-foreground">{label}</span>
  </div>
);

export default Game;
