import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Heart, Target, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import trainerImage from "@/assets/ASH00261.jpg";

const values = [
  {
    icon: Heart,
    title: "Holistic Wellness",
    description:
      "We believe true health encompasses physical fitness, mental well-being, and proper nutrition working together.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description:
      "Every program is designed with clear, achievable goals tailored to your unique journey and aspirations.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Join a supportive community of like-minded individuals all working towards healthier lifestyles.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "Our methods are backed by science and proven through hundreds of successful transformations.",
  },
];

const qualifications = [
  "Certified Personal Trainer (ACE)",
  "Nutrition & Wellness Consultant",
  "Mind-Body Wellness Coach",
  "Sports Psychology Certification",
  "CPR & First Aid Certified",
  "5+ Years Industry Experience",
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                The Story Behind
                <span className="block gradient-text">Get Fit With Neetu</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                What started as a personal passion for fitness has grown into a
                mission to help others discover their strength, both physical and
                mental. Get Fit With Neetu was founded on the belief that everyone
                deserves access to quality wellness guidance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                My approach combines traditional fitness training with modern
                wellness practices, creating a comprehensive system that addresses
                the whole person – body, mind, and spirit. I've seen firsthand how
                this integrated approach leads to lasting transformation.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={trainerImage}
                  alt="Neetu - Fitness & Wellness Expert"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">
                    Neetu
                  </h3>
                  <p className="text-primary-foreground/80">
                    Certified Fitness & Wellness Expert
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower individuals to take control of their health through
                personalized fitness training, expert nutrition guidance, and
                comprehensive mental wellness support. We're committed to making
                holistic health accessible to everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl gradient-bg text-primary-foreground"
            >
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To create a community where fitness, nutrition, and mental wellness
                come together seamlessly. We envision a world where everyone has the
                tools and support they need to live their healthiest, happiest lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Our Values"
            title="What We Stand For"
            description="These core values guide everything we do and every program we create."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="Qualifications"
            title="Expertise You Can Trust"
            description="Professional certifications and experience that ensure quality guidance."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {qualifications.map((qual, index) => (
              <motion.div
                key={qual}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-medium text-sm">{qual}</span>
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              Let's work together to unlock your potential and achieve the
              transformation you deserve.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
