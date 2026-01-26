import { motion } from "framer-motion";
import {
  MessageCircle,
  Instagram,
  Youtube,
  Github,
  Mail,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import trainerImage from "@/assets/trainer-neetu.jpg";

const links = [
  {
    icon: Calendar,
    label: "Book Free Trial",
    description: "Schedule your complimentary fitness session",
    href: "/contact",
    internal: true,
    primary: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    description: "Chat with us directly",
    href: "https://wa.me/919876543210",
    internal: false,
    primary: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    description: "@getfitwithneetu",
    href: "https://instagram.com/getfitwithneetu",
    internal: false,
    primary: false,
  },
  {
    icon: Youtube,
    label: "YouTube",
    description: "Free workout videos & tips",
    href: "https://youtube.com/@getfitwithneetu",
    internal: false,
    primary: false,
  },
  {
    icon: Github,
    label: "GitHub",
    description: "Open source projects",
    href: "https://github.com/getfitwithneetu",
    internal: false,
    primary: false,
  },
  {
    icon: Mail,
    label: "Email",
    description: "hello@getfitwithneetu.com",
    href: "mailto:hello@getfitwithneetu.com",
    internal: false,
    primary: false,
  },
];

export default function LinksPage() {
  return (
    <Layout>
      <section className="min-h-[80vh] py-20 flex items-center justify-center">
        <div className="container-custom max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-primary/20">
              <img
                src={trainerImage}
                alt="Neetu"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-display text-2xl font-bold mb-2">
              Get Fit With Neetu
            </h1>
            <p className="text-muted-foreground">
              Fitness • Nutrition • Wellness
            </p>
          </motion.div>

          <div className="space-y-3">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.internal ? undefined : link.href}
                onClick={
                  link.internal
                    ? () => (window.location.href = link.href)
                    : undefined
                }
                target={link.internal ? undefined : "_blank"}
                rel={link.internal ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover-lift cursor-pointer ${
                  link.primary
                    ? "gradient-bg text-primary-foreground border-transparent"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    link.primary
                      ? "bg-primary-foreground/20"
                      : "bg-primary/10 group-hover:bg-primary/20"
                  } transition-colors`}
                >
                  <link.icon
                    className={`w-6 h-6 ${
                      link.primary ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                </div>
                <div className="flex-1 text-left">
                  <p
                    className={`font-semibold ${
                      link.primary ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </p>
                  <p
                    className={`text-sm ${
                      link.primary
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.description}
                  </p>
                </div>
                {!link.internal && (
                  <ExternalLink
                    className={`w-5 h-5 ${
                      link.primary
                        ? "text-primary-foreground/60"
                        : "text-muted-foreground"
                    } group-hover:translate-x-1 transition-transform`}
                  />
                )}
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            © {new Date().getFullYear()} Get Fit With Neetu
          </motion.p>
        </div>
      </section>
    </Layout>
  );
}
