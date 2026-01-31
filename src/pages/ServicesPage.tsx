import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <Layout>
      <Seo
        title="Services"
        description="Explore fitness training, diet & nutrition plans, mind counselling, and more. Personalized wellness services with online & offline sessions."
        canonicalPath="/services"
      />
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive
              <span className="block gradient-text">Wellness Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From fitness training to mental wellness, discover our range of
              services designed to help you achieve complete health and
              well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                href={`/services/${service.id}`}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="Why Choose Us"
            title="The Get Fit Difference"
            description="What sets our services apart from the rest."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Approach",
                description:
                  "Every program is tailored to your unique needs, goals, and lifestyle. No cookie-cutter solutions here.",
              },
              {
                title: "Holistic Integration",
                description:
                  "We combine fitness, nutrition, and mental wellness for comprehensive results that last.",
              },
              {
                title: "Flexible Sessions",
                description:
                  "Choose between online and offline sessions based on your convenience and preferences.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-bg flex items-center justify-center mb-6">
                  <span className="font-display text-2xl font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              Book a free consultation and let's discuss which services would
              best support your health and wellness goals.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
