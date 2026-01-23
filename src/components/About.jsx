export default function About() {
  return (
    <section className="glass-card mt-10 rounded-3xl p-6 text-center hover:scale-[1.02] transition-transform duration-300 max-w-3xl mx-auto">
      <h2 className="text-2xl font-extrabold text-brownDark font-samarkan">
        About Epistemico
      </h2>

      <p className="mt-4 text-sm text-brownMid leading-relaxed">
        Epistemico is a cultural fest celebrating <b>“Vasudhaiva Kutumbakam”</b>.
        Meet at XYZ University for cultural experiences from across the world!
      </p>

      <button className="mt-6 px-7 py-2 rounded-full bg-[#a9572f] text-white font-bold shadow-soft hover:scale-[1.02] transition">
        Learn More
      </button>
    </section>
  );
}