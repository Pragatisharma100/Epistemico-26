import { motion } from "framer-motion";
export default function EventCard({ title, description, image }) {
  return (
    <div className="group relative glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl h-full flex flex-col">
      {/* Image Section with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white font-samarkan">
          {title}
        </h3>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-grow bg-white/10">
        <p className="text-sm text-brownDark leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover Action */}
      <div className="p-4 bg-white/5 border-t border-white/20">
        <button className="w-full py-2 rounded-xl bg-[#a9572f] text-white font-bold text-sm transform transition-all duration-300 hover:bg-[#8e4927] active:scale-95">
          View Details
        </button>
      </div>
    </div>
  );
}