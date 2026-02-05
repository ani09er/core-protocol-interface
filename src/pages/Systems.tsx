import { motion } from "framer-motion";
import { Trophy, TrendingUp, BarChart3, Clock, Target, Zap } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const clearanceLevels = [
  { rank: "S+", name: "ARCHITECT", color: "hsl(50, 100%, 60%)", threshold: "Top 1%" },
  { rank: "S", name: "STRATEGIST", color: "hsl(280, 80%, 60%)", threshold: "Top 5%" },
  { rank: "A", name: "OPERATIVE", color: "hsl(190, 100%, 50%)", threshold: "Top 15%" },
  { rank: "B", name: "ANALYST", color: "hsl(150, 80%, 45%)", threshold: "Top 30%" },
  { rank: "C", name: "INITIATE", color: "hsl(210, 20%, 60%)", threshold: "Top 50%" },
  { rank: "D", name: "TRAINEE", color: "hsl(0, 0%, 50%)", threshold: "All players" },
];

const mockMatchHistory = [
  { id: 1, result: "VICTORY", score: 12450, protocol: "EVASIVE", time: "2:34" },
  { id: 2, result: "VICTORY", score: 11200, protocol: "DEFENSIVE", time: "3:12" },
  { id: 3, result: "DEFEAT", score: 4300, protocol: "AGGRESSIVE", time: "1:45" },
  { id: 4, result: "VICTORY", score: 15600, protocol: "EVASIVE", time: "4:01" },
  { id: 5, result: "VICTORY", score: 9800, protocol: "DEFENSIVE", time: "2:58" },
];

const analyticsData = {
  protocolUsage: [
    { name: "AGGRESSIVE", value: 28, color: "hsl(0, 85%, 55%)" },
    { name: "DEFENSIVE", value: 35, color: "hsl(210, 100%, 55%)" },
    { name: "EVASIVE", value: 37, color: "hsl(150, 80%, 45%)" },
  ],
  efficiency: 78,
  winRate: 72,
  avgScore: 10670,
};

const Systems = () => {
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
              // AI EVALUATION DASHBOARD
            </span>
            <h1 className="mb-4 font-display text-4xl font-bold tracking-wider text-foreground sm:text-5xl">
              SYSTEMS & ANALYTICS
            </h1>
            <p className="mx-auto max-w-xl font-body text-lg text-muted-foreground">
              Post-simulation analysis. Track your evolution as a tactical operator.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clearance Levels */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="// RANK TIERS"
            title="AI CLEARANCE LEVELS"
            description="Your rank reflects tactical mastery. Climb the hierarchy."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {clearanceLevels.map((level, index) => (
              <motion.div
                key={level.rank}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="protocol-card flex items-center gap-4 rounded-lg border border-border/30 p-5"
              >
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-lg border-2 font-display text-xl font-bold"
                  style={{ borderColor: level.color, color: level.color }}
                  whileHover={{ boxShadow: `0 0 30px ${level.color}60` }}
                >
                  {level.rank}
                </motion.div>
                <div className="flex-1">
                  <h3
                    className="font-display text-sm font-bold tracking-wider"
                    style={{ color: level.color }}
                  >
                    {level.name}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {level.threshold}
                  </p>
                </div>
                <Trophy className="h-5 w-5 text-muted-foreground/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Match History */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="// SIMULATION LOG"
            title="MATCH HISTORY"
            description="Your recent engagements. Review and improve."
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="protocol-card overflow-hidden rounded-xl border border-border/30"
          >
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 border-b border-border/30 bg-muted/30 px-6 py-4">
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                RESULT
              </span>
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                SCORE
              </span>
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                PROTOCOL
              </span>
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                DURATION
              </span>
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                STATUS
              </span>
            </div>

            {/* Entries */}
            {mockMatchHistory.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-5 gap-4 border-b border-border/20 px-6 py-4 transition-colors hover:bg-muted/10"
              >
                <span
                  className={`font-display text-sm font-bold ${
                    match.result === "VICTORY" ? "text-success" : "text-danger"
                  }`}
                >
                  {match.result}
                </span>
                <span className="font-mono text-sm text-foreground">
                  {match.score.toLocaleString()}
                </span>
                <span
                  className={`font-mono text-sm ${
                    match.protocol === "AGGRESSIVE"
                      ? "text-protocol-aggressive"
                      : match.protocol === "DEFENSIVE"
                      ? "text-protocol-defensive"
                      : "text-protocol-evasive"
                  }`}
                >
                  {match.protocol}
                </span>
                <span className="font-mono text-sm text-muted-foreground">
                  {match.time}
                </span>
                <span className="font-mono text-xs text-primary">REVIEWED</span>
              </motion.div>
            ))}

            {/* Footer */}
            <div className="flex items-center justify-between bg-muted/20 px-6 py-4">
              <span className="font-mono text-xs text-muted-foreground">
                SHOWING 5 OF 127 SIMULATIONS
              </span>
              <motion.span
                className="font-mono text-xs text-primary"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                SIMULATION REVIEW COMPLETE
              </motion.span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="// PERFORMANCE METRICS"
            title="ANALYTICS OVERVIEW"
            description="Comprehensive analysis of your tactical performance."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Win Rate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="protocol-card rounded-xl border border-border/30 p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  WIN RATE
                </span>
                <TrendingUp className="h-4 w-4 text-success" />
              </div>
              <div className="mb-2 font-display text-4xl font-bold text-success">
                {analyticsData.winRate}%
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full bg-success"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${analyticsData.winRate}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>

            {/* Efficiency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="protocol-card rounded-xl border border-border/30 p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  EFFICIENCY
                </span>
                <Target className="h-4 w-4 text-primary" />
              </div>
              <div className="mb-2 font-display text-4xl font-bold text-primary">
                {analyticsData.efficiency}%
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${analyticsData.efficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>

            {/* Avg Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="protocol-card rounded-xl border border-border/30 p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  AVG SCORE
                </span>
                <BarChart3 className="h-4 w-4 text-accent" />
              </div>
              <div className="font-display text-4xl font-bold text-accent">
                {analyticsData.avgScore.toLocaleString()}
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                +12% from last week
              </span>
            </motion.div>

            {/* Total Matches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="protocol-card rounded-xl border border-border/30 p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  TIME PLAYED
                </span>
                <Clock className="h-4 w-4 text-warning" />
              </div>
              <div className="font-display text-4xl font-bold text-warning">
                47h
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                127 simulations
              </span>
            </motion.div>
          </div>

          {/* Protocol Usage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 protocol-card rounded-xl border border-border/30 p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-lg font-bold tracking-wider">
                PROTOCOL USAGE BALANCE
              </h3>
              <Zap className="h-5 w-5 text-primary" />
            </div>

            <div className="space-y-4">
              {analyticsData.protocolUsage.map((protocol) => (
                <div key={protocol.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-display text-sm tracking-wider"
                      style={{ color: protocol.color }}
                    >
                      {protocol.name}
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">
                      {protocol.value}%
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: protocol.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${protocol.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 font-body text-sm text-muted-foreground">
              Balanced protocol usage indicates tactical flexibility. The system
              recommends maintaining diversity across all three protocols for optimal
              adaptation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Systems;
