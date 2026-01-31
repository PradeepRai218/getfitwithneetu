import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Target, TrendingUp, Award, Calendar, Map, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Seo } from "@/components/Seo";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import heroImage from "@/assets/hero-fitness.jpg";
import trainerImage from "@/assets/ASH00080.jpg";
import galleryImage1 from "@/assets/gallery/ASH00075.jpg";
import galleryImage2 from "@/assets/gallery/ASH00093.jpg";
import galleryImage3 from "@/assets/gallery/ASH00100.jpg";
import galleryImage4 from "@/assets/gallery/ASH00113.jpg";
import galleryImage5 from "@/assets/gallery/ASH00130.jpg";
import galleryImage6 from "@/assets/gallery/ASH00161.jpg";
import galleryImage7 from "@/assets/gallery/ASH00166.jpg";
import galleryImage8 from "@/assets/gallery/ASH00167.jpg";

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
      <Seo
        title="Home"
        description="Achieve your fitness goals with personalized training, expert nutrition guidance, and holistic wellness support. Online & offline sessions in Mumbai."
        canonicalPath="/"
      />
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
              A Promise to Transform Your
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
                  alt="Sankalp - Fitness Trainer"
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
                Hi, I'm <span className="gradient-text">Sankalp</span>
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

      {/* Fitness Roadmap Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Your Journey"
            title="Fitness Roadmap"
            description="Follow this proven path to transform your body and mind. Each milestone brings you closer to your ultimate fitness goals."
          />

          <div className="relative mt-16">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary transform -translate-x-1/2" />

                {/* Roadmap Steps */}
                <div className="space-y-24">
                  {[
                    {
                      step: 1,
                      title: "Initial Assessment",
                      description: "We start with a comprehensive evaluation of your current fitness level, health history, and personal goals.",
                      icon: Target,
                      duration: "Week 1",
                      features: ["Body composition analysis", "Fitness level testing", "Goal setting session"],
                      position: "left",
                    },
                    {
                      step: 2,
                      title: "Custom Program Design",
                      description: "A personalized training and nutrition plan tailored specifically to your needs, preferences, and lifestyle.",
                      icon: Map,
                      duration: "Week 1-2",
                      features: ["Workout schedule", "Nutrition guidelines", "Recovery protocols"],
                      position: "right",
                    },
                    {
                      step: 3,
                      title: "Foundation Building",
                      description: "Establish proper form, build core strength, and develop healthy habits that will support your long-term success.",
                      icon: TrendingUp,
                      duration: "Week 2-4",
                      features: ["Technique mastery", "Strength foundation", "Habit formation"],
                      position: "left",
                    },
                    {
                      step: 4,
                      title: "Progressive Training",
                      description: "Gradually increase intensity and complexity as your body adapts, ensuring continuous progress and results.",
                      icon: Sparkles,
                      duration: "Month 2-3",
                      features: ["Advanced exercises", "Performance tracking", "Adaptive programming"],
                      position: "right",
                    },
                    {
                      step: 5,
                      title: "Optimization & Mastery",
                      description: "Fine-tune your approach, overcome plateaus, and achieve peak performance with expert guidance.",
                      icon: Award,
                      duration: "Month 4+",
                      features: ["Plateau breaking", "Performance optimization", "Lifestyle integration"],
                      position: "left",
                    },
                  ].map((milestone, index) => {
                    const Icon = milestone.icon;
                    const isLeft = milestone.position === "left";

                    return (
                      <motion.div
                        key={milestone.step}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className={`relative flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                      >
                        {/* Content Card */}
                        <div className={`w-5/12 ${isLeft ? "pr-12" : "pl-12"}`}>
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
                            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                              <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shadow-md">
                                  <Icon className="w-7 h-7 text-primary-foreground" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                                      Step {milestone.step}
                                    </span>
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                      <Calendar className="w-3 h-3" />
                                      {milestone.duration}
                                    </span>
                                  </div>
                                  <h3 className="font-display text-xl font-bold mb-2">{milestone.title}</h3>
                                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {milestone.description}
                                  </p>
                                  <ul className="space-y-2">
                                    {milestone.features.map((feature, idx) => (
                                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Timeline Node */}
                        <div className="relative z-10 flex-shrink-0 w-16 h-16 mx-4">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-background border-4 border-primary shadow-lg flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-primary" />
                            </div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-primary/20 animate-ping" />
                          </div>
                        </div>

                        {/* Empty Space */}
                        <div className="w-5/12" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Timeline */}
            <div className="lg:hidden">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary" />

                {/* Roadmap Steps */}
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Initial Assessment",
                      description: "We start with a comprehensive evaluation of your current fitness level, health history, and personal goals.",
                      icon: Target,
                      duration: "Week 1",
                      features: ["Body composition analysis", "Fitness level testing", "Goal setting session"],
                    },
                    {
                      step: 2,
                      title: "Custom Program Design",
                      description: "A personalized training and nutrition plan tailored specifically to your needs, preferences, and lifestyle.",
                      icon: Map,
                      duration: "Week 1-2",
                      features: ["Workout schedule", "Nutrition guidelines", "Recovery protocols"],
                    },
                    {
                      step: 3,
                      title: "Foundation Building",
                      description: "Establish proper form, build core strength, and develop healthy habits that will support your long-term success.",
                      icon: TrendingUp,
                      duration: "Week 2-4",
                      features: ["Technique mastery", "Strength foundation", "Habit formation"],
                    },
                    {
                      step: 4,
                      title: "Progressive Training",
                      description: "Gradually increase intensity and complexity as your body adapts, ensuring continuous progress and results.",
                      icon: Sparkles,
                      duration: "Month 2-3",
                      features: ["Advanced exercises", "Performance tracking", "Adaptive programming"],
                    },
                    {
                      step: 5,
                      title: "Optimization & Mastery",
                      description: "Fine-tune your approach, overcome plateaus, and achieve peak performance with expert guidance.",
                      icon: Award,
                      duration: "Month 4+",
                      features: ["Plateau breaking", "Performance optimization", "Lifestyle integration"],
                    },
                  ].map((milestone, index) => {
                    const Icon = milestone.icon;

                    return (
                      <motion.div
                        key={milestone.step}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative pl-16"
                      >
                        {/* Timeline Node */}
                        <div className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center">
                          <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-background border-4 border-primary shadow-md flex items-center justify-center z-10">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                          </div>
                        </div>

                        {/* Content Card */}
                        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                              Step {milestone.step}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {milestone.duration}
                            </span>
                          </div>
                          <h3 className="font-display text-lg font-bold mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {milestone.description}
                          </p>
                          <ul className="space-y-2">
                            {milestone.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CTA at the end */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16 lg:mt-24"
            >
              <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
                <h3 className="font-display text-2xl font-bold mb-3">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Begin your transformation today with a personalized roadmap designed just for you.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">
                    Get Started Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
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

      {/* Image Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Gallery"
            title="Fitness Image Gallery"
            description="Explore our fitness journey through these inspiring moments and transformations."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {[
              { src: galleryImage1, alt: "Fitness training session" },
              { src: galleryImage2, alt: "Workout demonstration" },
              { src: galleryImage3, alt: "Fitness transformation" },
              { src: galleryImage4, alt: "Training session" },
              { src: galleryImage5, alt: "Exercise routine" },
              { src: galleryImage6, alt: "Fitness coaching" },
              { src: galleryImage7, alt: "Workout session" },
              { src: galleryImage8, alt: "Training moment" },
             
            ].map((image, index) => (
              <motion.div
                key={index}
               
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 rounded-xl z-10" />
              </motion.div>
            ))}
          </div>
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
