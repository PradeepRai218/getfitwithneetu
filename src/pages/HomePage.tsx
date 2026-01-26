import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import heroImage from "@/assets/hero-fitness.jpg";
import trainerImage from "@/assets/trainer-neetu.jpg";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "1000+", label: "Sessions Completed" },
  { value: "95%", label: "Success Rate" },
];

const highlights = [
  "Certified Fitness & Wellness Expert",
  "Holistic Health Approach",
  "Personalized Programs",
  "Online & Offline Sessions",
];

export default function HomePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Fitness training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-primary-foreground"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6">
                Your Transformation Starts Here
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                Transform Your
                <span className="block gradient-text">Body & Mind</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-xl mb-8 leading-relaxed">
                Achieve your fitness goals with personalized training, expert nutrition
                guidance, and holistic wellness support. Your journey to a healthier,
                stronger you begins today.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">
                    Book Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="xl">
                  <Link to="/services">
                    <Play className="w-5 h-5" />
                    Explore Services
                  </Link>
                </Button>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 text-primary-foreground/80"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={trainerImage}
                  alt="Neetu - Fitness Trainer"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-card shadow-lg border border-border">
                <div className="font-display text-2xl font-bold gradient-text mb-1">
                  5+ Years
                </div>
                <div className="text-sm text-muted-foreground">
                  Transforming Lives
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                About Me
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Hi, I'm <span className="gradient-text">Neetu</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a certified fitness and wellness expert, I believe in a holistic
                approach to health. My journey began over 5 years ago, and since then,
                I've helped hundreds of clients transform not just their bodies, but
                their entire lives.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I combine physical training with mental wellness support and nutrition
                guidance to help you achieve lasting results. Whether you're looking
                to lose weight, build strength, or find mental balance, I'm here to
                guide you every step of the way.
              </p>
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="What I Offer"
            title="Services Designed for Your Success"
            description="From fitness training to mental wellness, discover the comprehensive services that will help you achieve your health goals."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="Watch & Learn"
            title="See the Transformation in Action"
            description="Watch real workouts, training sessions, and success stories from our fitness programs."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card border border-border">
              {/* Video Container */}
              <div className="relative aspect-video bg-dark/90">
                {/* Video Element */}
                {isVideoPlaying ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    playsInline
                  >
                    <source
                      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <>
                    {/* Thumbnail/Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark/90 to-dark/90 flex items-center justify-center">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80')] bg-cover bg-center opacity-30" />
                    </div>
                    
                    {/* Play Button Overlay */}
                    <button
                      onClick={handlePlayVideo}
                      className="absolute inset-0 flex items-center justify-center group cursor-pointer transition-all duration-300 hover:bg-dark/20"
                      aria-label="Play video"
                    >
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-primary transition-colors duration-300">
                          <Play className="w-12 h-12 md:w-14 md:h-14 text-primary-foreground ml-1" fill="currentColor" />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                      </motion.div>
                    </button>
                    
                    {/* Video Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent">
                      <h3 className="text-primary-foreground font-semibold text-lg mb-1">
                        Fitness Training Session
                      </h3>
                      <p className="text-primary-foreground/70 text-sm">
                        Watch our comprehensive workout program
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Video Features */}
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Workout Tutorials</h3>
                <p className="text-sm text-muted-foreground">
                  Step-by-step guides for effective exercises
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Success Stories</h3>
                <p className="text-sm text-muted-foreground">
                  Real transformations from our clients
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Live Sessions</h3>
                <p className="text-sm text-muted-foreground">
                  Join interactive training sessions
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Testimonials"
            title="Success Stories"
            description="Hear from clients who have transformed their lives through our programs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/testimonials">
                Read More Stories
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Start Your
              <span className="block gradient-text">Transformation?</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              Take the first step towards a healthier, stronger you. Book your free
              trial session today and experience the difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Book Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/links">Connect With Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
