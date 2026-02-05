import { motion } from "framer-motion";
import { FileText, Calendar, Tag, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const devlogs = [
  {
    version: "v0.9.2",
    date: "2025-01-28",
    title: "PROTOCOL BALANCE ADJUSTMENTS",
    focus: "PROTOCOLS",
    excerpt:
      "Fine-tuning the aggressive protocol damage output and defensive regeneration rates based on player feedback. The goal is to make all three protocols equally viable in high-level play.",
    tags: ["Balance", "Protocols", "Gameplay"],
  },
  {
    version: "v0.9.1",
    date: "2025-01-21",
    title: "NEW ENEMY TYPE: SHADOW HUNTER",
    focus: "ENEMIES",
    excerpt:
      "Introducing a new threat that tracks player movement patterns and adapts its behavior accordingly. This enemy forces players to vary their approach and break predictable patterns.",
    tags: ["Enemies", "AI", "New Content"],
  },
  {
    version: "v0.9.0",
    date: "2025-01-14",
    title: "RANKED SYSTEM OVERHAUL",
    focus: "SYSTEMS",
    excerpt:
      "Complete redesign of the ranking system. New clearance levels, improved matchmaking, and seasonal resets. Your rank now better reflects your actual tactical ability.",
    tags: ["Ranked", "Matchmaking", "Progression"],
  },
  {
    version: "v0.8.5",
    date: "2025-01-07",
    title: "PERFORMANCE OPTIMIZATIONS",
    focus: "TECHNICAL",
    excerpt:
      "Major performance improvements across all devices. Reduced memory usage, smoother animations, and faster load times. The simulation now runs at a stable 60fps on mid-range devices.",
    tags: ["Performance", "Optimization", "Technical"],
  },
  {
    version: "v0.8.4",
    date: "2024-12-28",
    title: "UI REFINEMENTS",
    focus: "UI/UX",
    excerpt:
      "Visual polish pass on the protocol switching interface. Clearer indicators, smoother transitions, and better feedback for player actions. The HUD is now less intrusive.",
    tags: ["UI", "Visual", "Polish"],
  },
];

const Devlog = () => {
  return (
    <div className="relative min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="mb-4 inline-block font-mono text-xs tracking-[0.3em] text-primary">
              // RESEARCH LOGS
            </span>
            <h1 className="mb-4 font-display text-4xl font-bold tracking-wider text-foreground sm:text-5xl">
              DEVELOPMENT LOG
            </h1>
            <p className="mx-auto max-w-xl font-body text-lg text-muted-foreground">
              Simulation research entries. Track our development progress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Devlog Entries */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary via-border to-transparent md:left-6" />

            {devlogs.map((log, index) => (
              <motion.article
                key={log.version}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-8 pl-8 md:pl-16"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-6 md:left-6">
                  <motion.div
                    className="flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border border-primary bg-background"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="protocol-card group overflow-hidden rounded-xl border border-border/30"
                >
                  {/* Scan line effect */}
                  <div className="scan-lines pointer-events-none absolute inset-0 opacity-50" />

                  {/* Header */}
                  <div className="relative flex flex-wrap items-center justify-between gap-4 border-b border-border/30 bg-muted/20 px-6 py-4">
                    <div className="flex items-center gap-4">
                      <span className="rounded border border-primary/50 bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                        {log.version}
                      </span>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span className="font-mono text-xs">{log.date}</span>
                      </div>
                    </div>
                    <span className="rounded-full bg-card px-3 py-1 font-mono text-[10px] text-muted-foreground">
                      {log.focus}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <h3 className="mb-3 font-display text-xl font-bold tracking-wider text-foreground">
                      {log.title}
                    </h3>
                    <p className="mb-4 font-body text-muted-foreground">
                      {log.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2">
                      <Tag className="h-3 w-3 text-muted-foreground" />
                      {log.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <motion.div
                      className="mt-4 flex items-center gap-1 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="font-mono text-xs">READ FULL LOG</span>
                      <ChevronRight className="h-3 w-3" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>

          {/* Archive Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-protocol inline-flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              <span>VIEW FULL ARCHIVE</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Devlog;
