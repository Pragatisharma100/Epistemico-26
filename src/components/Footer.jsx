import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glass-card mt-10 rounded-3xl p-6 text-center max-w-4xl mx-auto mb-10">
      <p className="font-bold text-brownDark">www.epistemico.com</p>
      <div className="mt-4 flex items-center justify-center gap-6">
        <Instagram size={24} className="text-brownMid hover:text-[#E4405F]" />
        <Facebook size={24} className="text-brownMid hover:text-[#1877F2]" />
        <Youtube size={24} className="text-brownMid hover:text-[#FF0000]" />
      </div>
      <p className="mt-4 text-[10px] text-brownMid">
        © 2026 Epistemico Cultural Fest • All rights reserved
      </p>
    </footer>
  );
}