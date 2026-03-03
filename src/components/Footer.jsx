import { Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
// Import the image from your assets folder
import footerBg from "../assets/footer.png"; 

export default function Footer() {
  const socialLinks = [
    {
      icon: <Instagram size={24} />,
      url: "https://www.instagram.com/epistemico.official?igsh=MXB6cWZubWltM25zbg==",
      hoverColor: "hover:text-[#E4405F]",
    },
    {
      icon: <Youtube size={24} />,
      url: "https://youtube.com/@epistemico2026?si=qfp7w6i5b0WUSYMq",
      hoverColor: "hover:text-[#FF0000]",
    },
    {
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/company/creative-arts-society-gweca/",
      hoverColor: "hover:text-[#0A66C2]",
    },
    {
      icon: <Twitter size={24} />,
      url: "https://x.com/casgweca?s=11",
      hoverColor: "hover:text-[#1DA1F2]",
    },
  ];

  return (
    <footer 
      className="mt-10 rounded-3xl text-center max-w-4xl mx-auto mb-10 overflow-hidden relative"
      style={{
        backgroundColor: "#D2B48C", 
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "100% auto", 
        minHeight: "250px", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingTop: "24px" 
      }}
    >
      {/* Content wrapper with z-index to stay above the background image */}
      <div className="relative z-10 px-6">
        <p className="font-bold text-brownDark">epistemico-26.vercel.app</p>
        
        <div className="mt-4 flex items-center justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-brownMid transition-colors ${social.hoverColor}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="mt-4 text-[10px] text-brownMid">
          © 2026 Epistemico Cultural Fest • All rights reserved
        </p>
      </div>
    </footer>
  );
}