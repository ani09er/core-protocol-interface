import { useState } from "react";
import { motion } from "framer-motion";

interface ProtocolNodeProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  stats: {
    speed: number;
    damage: number;
    regen: number;
  };
  onHover: (isHovered: boolean) => void;
}

export const ProtocolNode = ({
  name,
  icon,
  color,
  description,
  stats,
  onHover,
}: ProtocolNodeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered);
    onHover(hovered);
  };

  return (
    <motion.div
      className="relative cursor-pointer"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-4 rounded-lg opacity-0 blur-xl"
        animate={{ opacity: isHovered ? 0.4 : 0 }}
        style={{ backgroundColor: color }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className={`protocol-card relative overflow-hidden rounded-lg border p-6 transition-all duration-300 ${
          isHovered ? "border-opacity-100" : "border-opacity-30"
        }`}
        style={{ borderColor: isHovered ? color : undefined }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 hex-grid opacity-20" />

        {/* Corner Accents */}
        <motion.div
          className="absolute left-0 top-0 h-8 w-px"
          style={{ backgroundColor: color }}
          animate={{ height: isHovered ? 32 : 16 }}
        />
        <motion.div
          className="absolute left-0 top-0 h-px w-8"
          style={{ backgroundColor: color }}
          animate={{ width: isHovered ? 32 : 16 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-8 w-px"
          style={{ backgroundColor: color }}
          animate={{ height: isHovered ? 32 : 16 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-px w-8"
          style={{ backgroundColor: color }}
          animate={{ width: isHovered ? 32 : 16 }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg border border-border/50"
            animate={{
              borderColor: isHovered ? color : "rgba(255,255,255,0.1)",
              boxShadow: isHovered ? `0 0 30px ${color}40` : "none",
            }}
          >
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              style={{ color }}
            >
              {icon}
            </motion.div>
          </motion.div>

          {/* Name */}
          <h3
            className="mb-2 font-display text-xl font-bold tracking-wider"
            style={{ color: isHovered ? color : undefined }}
          >
            {name}
          </h3>

          {/* Description */}
          <p className="mb-4 font-body text-sm text-muted-foreground">
            {description}
          </p>

          {/* Stats */}
          <div className="space-y-3">
            <StatBar
              label="SPEED"
              value={stats.speed}
              color={color}
              isActive={isHovered}
            />
            <StatBar
              label="DAMAGE"
              value={stats.damage}
              color={color}
              isActive={isHovered}
            />
            <StatBar
              label="REGEN"
              value={stats.regen}
              color={color}
              isActive={isHovered}
            />
          </div>
        </div>

        {/* Scan Line Effect */}
        <motion.div
          className="absolute inset-0 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="h-px w-full"
              style={{ backgroundColor: color }}
              initial={{ y: 0 }}
              animate={isHovered ? { y: ["0%", "2000%"] } : { y: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const StatBar = ({
  label,
  value,
  color,
  isActive,
}: {
  label: string;
  value: number;
  color: string;
  isActive: boolean;
}) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between">
      <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
        {label}
      </span>
      <span
        className="font-mono text-xs"
        style={{ color: isActive ? color : undefined }}
      >
        {value}%
      </span>
    </div>
    <div className="relative h-1 overflow-hidden rounded-full bg-muted">
      <motion.div
        className="absolute left-0 top-0 h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      {isActive && (
        <motion.div
          className="absolute top-0 h-full w-4 rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          }}
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  </div>
);
