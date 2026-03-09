import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegistrationModal from "../components/RegistrationModal";
import literaryEvents from "../data/literaryEvents";

export default function LiteraryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showRegistration, setShowRegistration] = useState(false);
  const event = literaryEvents.find((e) => String(e.id) === String(id));

  if (!event) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 pt-44 pb-12 text-center">
          <h2 className="text-2xl font-bold">Event not found</h2>
          <p className="mt-4">The requested literary event doesn't exist.</p>
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
                <p className="text-brownMid">{event.format}</p>
              </div>
            )}

            {event.rounds && (
              <div className="mb-4">
                <h3 className="font-bold text-brownDark mb-2">Rounds / Structure</h3>
                <ul className="list-disc list-inside text-brownMid space-y-1">
                  {event.rounds.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
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

            {event.evaluationCriteria && (
              <div className="mb-4">
                <h3 className="font-bold text-brownDark mb-2">Evaluation Criteria</h3>
                <div className="space-y-2">
                  {event.evaluationCriteria.map((e, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-orange-50 rounded">
                      <span className="text-brownMid">{e.criteria}</span>
                      <span className="font-bold text-[#a9572f] bg-white px-3 py-1 rounded">{e.marks ? `${e.marks} marks` : ''}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <button onClick={() => setShowRegistration(true)} className="inline-block px-6 py-2 bg-[#a9572f] text-white rounded-full font-semibold mr-3">Register Now</button>
              <button onClick={() => navigate(-1)} className="inline-block px-6 py-2 bg-white text-[#a9572f] rounded-full font-semibold border border-[#a9572f]">Go Back</button>
              {/* <a href="/literary/" className="inline-block px-6 py-2 bg-white text-[#a9572f] rounded-full font-semibold border border-[#a9572f]">Back to Literary Events</a> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <RegistrationModal open={showRegistration} onClose={() => setShowRegistration(false)} selectedEvent={event?.title} googleFormLink={"https://forms.gle/YOUR_FORM_LINK_HERE"} />
    </div>
  );
}
