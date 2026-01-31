import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPage() {
  const fitnessTestimonials = testimonials.filter((t) => t.category === "fitness");
  const mentalTestimonials = testimonials.filter((t) => t.category === "mental");
  const nutritionTestimonials = testimonials.filter((t) => t.category === "nutrition");

  return (
    <Layout>
      <Seo
        title="Testimonials"
        description="Read real client stories and transformations across fitness, nutrition, and mental wellness. See what results you can expect."
        canonicalPath="/testimonials"
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
              Testimonials
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real Stories,
              <span className="block gradient-text">Real Transformations</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from our clients who have transformed their lives through our
              fitness, nutrition, and mental wellness programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fitness Transformations */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Fitness"
            title="Fitness Transformations"
            description="Stories of physical transformation and renewed energy."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fitnessTestimonials.map((testimonial, index) => (
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
        </div>
      </section>

      {/* Mental Wellness */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="Mental Wellness"
            title="Mental Wellness Success"
            description="Stories of finding peace, clarity, and emotional balance."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {mentalTestimonials.map((testimonial, index) => (
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
        </div>
      </section>

      {/* Nutrition */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Nutrition"
            title="Nutrition Journeys"
            description="Stories of developing healthy relationships with food."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionTestimonials.map((testimonial, index) => (
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              Join our community of successful transformations. Your journey to a
              healthier you starts today.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
