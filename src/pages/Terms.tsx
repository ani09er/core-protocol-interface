import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="relative min-h-screen pt-24">
      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="mb-4 inline-block font-mono text-xs tracking-[0.3em] text-primary">
              // LEGAL DOCUMENT
            </span>
            <h1 className="mb-4 font-display text-4xl font-bold tracking-wider text-foreground">
              TERMS OF SERVICE
            </h1>
            <p className="font-mono text-xs text-muted-foreground">
              Last updated: February 5, 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 space-y-8"
          >
            <div className="protocol-card rounded-xl border border-border/30 p-8">
              <h2 className="mb-4 font-display text-xl font-bold tracking-wider text-foreground">
                1. ACCEPTANCE OF TERMS
              </h2>
              <p className="font-body text-muted-foreground">
                By accessing or using HEXAGIX STUDIO's games and services ("Services"),
                you agree to be bound by these Terms of Service. If you do not agree to
                these terms, do not use our Services.
              </p>
            </div>

            <div className="protocol-card rounded-xl border border-border/30 p-8">
              <h2 className="mb-4 font-display text-xl font-bold tracking-wider text-foreground">
                2. LICENSE TO USE
              </h2>
              <p className="font-body text-muted-foreground">
                We grant you a limited, non-exclusive, non-transferable, revocable
                license to use our Services for personal, non-commercial purposes. This
                license does not include the right to modify, distribute, or create
                derivative works from our content.
              </p>
            </div>

            <div className="protocol-card rounded-xl border border-border/30 p-8">
              <h2 className="mb-4 font-display text-xl font-bold tracking-wider text-foreground">
                3. USER CONDUCT
              </h2>
              <div className="space-y-4 font-body text-muted-foreground">
                <p>You agree not to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Use cheats, exploits, or unauthorized third-party software</li>
                  <li>Reverse engineer or decompile the game</li>
                  <li>Harass, abuse, or threaten other users</li>
                  <li>Use the Services for any illegal purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                </ul>
              </div>
            </div>

            <div className="protocol-card rounded-xl border border-border/30 p-8">
              <h2 className="mb-4 font-display text-xl font-bold tracking-wider text-foreground">
                4. INTELLECTUAL PROPERTY
              </h2>
              <p className="font-body text-muted-foreground">
                All content, including but not limited to graphics, gameplay mechanics,
                music, and text, is the property of HEXAGIX STUDIO and protected by
                intellectual property laws. CORE PROTOCOL and HEXAGIX STUDIO are
                trademarks of HEXAGIX STUDIO.
              </p>
            </div>

            <div className="protocol-card rounded-xl border border-border/30 p-8">
              <h2 className="mb-4 font-display text-xl font-bold tracking-wider text-foreground">
                5. DISCLAIMER OF WARRANTIES
              </h2>
              <p className="font-body text-muted-foreground">
                Our Services are provided "as is" without warranties of any kind. We do
                not guarantee uninterrupted or error-free operation of our games. We
                may modify, suspend, or discontinue any aspect of our Services at any
                time.
              </p>
            </div>

            <div className="protocol-card rounded-xl border border-border/30 p-8">
              <h2 className="mb-4 font-display text-xl font-bold tracking-wider text-foreground">
                6. LIMITATION OF LIABILITY
              </h2>
              <p className="font-body text-muted-foreground">
                To the maximum extent permitted by law, HEXAGIX STUDIO shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of our Services.
              </p>
            </div>

            <div className="protocol-card rounded-xl border border-border/30 p-8">
              <h2 className="mb-4 font-display text-xl font-bold tracking-wider text-foreground">
                7. CHANGES TO TERMS
              </h2>
              <p className="font-body text-muted-foreground">
                We may update these Terms of Service from time to time. Continued use
                of our Services after changes constitutes acceptance of the revised
                terms. We encourage you to review these terms periodically.
              </p>
            </div>

            <div className="protocol-card rounded-xl border border-border/30 p-8">
              <h2 className="mb-4 font-display text-xl font-bold tracking-wider text-foreground">
                8. CONTACT
              </h2>
              <p className="font-body text-muted-foreground">
                For questions about these Terms of Service, contact us at:{" "}
                <a
                  href="mailto:contact@hexagixstudio.com"
                  className="text-primary hover:underline"
                >
                  contact@hexagixstudio.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
