import React from "react";
import { motion } from "framer-motion";
import techImg from "../assets/tech.jpeg";
import literaryImg from "../assets/literary.jpg";
import culturalImg from "../assets/cultural.jpg";
import innovationImg from "../assets/innovation.jpeg";

// carousel content removed; using only mainEvents grid
const events = []; // placeholder
const mainEvents = [
  { id: 'technical', title: 'Technical', img: techImg },
  { id: 'literary', title: 'Literary', img: literaryImg },
  { id: 'cultural', title: 'Cultural', img: culturalImg },
  { id: 'innovation', title: 'Innovation', img: innovationImg },
];

export default function EventsPreview() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const card = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-extrabold text-brownDark mb-6 flex items-center gap-3"
        >
          Upcoming Events
          <a href="/events" className="text-[#a9572f] hover:text-[#7a4a2c] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.h3>

        <motion.h4 className="text-xl md:text-2xl font-semibold text-brownDark mb-4">Main Events</motion.h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {mainEvents.map((m) => (
            <motion.a
              key={m.id}
              href={`/events#${m.id}`}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl overflow-hidden border border-white/10 shadow-md bg-white/5"
            >
              <div className="h-36 md:h-44 w-full relative">
                <img src={m.img} alt={m.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute left-3 bottom-3 text-white font-bold text-sm bg-[#7a4a2c]/70 px-3 py-1 rounded-full">{m.title}</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* no carousel here; only main event highlights are shown */}
        <div />
      </div>
    </section>
  );
}
