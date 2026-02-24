import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Zap, BookOpen, Lightbulb } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegistrationModal from "../components/RegistrationModal";
import innovationEvents from "../data/innovationEvents";

export default function Innovation() {
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const navigate = useNavigate();

  const toggleEvent = (id) => {
    setExpandedEvent((prev) => (prev === id ? null : id));
  };

  const googleFormLink = "https://forms.gle/YOUR_FORM_LINK_HERE";

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pt-36 pb-12">
        <button
          onClick={() => navigate("/events")}
          className="mb-6 px-4 py-2 text-brownDark font-semibold hover:text-brownMid transition-colors flex items-center gap-2"
        >
          ← Back to Events
        </button>

        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-brownDark flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8" /> Innovation Events- Epistemico'26
          </h1>
          <p className="mt-2 text-brownMid max-w-2xl mx-auto">Explore events, read problem statements and register.</p>
        </header>

        <div className="bg-gradient-to-r from-[#a9572f] to-[#8b4524] rounded-xl p-6 mb-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold">Ready to Showcase Your Talent?</h2>
              <p className="opacity-90">Register now for your favorite innovation event!</p>
            </div>
            <button
              onClick={() => setShowRegistration(true)}
              className="mt-2 md:mt-0 bg-white text-[#a9572f] px-6 py-2 rounded-full font-bold hover:bg-orange-50 transition-all"
            >
              Register Here →
            </button>
          </div>
        </div>

        {/* 4-column grid of event cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {innovationEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
              <div className="relative h-40 w-full overflow-hidden">
                {event.image && (
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute left-4 bottom-3 text-white font-bold text-lg">{event.title}</h3>
              </div>

              <div className="p-4 flex-grow">
                <p className="text-sm text-brownMid leading-snug">{event.overview?.slice(0, 110)}{event.overview && event.overview.length > 110 ? '…' : ''}</p>
              </div>

              <div className="p-4 border-t border-gray-100 flex gap-2">
                <button onClick={() => navigate(`/innovation/${event.id}`)} className="flex-1 py-2 bg-[#a9572f] text-white rounded-full font-semibold">Explore Now</button>
                <button onClick={() => { setSelectedEvent(event.title); setShowRegistration(true); }} className="flex-1 py-2 bg-white text-[#a9572f] rounded-full border border-[#a9572f] font-semibold">Register</button>
              </div>
            </div>
          ))}
        </section>

        <RegistrationModal open={showRegistration} onClose={() => setShowRegistration(false)} selectedEvent={selectedEvent} googleFormLink={googleFormLink} />

        {showRegistration && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="sticky top-0 bg-gradient-to-r from-[#a9572f] to-[#8b4524] text-white p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-1">{selectedEvent ? `Register for ${selectedEvent}` : "Register for Innovation Events"}</h2>
                  <p className="text-sm opacity-90">Join the innovation revolution! 🚀</p>
                </div>
                <button onClick={() => setShowRegistration(false)} className="text-2xl hover:scale-125 transition-transform">✕</button>
              </div>

              <div className="p-6">
                <div className="bg-orange-50 border-l-4 border-[#a9572f] p-4 rounded mb-6">
                  <h3 className="font-bold text-brownDark mb-2">📋 Registration Instructions:</h3>
                  <ul className="text-sm text-brownMid space-y-1">
                    <li>✓ Fill in your details carefully</li>
                    <li>✓ You'll receive confirmation email</li>
                    <li>✓ Event details will be shared soon</li>
                    <li>✓ Important: Don't miss the event date!</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-brownDark mb-4">Fill the Registration Form Below</h3>

                  <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 font-semibold mb-2">Google Form Registration</p>
                    <p className="text-xs text-gray-400 mb-4">(Admin: Update the Google Form link below)</p>

                    {/* Uncomment and replace with your Google Form iframe if available */}
                    {/*
                    <iframe
                      src={googleFormLink}
                      width="100%"
                      height="500"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      className="rounded-lg"
                    >
                      Loading...
                    </iframe>
                    */}

                    <div className="mt-6 p-4 bg-white rounded border border-gray-300">
                      <p className="text-sm text-brownDark"><strong>TODO for Admin:</strong> Add your Google Form embed link in the Innovation.jsx file</p>
                      <p className="text-xs text-brownMid mt-2">Replace the placeholder with your Google Form iframe code or use the direct link below.</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <p className="text-sm text-gray-700 mb-3"><strong>Alternatively, open the form directly:</strong></p>
                    <a href={googleFormLink} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors">📝 Open Registration Form →</a>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-bold text-brownDark mb-2">🎁 Winners Get:</h4>
                    <ul className="text-sm text-brownMid space-y-1">
                      <li>✨ Cash Prize</li>
                      <li>📜 E-Certificate</li>
                      <li>🏆 Trophy/Medal</li>
                      <li>🎟️ Event Pass</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2">❓ Have Questions?</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>📧 Email us</li>
                      <li>💬 Contact organizers</li>
                      <li>📱 Check event details</li>
                      <li>👥 Join our community</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <button onClick={() => setShowRegistration(false)} className="w-full py-3 rounded-full bg-gray-300 text-gray-800 font-bold hover:bg-gray-400 transition-colors">Close Registration</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
