import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const content = `Epistemico is the premier annual techno-cultural fest of GWECA, built upon a strong tradition 
  that traces back to the college’s foundation. Marking its 12th edition, the fest has emerged as the institution’s 
  most celebrated and eagerly awaited event, curated by the Creative Arts Society. 

  Serving as a vibrant blend of technology, culture, and imagination, Epistemico creates a dynamic environment where concepts turn into creations 
  and talent takes center stage. Electrifying performances, skill-driven technical contests, and thought-provoking 
  engagements combine to deliver an atmosphere filled with energy and exploration. 

  Organized through four core domains—Technical, Cultural, Innovation, and Literary—the fest draws enthusiastic participation from colleges 
  across Rajasthan and adjoining regions. Driven by unity, excellence, and inclusivity, Epistemico continues to 
  inspire and leave a lasting impact. 

  Epistemico — Where Knowledge Becomes Festivity and Festivity Becomes Legacy.`;

  return (
    <section className="glass-card mt-10 rounded-3xl p-6 text-center hover:scale-[1.02] transition-transform duration-300 max-w-3xl mx-auto">
      <h2 className="text-2xl font-extrabold text-brownDark font-samarkan">
        About Epistemico
      </h2>

      <div className="mt-4 text-sm text-brownMid leading-relaxed">
        {/* The whitespace-pre-line class ensures the line breaks in your string are rendered */}
        <p className={isExpanded ? "whitespace-pre-line" : "line-clamp-3"}>
          {content}
        </p>
      </div>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-6 px-7 py-2 rounded-full bg-[#a9572f] text-white font-bold shadow-soft hover:scale-[1.02] transition"
      >
        {isExpanded ? "Show Less" : "Learn More"}
      </button>
    </section>
  );
}