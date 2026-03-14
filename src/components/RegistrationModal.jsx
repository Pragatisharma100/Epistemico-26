import BookOpen from "lucide-react/dist/esm/icons/book-open.js";
import React from "react";

export default function RegistrationModal({ open, onClose, selectedEvent, googleFormLink }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-[#a9572f] to-[#8b4524] text-white p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-1">{selectedEvent ? `Register for ${selectedEvent}` : "Register for Innovation Events"}</h2>
            <p className="text-sm opacity-90">Join the innovation revolution! 🚀</p>
          </div>
          <button onClick={onClose} className="text-2xl hover:scale-125 transition-transform">✕</button>
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

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-sm text-gray-700 mb-3"><strong>Open the registration form directly:</strong></p>
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
            <button onClick={onClose} className="w-full py-3 rounded-full bg-gray-300 text-gray-800 font-bold hover:bg-gray-400 transition-colors">Close Registration</button>
          </div>
        </div>
      </div>
    </div>
  );
}
