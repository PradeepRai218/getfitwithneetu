export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  category: "fitness" | "mental" | "nutrition";
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Software Engineer",
    content:
      "Neetu's fitness program completely transformed my life. I lost 15kg in 6 months and gained so much confidence. Her approach is holistic and sustainable.",
    rating: 5,
    category: "fitness",
  },
  {
    id: "2",
    name: "Rahul Verma",
    role: "Business Owner",
    content:
      "The mind counselling sessions helped me manage work stress better than ever. I'm more focused, calm, and my relationships have improved significantly.",
    rating: 5,
    category: "mental",
  },
  {
    id: "3",
    name: "Ananya Patel",
    role: "Marketing Manager",
    content:
      "The personalized diet plan was a game-changer. No more crash diets! I finally understand nutrition and maintain a healthy weight effortlessly.",
    rating: 5,
    category: "nutrition",
  },
  {
    id: "4",
    name: "Vikram Singh",
    role: "Fitness Enthusiast",
    content:
      "As someone who's worked with many trainers, Neetu stands out. Her knowledge, dedication, and personal attention are unmatched. Highly recommend!",
    rating: 5,
    category: "fitness",
  },
  {
    id: "5",
    name: "Meera Gupta",
    role: "Doctor",
    content:
      "The combination of fitness training and mental wellness support is exactly what I needed. I'm stronger physically and mentally. Thank you, Neetu!",
    rating: 5,
    category: "mental",
  },
  {
    id: "6",
    name: "Arjun Reddy",
    role: "College Student",
    content:
      "The free trial masterclass convinced me to join. Best decision ever! The training is fun, challenging, and I've made amazing progress in just 3 months.",
    rating: 5,
    category: "fitness",
  },
];
