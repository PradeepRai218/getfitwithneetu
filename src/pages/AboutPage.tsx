import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, CheckCircle2, Heart, Target, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
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
  "Certified Personal Trainer ",
  "Nutrition & Wellness Consultant",
  "Emotional healing Coach",
  "Yoga Instructors",
  "Qualified physiotherapist",
  "CPR & First Aid Certified",
  "5+ Years Industry Experience",
];

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise?: string[];
  achievements?: string[];
};

const teamMembers: TeamMember[] = [
  {
    name: "Nitu",
    role: "Team Lead",
    image: trainerImage,
    bio: `Hi, I'm Nitu
As a certified fitness and wellness expert, I believe in a holistic approach to health. My journey began over 5 years ago, and since then, I've helped hundreds of clients transform not just their bodies, but their entire lives.

I combine physical training with mental wellness support and nutrition guidance to help you achieve lasting results. Whether you're looking to lose weight, build strength, or find mental balance, I'm here to guide you every step of the way.`,
  }
];

export default function AboutPage() {
  return (
    <Layout>
      <Seo
        title="About"
        description="Meet Sankalp and learn about our holistic approach to fitness, nutrition, and mental wellness. Certified guidance, personalized programs, real results."
        canonicalPath="/about"
      />
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
                <span className="block gradient-text"> Fit Sankalp</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
               I journey started 10years back,as There was a time when I lost myself while taking care of everyone else.

              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Like many women, after marriage and motherhood, my world revolved entirely around family and responsibilities. Somewhere along the way, my own health and fitness quietly slipped to the bottom of my priority list. I began struggling with hypertension, thyroid issues, and diabetes. After delivery, I noticed a rapid decline in my energy, strength, and confidence. I felt older than my age—and that realization was frightening.

              </p>

               <p className="text-muted-foreground leading-relaxed mb-8">
               I once read that fitness is the greatest asset a human being can possess. That single thought changed everything. When I compared the person I once was with who I had become, I knew I had to act—before it was too late.


              </p>
               <p className="text-muted-foreground leading-relaxed mb-8">
             What began as a personal effort to regain my health soon turned into a life-changing journey. Through discipline, consistency, and the right knowledge, I rebuilt my fitness along with confidence and self-belief.

              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
           As I progressed, I realized something even deeper: I was not alone. Countless women postpone their health while balancing marriages, careers, businesses, and families—until one day they wake up and realize they have waited too long.


              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
         That realization became my purpose.


              </p>
               <p className="text-muted-foreground leading-relaxed mb-8">
      I pursued professional fitness education from the K11 School of Fitness Sciences, and earned multiple certification in this field. I began guiding individuals one-on-one. Over the years, I have helped 500+ individuals rediscover strength, energy, and a healthier relationship with their bodies.


              </p>
               <p className="text-muted-foreground leading-relaxed mb-8">
     Today, along with a team of like-minded professionals, we work toward holistic health and wellness—addressing not only fitness, but also nutrition, mindset, emotional health, and sustainable lifestyle habits.



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
                  alt="Sankalp - Fitness & Wellness Expert"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">
                    Sankalp
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

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Our Team"
            title="OUR TEAM"
            
          />

          <div className="flex flex-col gap-16 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col sm:flex-row gap-8">
                  {/* Dummy image - styled with Tailwind */}
                  <div className="flex-shrink-0 w-full sm:w-48 md:w-56">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {member.expertise && member.expertise.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-display font-bold text-sm uppercase tracking-wider text-foreground mb-3">
                          His Expertise
                        </h4>
                        <ul className="space-y-2">
                          {member.expertise.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {member.achievements && member.achievements.length > 0 && (
                      <div>
                        <h4 className="font-display font-bold text-sm uppercase tracking-wider text-foreground mb-3">
                          Achievements
                        </h4>
                        <ul className="space-y-2">
                          {member.achievements.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
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
