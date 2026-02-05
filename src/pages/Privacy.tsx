import { SectionHeader } from "@/components/SectionHeader";

const Privacy = () => {
  return (
    <div className="relative min-h-screen pt-24">
      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="mb-4 inline-block font-mono text-xs tracking-[0.3em] text-primary">
              // LEGAL DOCUMENT
            </span>
            <h1 className="mb-4 font-display text-4xl font-bold tracking-wider text-foreground">
              PRIVACY POLICY
            </h1>
            <p className="font-mono text-xs text-muted-foreground">
              Last updated: February 5, 2025
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <div className="protocol-card rounded-xl border border-border/30 p-8">
              <h2 className="mb-4 font-display text-xl font-bold tracking-wider text-foreground">
                1. INFORMATION WE COLLECT
              </h2>
              <div className="space-y-4 font-body text-muted-foreground">
                <p>
                  HEXAGIX STUDIO ("we", "our", or "us") collects information to provide
                  and improve our services. This includes:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong className="text-foreground">Device Information:</strong> Device
                    type, operating system, unique device identifiers.
                  </li>
                  <li>
                    <strong className="text-foreground">Usage Data:</strong> Game
                    statistics, session duration, feature usage patterns.
                  </li>
                  <li>
                    <strong className="text-foreground">Contact Information:</strong> Email
                    address when you contact us directly.
                  </li>
                </ul>
              </div>
            </div>

            <div className="protocol-card rounded-xl border border-border/30 p-8">
              <h2 className="mb-4 font-display text-xl font-bold tracking-wider text-foreground">
                2. HOW WE USE INFORMATION
              </h2>
              <div className="space-y-4 font-body text-muted-foreground">
                <p>We use collected information to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Provide and maintain our games and services</li>
                  <li>Improve game balance and user experience</li>
                  <li>Analyze usage patterns to develop new features</li>
                  <li>Respond to support requests and communications</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
              </div>
            </div>

            <div className="protocol-card rounded-xl border border-border/30 p-8">
              <h2 className="mb-4 font-display text-xl font-bold tracking-wider text-foreground">
                3. DATA SHARING
              </h2>
              <p className="font-body text-muted-foreground">
                We do not sell your personal information. We may share data with
                trusted service providers who assist in operating our services, subject
                to confidentiality obligations. We may also disclose information when
                required by law.
              </p>
            </div>

            <div className="protocol-card rounded-xl border border-border/30 p-8">
              <h2 className="mb-4 font-display text-xl font-bold tracking-wider text-foreground">
                4. DATA SECURITY
              </h2>
              <p className="font-body text-muted-foreground">
                We implement industry-standard security measures to protect your
                information. However, no method of transmission over the Internet is
                100% secure. We strive to protect your data but cannot guarantee
                absolute security.
              </p>
            </div>

            <div className="protocol-card rounded-xl border border-border/30 p-8">
              <h2 className="mb-4 font-display text-xl font-bold tracking-wider text-foreground">
                5. YOUR RIGHTS
              </h2>
              <div className="space-y-4 font-body text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of certain data collection</li>
                </ul>
              </div>
            </div>

            <div className="protocol-card rounded-xl border border-border/30 p-8">
              <h2 className="mb-4 font-display text-xl font-bold tracking-wider text-foreground">
                6. CONTACT US
              </h2>
              <p className="font-body text-muted-foreground">
                For privacy-related inquiries, contact us at:{" "}
                <a
                  href="mailto:contact@hexagixstudio.com"
                  className="text-primary hover:underline"
                >
                  contact@hexagixstudio.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
