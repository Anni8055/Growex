import React from "react";

const HomePage = () => {
  return (
    <div className="relative min-h-screen font-sans">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1"></div>

      {/* Navbar */}
      <nav className="relative flex justify-between items-center p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg fixed top-0 w-full z-10 transition-all duration-300 hover:shadow-xl">
        <h1 className="text-3xl font-extrabold hover:text-gray-200 transition-all">Growex</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-gray-200 transition-all">Features</a>
          <a href="#testimonials" className="hover:text-gray-200 transition-all">Testimonials</a>
          <a href="#pricing" className="hover:text-gray-200 transition-all">Pricing</a>
          <button className="px-5 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all hover:scale-105">For Brands</button>
          <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all hover:scale-105">For Influencers</button>
          <button className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-all hover:scale-105">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-12 py-32 pt-40 z-2 text-white text-center">
        <div className="md:w-2/3">
          <h2 className="text-5xl font-extrabold leading-tight">Connect with Brands & Influencers Instantly!</h2>
          <p className="mt-4 text-lg">Join our AI-powered platform where brands & influencers collaborate seamlessly, manage payments securely, and grow together.</p>
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-all hover:scale-105">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-12 py-20 bg-white relative z-2">
        <h3 className="text-4xl font-bold text-center text-indigo-700">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {[
            { title: "AI-Powered Matching", desc: "Find the right influencers easily." },
            { title: "Secure Payments", desc: "We ensure safe transactions." },
            { title: "Real-Time Chat", desc: "Directly connect & negotiate deals." },
            { title: "Performance Tracking", desc: "Get campaign insights in one place." }
          ].map((feature, index) => (
            <div key={index} className="p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <h4 className="text-2xl font-semibold text-indigo-600">{feature.title}</h4>
              <p className="text-gray-700 mt-3">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
