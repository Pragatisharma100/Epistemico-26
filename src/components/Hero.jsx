import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const text = "epistemico";

export default function Hero() {
  return (
    <section className="glass-card mt-6 rounded-3xl overflow-hidden max-w-4xl mx-auto">
      <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6 items-center">

        {/* ARTISTIC REVEAL LOGO */}
        <div className="flex justify-center">
          <motion.img
            src={logo}
            alt="Epistemico Logo"
            className="w-40 h-40 md:w-48 md:h-48 object-contain"
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </div>

        {/* LETTER BY LETTER TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-wide text-brownDark font-samarkan flex gap-1 justify-center md:justify-start">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <p className="mt-1 text-md font-semibold text-brownMid font-samarkan">
            Vasudhaiva Kutumbakam
          </p>

          <p className="mt-2 text-xs text-brownMid font-medium">
            Cultural Fest | 12–13 March | Government Mahila Engineering College
          </p>
        </div>

      </div>
    </section>
  );
}
