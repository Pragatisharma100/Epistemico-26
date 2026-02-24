import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Users, Lightbulb, BookOpen } from "lucide-react";

// 🔹 Dynamic Content
const aboutData = {
  title: "About Epistemico",
  content: `Epistemico is the premier annual techno-cultural fest of GWECA, built upon a strong tradition 
that traces back to the college’s foundation. Marking its 12th edition, the fest has emerged as the institution’s 
most celebrated and eagerly awaited event, curated by the Creative Arts Society. 

Serving as a vibrant blend of technology, culture, and imagination, Epistemico creates a dynamic environment where concepts turn into creations 
and talent takes center stage. Electrifying performances, skill-driven technical contests, and thought-provoking 
engagements combine to deliver an atmosphere filled with energy and exploration. 

Organized through four core domains—Technical, Cultural, Innovation, and Literary—the fest draws enthusiastic participation 
across regions and continues to inspire lasting impact.`
};

// 🔹 Domains Config
const domains = [
  {
    icon: Zap,
    title: "Technical",
    description: "Competitions, coding battles, robotics & problem-solving arenas."
  },
  {
    icon: Users,
    title: "Cultural",
    description: "Performances, art, music, dance & creative showcases."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Startup pitches, prototype demos & visionary concepts."
  },
  {
    icon: BookOpen,
    title: "Literary",
    description: "Debates, poetry, storytelling & intellectual forums."
  }
];

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="mt-10 px-4">

      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-6 text-center max-w-3xl mx-auto hover:scale-[1.02] transition-transform duration-300"
      >
        <h2 className="text-2xl font-extrabold text-brownDark font-samarkan">
          {aboutData.title}
        </h2>

        <div className="mt-4 text-sm text-brownMid leading-relaxed">
          <p className={isExpanded ? "whitespace-pre-line" : "line-clamp-3"}>
            {aboutData.content}
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 px-7 py-2 rounded-full bg-[#a9572f] text-white font-bold transition"
        >
          {isExpanded ? "Show Less" : "Learn More"}
        </motion.button>
      </motion.div>

      {/* Domains Section */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto"
      >
        {domains.map((domain, index) => {
          const Icon = domain.icon;

          return (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-card rounded-2xl p-6 text-center border border-[#a9572f]/30 hover:border-[#a9572f] transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#a9572f]/10 mb-4">
                <Icon className="w-7 h-7 text-[#a9572f]" />
              </div>

              <h4 className="text-lg font-bold text-brownDark">
                {domain.title}
              </h4>

              <p className="text-sm text-brownMid mt-2">
                {domain.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}