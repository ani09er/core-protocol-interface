import { motion } from "framer-motion";
import { Hexagon, Code, Brain, Target, Users } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const directives = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "SYSTEMS BEFORE SPECTACLE",
    description:
      "We build mechanics with depth, not surface-level flash. Every system serves a purpose.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "INTELLIGENCE BEFORE CHAOS",
    description:
      "Thoughtful challenge over random difficulty. Players should feel smart, not lucky.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "MECHANICS WITH MEANING",
    description:
      "No feature exists without reason. Everything connects to the core experience.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "RESPECT FOR THE PLAYER'S MIND",
    description:
      "We trust players to learn, adapt, and master. No hand-holding, no dumbing down.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "STUDIO FOUNDED",
    description: "HEXAGIX STUDIO established with a mission to create intelligent gaming experiences.",
  },
  {
    year: "2024",
    title: "CORE PROTOCOL BEGINS",
    description: "Development starts on our flagship tactical action puzzle game.",
  },
  {
    year: "2025",
    title: "ALPHA TESTING",
    description: "First internal playtests reveal promising player engagement with protocol mechanics.",
  },
  {
    year: "2025",
    title: "PUBLIC RELEASE",
    description: "Core Protocol launches on Google Play Store.",
  },
];

const Studio = () => {
  return (
    <div className="relative min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            {/* Logo */}
            <motion.div
              className="relative mb-8"
              whileHover={{ rotate: 30 }}
              transition={{ duration: 0.5 }}
            >
              <Hexagon className="h-24 w-24 text-primary" strokeWidth={1} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-primary">H</span>
              </div>
            </motion.div>

            <span className="mb-4 font-mono text-xs tracking-[0.3em] text-primary">
              // ABOUT US
            </span>
            <h1 className="mb-4 font-display text-4xl font-bold tracking-wider text-foreground sm:text-5xl">
              HEXAGIX STUDIO
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
              An independent game development studio dedicated to system-driven design,
              intelligent mechanics, and player mastery. We create games where adaptation,
              learning, and decision-making are core to the experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Directives */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="// STUDIO PHILOSOPHY"
            title="CORE DIRECTIVES"
            description="The principles that guide every decision we make."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {directives.map((directive, index) => (
              <motion.div
                key={directive.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="protocol-card group relative overflow-hidden rounded-xl border border-border/30 p-8"
              >
                {/* Corner Accent */}
                <div className="absolute right-0 top-0 h-16 w-16">
                  <div className="absolute right-0 top-0 h-px w-8 bg-primary/50" />
                  <div className="absolute right-0 top-0 h-8 w-px bg-primary/50" />
                </div>

                {/* Directive Number */}
                <div className="absolute right-4 top-4 font-mono text-xs text-muted-foreground/30">
                  0{index + 1}
                </div>

                <motion.div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 text-primary"
                  whileHover={{ scale: 1.1, borderColor: "hsl(190, 100%, 50%)" }}
                >
                  {directive.icon}
                </motion.div>

                <h3 className="mb-3 font-display text-lg font-bold tracking-wider text-foreground">
                  {directive.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {directive.description}
                </p>

                {/* Hover line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary to-transparent"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Timeline */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="// DEVELOPMENT LOG"
            title="STUDIO TIMELINE"
            description="Our journey from concept to reality."
          />

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2" />

            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-8 flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                  <motion.div
                    className="h-4 w-4 rounded-full border-2 border-primary bg-background"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute h-8 w-8 rounded-full border border-primary/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <motion.div
                    whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                    className="protocol-card rounded-lg border border-border/30 p-6"
                  >
                    <span className="mb-2 block font-mono text-xs text-primary">
                      {event.year}
                    </span>
                    <h3 className="mb-2 font-display text-lg font-bold tracking-wider text-foreground">
                      {event.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-12 text-center"
          >
            {/* Background Elements */}
            <div className="hex-grid absolute inset-0 opacity-20" />
            <motion.div
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, hsl(190, 100%, 50%, 0.1) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative">
              <h2 className="mb-6 font-display text-3xl font-bold tracking-wider text-foreground sm:text-4xl">
                OUR MISSION
              </h2>
              <p className="mx-auto max-w-3xl font-body text-xl text-muted-foreground leading-relaxed">
                To create gaming experiences that challenge the mind, reward mastery,
                and respect player intelligence. We believe the best games are those
                that teach without tutorials, challenge without frustration, and
                provide satisfaction through genuine achievement.
              </p>

              <motion.div
                className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-primary"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
                MISSION STATUS: ACTIVE
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Studio;
