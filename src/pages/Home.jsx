import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
import teamPhoto from "../assets/Team_photo1.jpg";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";
import heroVideo from "../assets/Web vid.mp4";

// Vehicles data
const vehicles = [
  { name: "EFA-01", image: car1, description: "Our first electric formula car, built for speed and reliability." },
  { name: "EFA-02", image: car2, description: "Enhanced aerodynamics and improved battery management." },
  { name: "EFA-03", image: car3, description: "Lightweight chassis with advanced suspension system." },
  { name: "EFA-05", image: car5, description: "Lightweight chassis with advanced suspension system." },
  { name: "EFA-04", image: car4, description: "Latest innovation with cutting-edge technology." }
];

// Achievements data
const achievements = [
  { title: "National Champions 2024", description: "Secured 1st place at SAE India Formula Student." },
  { title: "Best Innovation Award", description: "Recognized for our unique battery cooling system." },
  { title: "Fastest Lap Record", description: "Achieved the fastest lap at SVPCET Racing Track." }
];

// Sponsors data (logos in /public/sponsors/)
const sponsors = {
  Platinum: [{ name: "SponsorA", logo: "/sponsors/sponsorA.png", url: "https://sponsorA.com" }],
  Gold: [
    { name: "SponsorB", logo: "/sponsors/sponsorB.png", url: "https://sponsorB.com" },
    { name: "SponsorC", logo: "/sponsors/sponsorC.png", url: "https://sponsorC.com" }
  ],
  Silver: [{ name: "SponsorD", logo: "/sponsors/sponsorD.png", url: "https://sponsorD.com" }]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-white">
  {/* Navbar is rendered in App.jsx, not here */  }

      {/* Hero Section with Video */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Vehicle Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Black blur mask overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-10 pointer-events-none" />

        {/* Main heading */}
        <div className="relative z-20 text-center px-4 -mt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="text-brand-orange border-2 border-white px-4 py-2 rounded-lg">E-Formula</span> <span className="text-brand-white ml-4">Ashwariders</span>
          </h1>
          <p className="text-2xl md:text-3xl text-brand-blue font-bold">
            Adapt, Improvise, Overcome
          </p>
        </div>
      </section>

      {/* Current Vehicle & About Us */}
      <section className="container mx-auto px-4 py-12 bg-brand-dark text-brand-white">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-orange">Batch 2025</h2>
        <p className="text-lg text-center max-w-3xl mx-auto text-brand-white">
          We are a passionate team of engineers and innovators from SVPCET, dedicated to designing and building high-performance electric formula vehicles. Our journey is driven by a commitment to excellence, sustainability, and pushing the boundaries of automotive engineering.
        </p>
      </section>

      {/* Team Photo */}
      <section className="container mx-auto px-4 py-12 bg-brand-dark text-brand-white">
        <img
          src={teamPhoto}
          alt="Team Photo"
          className="block w-3/5 max-w-4xl mx-auto rounded-lg shadow-lg"
        />
        <div className="border-b border-gray-300 mt-8" />
      </section>

      {/* Vehicles Section */}
      <section className="container mx-auto px-4 py-12 bg-brand-dark text-brand-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-orange">Team Legacy</h2>
        <div className="space-y-10">
          {vehicles.map((car, idx) => (
            <div
              key={car.name}
              className={`flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center md:items-start gap-6 md:gap-10 justify-between`}
            >
              <Link to="/cars" className="w-full md:w-2/5 flex justify-center">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full md:w-full h-64 object-cover rounded-lg shadow-md hover:opacity-95 transition-opacity"
                  style={{ maxWidth: "40vw" }}
                />
              </Link>
              <div className="w-full md:w-3/5">
                <h3 className="text-2xl font-semibold mb-2 text-brand-blue">{car.name}</h3>
                <p className="text-brand-white leading-relaxed">{car.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-b border-brand-orange/30 mt-12" />
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-4 py-12 bg-brand-black text-brand-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-orange">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => (
            <div key={idx} className="rounded-xl border border-brand-orange/30 bg-brand-dark shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="text-brand-orange font-semibold tracking-wide mb-2">Since 2020</div>
              <h3 className="text-xl font-bold text-brand-white mb-1">{ach.title}</h3>
              <p className="text-brand-white">{ach.description}</p>
            </div>
          ))}
        </div>
        <div className="border-b border-brand-orange/30 mt-12" />
      </section>

      {/* Sponsors Section */}
      <section className="container mx-auto px-4 py-12 bg-brand-dark text-brand-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-blue">Sponsors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {Object.values(sponsors).flat().map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-white/90 border border-brand-orange/20 p-4 rounded-lg shadow-md text-center hover:shadow-lg hover:border-brand-orange transition-all"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 mx-auto mb-2 object-contain"
              />
              <p className="text-brand-black">{sponsor.name}</p>
            </a>
          ))}
        </div>
        <div className="border-b border-gray-300 mt-8" />
      </section>

      {/* Join Our Journey Section */}
      <section className="container mx-auto px-4 py-12 text-center bg-brand-dark text-brand-white">
        <h2 className="text-3xl font-bold mb-4 text-brand-orange">Join Our Journey</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6 text-brand-white">
          Be a part of our electrifying adventure! Whether you're a student, sponsor, or motorsport enthusiast, your support drives us forward. Connect with us to innovate, collaborate, and race towards a sustainable future.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-brand-blue text-brand-white px-6 py-3 rounded-lg hover:bg-brand-blue/80 transition-colors duration-200 shadow-lg"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
