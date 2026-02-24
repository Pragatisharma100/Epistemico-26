import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegistrationModal from "../components/RegistrationModal";
import culturalEvents from "../data/culturalEvents";

export default function CulturalDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showRegistration, setShowRegistration] = useState(false);
  const event = culturalEvents.find((e) => String(e.id) === String(id));

  if (!event) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 pt-44 pb-12 text-center">
          <h2 className="text-2xl font-bold">Event not found</h2>
          <p className="mt-4">The requested cultural event doesn't exist.</p>
          <button onClick={() => navigate(-1)} className="mt-6 px-4 py-2 bg-[#a9572f] text-white rounded">Go Back</button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <button onClick={() => navigate(-1)} className="mb-4 text-sm text-brownMid underline">← Back</button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {event.image && (
            <div className="h-64 w-full overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="p-6">
            <h1 className="text-3xl font-bold text-brownDark mb-2">{event.title}</h1>
            <p className="text-sm font-semibold text-[#a9572f] mb-4">{event.category}</p>
            <p className="text-brownMid mb-4">{event.overview}</p>

            {event.format && (
              <div className="mb-4">
                <h3 className="font-bold text-brownDark mb-2">Format</h3>
                {Array.isArray(event.format) ? (
                  <ul className="list-disc list-inside text-brownMid space-y-1">
                    {event.format.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-brownMid">{event.format}</p>
                )}
              </div>
            )}

            {event.rules && (
              <div className="mb-4">
                <h3 className="font-bold text-brownDark mb-2">Rules</h3>
                <ol className="list-decimal list-inside text-brownMid space-y-1">
                  {event.rules.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ol>
              </div>
            )}

            {event.winningCriteria && (
              <div className="mb-4">
                <h3 className="font-bold text-brownDark mb-2">Winning Criteria</h3>
                <ul className="list-disc list-inside text-brownMid space-y-1">
                  {event.winningCriteria.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6">
              <button onClick={() => setShowRegistration(true)} className="inline-block px-6 py-2 bg-[#a9572f] text-white rounded-full font-semibold mr-3">Register Now</button>
              <a href="/cultural/" className="inline-block px-6 py-2 bg-white text-[#a9572f] rounded-full font-semibold border border-[#a9572f]">Back to Cultural Events</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <RegistrationModal open={showRegistration} onClose={() => setShowRegistration(false)} selectedEvent={event?.title} googleFormLink={"https://forms.gle/YOUR_FORM_LINK_HERE"} />
    </div>
  );
}
