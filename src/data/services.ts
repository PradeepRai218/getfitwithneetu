import {
  Brain,
  Dumbbell,
  Apple,
  HeartPulse,
  Building2,
  Sparkles,
  BookOpen,
  LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  benefits: string[];
  forWhom: string[];
  format: {
    online: boolean;
    offline: boolean;
    duration: string;
  };
  ctaText: string;
}

export const services: Service[] = [
  {
    id: "mind-counselling",
    title: "Mind Counselling",
    shortDescription:
      "Professional mental wellness support to help you overcome stress, anxiety, and achieve inner peace.",
    fullDescription:
      "Our mind counselling sessions are designed to help you navigate life's challenges with clarity and confidence. We focus on building mental resilience, managing stress, and developing healthy coping mechanisms that last a lifetime.",
    icon: Brain,
    benefits: [
      "Reduce stress and anxiety levels",
      "Improve emotional regulation",
      "Build mental resilience",
      "Develop healthy coping strategies",
      "Enhance self-awareness",
      "Achieve better work-life balance",
    ],
    forWhom: [
      "Anyone experiencing stress or anxiety",
      "Professionals seeking work-life balance",
      "Individuals going through life transitions",
      "Those looking to improve mental clarity",
    ],
    format: {
      online: true,
      offline: true,
      duration: "45-60 minutes per session",
    },
    ctaText: "Book Consultation",
  },
  {
    id: "fitness-trainer",
    title: "Fitness Training",
    shortDescription:
      "Personalized workout programs designed to help you achieve your fitness goals effectively.",
    fullDescription:
      "Transform your body and boost your energy with customized fitness training programs. Whether you're a beginner or an athlete, our training adapts to your level, goals, and schedule for maximum results.",
    icon: Dumbbell,
    benefits: [
      "Customized workout plans",
      "Proper form and technique guidance",
      "Progressive strength building",
      "Improved flexibility and mobility",
      "Weight management",
      "Increased energy and stamina",
    ],
    forWhom: [
      "Fitness beginners",
      "Those looking to lose weight",
      "People wanting to build muscle",
      "Athletes seeking performance improvement",
    ],
    format: {
      online: true,
      offline: true,
      duration: "30-60 minutes per session",
    },
    ctaText: "Start Training",
  },
  {
    id: "dietitian",
    title: "Diet & Nutrition",
    shortDescription:
      "Expert nutrition guidance and personalized meal plans for optimal health and wellness.",
    fullDescription:
      "Fuel your body right with science-backed nutrition plans tailored to your lifestyle, preferences, and health goals. Our dietitian services help you develop a sustainable relationship with food.",
    icon: Apple,
    benefits: [
      "Personalized meal plans",
      "Nutritional education",
      "Weight management support",
      "Improved digestion",
      "Better energy levels",
      "Sustainable eating habits",
    ],
    forWhom: [
      "Those wanting to improve eating habits",
      "Individuals with weight goals",
      "People with dietary restrictions",
      "Athletes needing performance nutrition",
    ],
    format: {
      online: true,
      offline: true,
      duration: "30-45 minutes per session",
    },
    ctaText: "Get Diet Plan",
  },
  {
    id: "psychiatrist",
    title: "Psychiatric Support",
    shortDescription:
      "Professional psychiatric guidance for comprehensive mental health care and treatment.",
    fullDescription:
      "Access professional psychiatric support for a range of mental health concerns. Our approach combines evidence-based treatments with compassionate care to help you achieve mental wellness.",
    icon: HeartPulse,
    benefits: [
      "Professional mental health assessment",
      "Evidence-based treatment plans",
      "Medication guidance when needed",
      "Ongoing support and monitoring",
      "Holistic mental health approach",
      "Confidential consultations",
    ],
    forWhom: [
      "Those seeking professional mental health support",
      "Individuals with mood disorders",
      "People experiencing persistent anxiety",
      "Anyone needing psychiatric evaluation",
    ],
    format: {
      online: true,
      offline: true,
      duration: "45-60 minutes per session",
    },
    ctaText: "Book Consultation",
  },
  {
    id: "gym-reference",
    title: "Gym Reference",
    shortDescription:
      "Get recommended gym timings and guidance for peak and non-peak hours training.",
    fullDescription:
      "Make the most of your gym sessions with our recommended timing guide. We help you identify the best times to train based on crowd levels, equipment availability, and your personal schedule.",
    icon: Building2,
    benefits: [
      "Optimal training times",
      "Less crowded gym sessions",
      "Better equipment access",
      "More focused workouts",
      "Time-efficient training",
      "Partner gym recommendations",
    ],
    forWhom: [
      "Gym newcomers",
      "Busy professionals",
      "Those preferring quiet training",
      "People with flexible schedules",
    ],
    format: {
      online: true,
      offline: false,
      duration: "Ongoing guidance",
    },
    ctaText: "Get Timings",
  },
  {
    id: "free-trial",
    title: "Free Trial Masterclass",
    shortDescription:
      "Experience our training methodology with a complimentary masterclass session.",
    fullDescription:
      "Try before you commit! Our free trial masterclass gives you a taste of our training style, methodology, and the transformation that awaits. No obligations, just pure fitness experience.",
    icon: Sparkles,
    benefits: [
      "No-commitment trial",
      "Experience training methodology",
      "Meet your potential trainer",
      "Get personalized feedback",
      "Understand our approach",
      "Make an informed decision",
    ],
    forWhom: [
      "Anyone curious about our services",
      "Those new to fitness training",
      "People comparing fitness options",
      "Anyone ready to start their journey",
    ],
    format: {
      online: true,
      offline: true,
      duration: "30 minutes",
    },
    ctaText: "Join Free Trial",
  },
  {
    id: "free-courses",
    title: "Free Courses",
    shortDescription:
      "Access our library of free fitness and wellness courses to kickstart your journey.",
    fullDescription:
      "Learn at your own pace with our collection of free fitness and wellness courses. From basic exercises to nutrition fundamentals, build your knowledge foundation for a healthier lifestyle.",
    icon: BookOpen,
    benefits: [
      "Self-paced learning",
      "Comprehensive video content",
      "Exercise tutorials",
      "Nutrition basics",
      "Wellness tips",
      "Lifetime access",
    ],
    forWhom: [
      "Self-learners",
      "Those wanting to learn basics",
      "People preferring flexible learning",
      "Anyone interested in wellness education",
    ],
    format: {
      online: true,
      offline: false,
      duration: "Various course lengths",
    },
    ctaText: "Access Courses",
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
