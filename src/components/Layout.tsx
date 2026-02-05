import { ReactNode } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};
