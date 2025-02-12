import Navbar from "@components/Navbar";
import MapWrapper from "@components/MapWrapper";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="about" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
        <h1 className="text-5xl font-bold text-blue-700">Find Your Perfect Place to Live</h1>
        <p className="text-lg text-gray-700 max-w-2xl mt-4">
          Search for places based on cost of living, safety, education, and more. Use our interactive map to find the best fit for you.
        </p>
      </section>

      {/* Map Section */}
      <section id="map" className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Cities on the Map</h2>
        <div className="mt-6 w-full max-w-5xl">
          <MapWrapper />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-lg text-gray-600 mt-2">Have questions? Reach out to us!</p>
        <a href="#" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Contact Us
        </a>
      </section>
    </div>
  );
}
