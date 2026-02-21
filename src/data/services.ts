import {
  Brain,
  Dumbbell,
  Apple,
  HeartPulse,
  Activity,
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
    id: "just-counselling",
    title: "Counselling",
    shortDescription:
      "Professional mental wellness support to help you overcome stress, anxiety, and achieve inner peace.",
    fullDescription:
      `Our counselling sessions are designed to gain a deep understanding of your overall health and lifestyle. We assess your current health concerns, daily routine, functional challenges, and the barriers that may be preventing you from achieving optimal health.
    
      These sessions also focus on key areas such as sleep quality, gut health, hormonal balance, stress levels, and lifestyle habits. Based on this holistic assessment, we provide personalized guidance and practical solutions to help restore balance, improve well-being, and support long-term health outcomes.
     `,
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
      offline: false,
      duration: "30-45 minutes per session",
    },
    ctaText: "Book Consultation",
  },
  {
    id: "fitness-trainer",
    title: "Fitness Training",
    shortDescription:
      "Personalized workout programs designed to help you achieve your fitness goals effectively.",
    fullDescription:
      `Transform your body and enhance your energy levels with customized fitness training programs designed to meet your individual needs. 

Whether you are a beginner, a senior citizen, a new mother, managing physical limitations, or an athlete, our programs are thoughtfully tailored to your body, goals, and schedule, delivering sustainable results through safe, intelligent, and empowering training.`,
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
      offline: false,
      duration: "60 minutes per session",
    },
    ctaText: "Start Training",
  },
  {
    id: "dietitian",
    title: "Diet & Nutrition",
    shortDescription:
      "Expert nutrition guidance and personalized meal plans for optimal health and wellness.",
    fullDescription:
      `Our personalized diet plans are created using insights from your blood tests, gut health, energy levels, mood, and sleep, ensuring a science-backed and targeted nutrition approach. 

Each plan is carefully customised to suit your lifestyle, food preferences, and health goals, making it practical and sustainable.`,
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
      offline: false,
      duration: "60-90 minutes per session",
    },
    ctaText: "Get Diet Plan",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    shortDescription:
      "Professional Physiotherapy guidance for comprehensive mental health care and treatment.",
    fullDescription:
      "Get expert physiotherapy support for joint health challenges and injury rehabilitation. Our evidence-based approach, combined with compassionate, personalized care, and empathy. we help you regain movement, resilience, restore mobility, reduce pain, and guide you toward complete, long-term physical fitness.”",
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
      "Anyone needing Physiotherapy evaluation",
    ],
    format: {
      online: true,
      offline: false,
      duration: "30-45 minutes per session",
    },
    ctaText: "Book Consultation",
  },
   {
    id: "yoga",
    title: "Yoga",
    shortDescription:
      "Professional Physiotherapy guidance for comprehensive mental health care and treatment.",
    fullDescription:
      "Access professional Physiotherapy support for a range of mental health concerns. Our approach combines evidence-based treatments with compassionate care to help you achieve mental wellness.",
    icon: Activity,
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
      "Anyone needing Physiotherapy evaluation",
    ],
    format: {
      online: true,
      offline: false,
      duration: "60 minutes per session",
    },
    ctaText: "Book Consultation",
  },
  {
    id: "free-trial",
    title: "Free Trial Session",
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
      offline: false,
      duration: "45-60 minutes per session",
    },
    ctaText: "Join Free Trial",
  },
  // {
  //   id: "free-masterclass",
  //   title: "Free Masterclass",
  //   shortDescription:
  //     "Access our library of free fitness and wellness courses to kickstart your journey.",
  //   fullDescription:
  //     "Learn at your own pace with our collection of free fitness and wellness courses. From basic exercises to nutrition fundamentals, build your knowledge foundation for a healthier lifestyle.",
  //   icon: BookOpen,
  //   benefits: [
  //     "Self-paced learning",
  //     "Comprehensive video content",
  //     "Exercise tutorials",
  //     "Nutrition basics",
  //     "Wellness tips",
  //     "Lifetime access",
  //   ],
  //   forWhom: [
  //     "Self-learners",
  //     "Those wanting to learn basics",
  //     "People preferring flexible learning",
  //     "Anyone interested in wellness education",
  //   ],
  //   format: {
  //     online: true,
  //     offline: false,
  //     duration: "60-90 minutes per session",
  //   },
  //   ctaText: "Access Courses",
  // },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
