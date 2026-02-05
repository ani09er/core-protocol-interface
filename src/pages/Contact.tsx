import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, MessageSquare, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
              // INITIATE COMMUNICATION
            </span>
            <h1 className="mb-4 font-display text-4xl font-bold tracking-wider text-foreground sm:text-5xl">
              CONTACT
            </h1>
            <p className="mx-auto max-w-xl font-body text-lg text-muted-foreground">
              Establish connection. We're listening.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-module relative py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="protocol-card rounded-lg border border-border/30 p-6">
                <Mail className="mb-3 h-5 w-5 text-primary" />
                <h3 className="mb-1 font-display text-sm tracking-wider text-foreground">
                  EMAIL
                </h3>
                <a
                  href="mailto:contact@hexagixstudio.com"
                  className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  contact@hexagixstudio.com
                </a>
              </div>

              <div className="protocol-card rounded-lg border border-border/30 p-6">
                <MapPin className="mb-3 h-5 w-5 text-primary" />
                <h3 className="mb-1 font-display text-sm tracking-wider text-foreground">
                  LOCATION
                </h3>
                <p className="font-mono text-xs text-muted-foreground">India</p>
              </div>

              <div className="protocol-card rounded-lg border border-border/30 p-6">
                <MessageSquare className="mb-3 h-5 w-5 text-primary" />
                <h3 className="mb-1 font-display text-sm tracking-wider text-foreground">
                  RESPONSE TIME
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  Within 48 hours
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Name */}
                  <div className="relative">
                    <label className="mb-2 block font-mono text-xs text-muted-foreground">
                      NAME
                    </label>
                    <motion.input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      required
                      className="w-full rounded-lg border border-border/50 bg-card/50 px-4 py-3 font-body text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-card"
                      placeholder="Your name"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-primary"
                      animate={{ width: focused === "name" ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label className="mb-2 block font-mono text-xs text-muted-foreground">
                      EMAIL
                    </label>
                    <motion.input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      required
                      className="w-full rounded-lg border border-border/50 bg-card/50 px-4 py-3 font-body text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-card"
                      placeholder="your@email.com"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-primary"
                      animate={{ width: focused === "email" ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <label className="mb-2 block font-mono text-xs text-muted-foreground">
                    SUBJECT
                  </label>
                  <motion.input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full rounded-lg border border-border/50 bg-card/50 px-4 py-3 font-body text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-card"
                    placeholder="What is this about?"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-primary"
                    animate={{ width: focused === "subject" ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="mb-2 block font-mono text-xs text-muted-foreground">
                    MESSAGE
                  </label>
                  <motion.textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                    rows={6}
                    className="w-full resize-none rounded-lg border border-border/50 bg-card/50 px-4 py-3 font-body text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-card"
                    placeholder="Your message..."
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-primary"
                    animate={{ width: focused === "message" ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                  className="btn-protocol flex w-full items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-success">MESSAGE TRANSMITTED</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>TRANSMIT MESSAGE</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Status */}
              <motion.p
                className="mt-6 text-center font-mono text-xs text-muted-foreground"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                COMMUNICATION CHANNEL: SECURE // ENCRYPTION: ACTIVE
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
