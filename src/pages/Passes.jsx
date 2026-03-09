import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import background from "../assets/background.jpeg";

import goldImg from "../assets/passes/gold.jpg";
import silverImg from "../assets/passes/silver.jpg";
import platinumImg from "../assets/passes/platinum.jpg";

const passes = [
  {
    name: "Silver Pass",
    price: "₹599",
    image: silverImg,
    titleColor: "text-gray-500",
    buttonColor: "bg-gray-500 hover:bg-gray-600",
    features: [
      "Entry to Selected Events",
      "General Seating",
      "Festival Kit"
    ]
  },
   {
    name: "Gold Pass",
    price: "₹999",
    image: goldImg,
    titleColor: "text-yellow-600",
    buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    features: [
      "All Cultural Events Access",
      "Priority Seating",
      "Food Coupons"
    ]
  },
  {
    name: "Platinum Pass",
    price: "₹1499",
    image: platinumImg,
    titleColor: "text-purple-600",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    features: [
      "All Events Access",
      "VIP Seating",
      "Exclusive Merchandise"
    ]
  }
];

const Passes = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <Navbar />

      <div className="pt-40 pb-24 px-6 max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-brownDark text-center mb-14">
          Book Your Pass
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {passes.map((pass, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >

              {/* IMAGE */}
              <div className="h-44 overflow-hidden">
                <img
                  src={pass.image}
                  alt={pass.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">

                <h2 className={`text-xl font-bold mb-1 ${pass.titleColor}`}>
                  {pass.name}
                </h2>

                <p className="text-2xl font-bold text-brownDark mb-4">
                  {pass.price}
                </p>

                <ul className="text-sm text-brownMid space-y-1 mb-6">
                  {pass.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                <button
                  className={`text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${pass.buttonColor}`}
                >
                  Buy Pass
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>

      <Footer />

    </div>
  );
};


export default Passes;
