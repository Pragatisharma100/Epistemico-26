import { useState } from "react";

export default function Theme() {
  const [isExpanded, setIsExpanded] = useState(false);

  const themeContent = `EPISTEMICO 2026 – Around the World: Vasudhaiva Kutumbakam 
 
|| भाषाः भिन्नाः, संस्कृतयः नानाः, भावः एक एव ||
Languages differ, cultures vary, yet the feeling is one.
 
Vasudhaiva Kutumbakam - the whole world is one big family. 
A planet full of wild energy, new languages, new styles, new beats - yet all vibing together like one big, joyful celebration!

Epistemico: Vasudhaiva Kutumbakam is a tour across continents without passports—where colors dance, music speaks every language, and technology adds the spark. One moment feels like a cultural parade, the next like a futuristic adventure powered by innovation and creativity.
 
|| एकं विश्वं, अनेकाः संस्कृतयः, एकः भावः ||
One world, many cultures, one shared spirit.
 
Fun corner filled with flavors, fashion, games, art, and surprises turn the fest into a playground of delight and joy which give the essence of different cultures at one place. Stages roar with performances, arenas buzz with challenges, and every step brings a burst of excitement.

It’s a place where new ideas meet new friendships, where joy knows no borders, and every memory feels world-class.

Epistemico — एकंकुटुम्बं इवविश्वं उत्सवयामः
                 Let us celebrate the world as one family.`;

  return (
    <section className="glass-card mt-10 rounded-3xl p-8 text-center hover:scale-[1.02] transition-transform duration-300 max-w-4xl mx-auto shadow-lg">
      <h2 className="text-3xl font-extrabold text-brownDark font-samarkan mb-6">
        Theme Vasudhaiva Kutumbakam
      </h2>
      
      <div className="text-md text-brownMid leading-relaxed whitespace-pre-line text-center">
        {/* line-clamp-3 shows only first 3 lines initially. 
            When expanded, we remove the clamp to show the full text. */}
        <p className={isExpanded ? "" : "line-clamp-3"}>
          {themeContent}
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