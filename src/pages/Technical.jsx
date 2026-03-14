import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegistrationModal from "../components/RegistrationModal";
import technicalEvents from "../data/technicalEvents";

export default function Technical() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [googleFormLink, setGoogleFormLink] = useState("");

  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 pt-36 pb-12">

        {/* Back Button */}
        <button
          onClick={() => navigate("/events")}
          className="mb-6 px-4 py-2 text-brownDark font-semibold hover:text-brownMid transition-colors flex items-center gap-2"
        >
          ← Back to Events
        </button>

        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-brownDark flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8" />
            Technical Events — Epistemico'26
          </h1>

          <p className="mt-2 text-brownMid max-w-2xl mx-auto">
            Explore technical challenges, competitions and register to participate.
          </p>
        </header>

        {/* Banner */}
        <div className="bg-gradient-to-r from-[#a9572f] to-[#8b4524] rounded-xl p-6 mb-8 text-white shadow-lg">
          <div className="text-center">

            <h2 className="text-2xl font-bold">Are you ready to compete?</h2>
            <p className="opacity-90 mt-2">
              Select a technical event and register now.
            </p>

          </div>
        </div>

        {/* Event Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          {technicalEvents.map((event) => (

            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col"
            >

              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">

                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <h3 className="absolute left-4 bottom-3 text-white font-bold text-lg">
                  {event.title}
                </h3>

              </div>

              {/* Overview */}
              <div className="p-4 flex-grow">
                <p className="text-sm text-brownMid leading-snug">
                  {event.overview?.slice(0, 110)}
                  {event.overview && event.overview.length > 110 ? "…" : ""}
                </p>
              </div>

              {/* Buttons */}
              <div className="p-4 border-t border-gray-100 flex gap-2">

                <button
                  onClick={() => navigate(`/technical/${event.id}`)}
                  className="flex-1 py-2 bg-[#a9572f] text-white rounded-full font-semibold"
                >
                  Explore Now
                </button>

                <button
                  onClick={() => {
                    setSelectedEvent(event.title);
                    setGoogleFormLink(event.registrationLink);
                    setShowRegistration(true);
                  }}
                  className="flex-1 py-2 bg-white text-[#a9572f] rounded-full border border-[#a9572f] font-semibold"
                >
                  Register
                </button>

              </div>

            </div>

          ))}

        </section>

        {/* Registration Modal */}
        <RegistrationModal
          open={showRegistration}
          onClose={() => setShowRegistration(false)}
          selectedEvent={selectedEvent}
          googleFormLink={googleFormLink}
        />

      </main>

      <Footer />
    </div>
  );
}