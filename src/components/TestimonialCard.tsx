import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  delay?: number;
}

export function TestimonialCard({
  name,
  role,
  content,
  rating,
  image,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift relative"
    >
      <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
      
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-primary fill-primary" : "text-muted"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground leading-relaxed mb-6">"{content}"</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
