export default function Sponsors() {
  return (
    <section className="mt-10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-extrabold text-center text-brownDark font-samarkan">
        Sponsors
      </h2>
      <div className="glass-card mt-6 rounded-3xl p-6 hover:scale-[1.02] transition-transform duration-300">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-28 h-16 bg-white/20 border border-white/30 rounded-xl grid place-items-center text-xs text-brownMid">
              Sponsor Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}