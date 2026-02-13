import { Instagram, Facebook, Youtube } from "lucide-react";
// Import the image from your assets folder
import footerBg from "../assets/footer.png"; 

export default function Footer() {
  return (
    <footer 
      className="mt-10 rounded-3xl text-center max-w-4xl mx-auto mb-10 overflow-hidden relative"
      style={{
        backgroundColor: "#D2B48C", 
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        // This ensures the image takes the full width of the footer box
        backgroundSize: "100% auto", 
        minHeight: "250px", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingTop: "24px" // Padding at the top for content
      }}
    >
      {/* Content wrapper with z-index to stay above the background image */}
      <div className="relative z-10 px-6">
        <p className="font-bold text-brownDark">www.epistemico.com</p>
        <div className="mt-4 flex items-center justify-center gap-6">
          <Instagram size={24} className="text-brownMid hover:text-[#E4405F] transition-colors" />
          <Facebook size={24} className="text-brownMid hover:text-[#1877F2] transition-colors" />
          <Youtube size={24} className="text-brownMid hover:text-[#FF0000] transition-colors" />
        </div>
        <p className="mt-4 text-[10px] text-brownMid">
          © 2026 Epistemico Cultural Fest • All rights reserved
        </p>
      </div>
    </footer>
  );
}