import { TransitionLink } from "../components/TransitionProvider";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";

// Force update in development
if (import.meta.env.DEV) {
  console.log('🚗 Cars page loaded - Formula Bharat theme active');
}

export default function Cars() {
  const cars = [
    { id: "efar-2024", name: "ZEUS", year: 2024, image: car1, description: "Our most advanced car yet, featuring cutting-edge aerodynamics, lightweight chassis, and a high-efficiency powertrain." },
    { id: "efar-2023", name: "NEXUX", year: 2023, image: car2, description: "This car introduced significant improvements in suspension and cooling systems." },
    { id: "efar-2022a", name: "Tarkashya", year: 2022, image: car3, description: "Our first electric vehicle platform. A robust and reliable design that laid the foundation for future innovations." },
    { id: "efar-2022b", name: "Tarkashya 2.0", year: 2022, image: car5, description: "Further refinements with better aero package and cooling upgrades." },
    { id: "efar-2022c", name: "Tarkashya 3.0", year: 2022, image: car4, description: "Experimental upgrades for stability and thermal management." },
  ];

  const Card = ({ car }) => (
    <div 
      className="flex flex-col bg-brand-dark border border-brand-orange/20 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
      style={{
        backgroundColor: '#1A1A1A',
        border: '1px solid rgba(212, 153, 27, 0.2)',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Image with enhanced styling */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4 bg-brand-orange text-brand-white px-3 py-1 rounded-full text-sm font-bold">
          {car.year}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 
            className="text-2xl font-bold text-brand-white"
            style={{ color: '#FFFFFF' }}
          >
            {car.name}
          </h3>
        </div>

        <p 
          className="text-brand-white/80 leading-relaxed mb-6 flex-1 text-base"
          style={{ color: 'rgba(255, 255, 255, 0.8)' }}
        >
          {car.description}
        </p>

        {/* Enhanced View More Link */}
        <TransitionLink
          to={`/cars/${car.id}`}
          className="inline-flex items-center justify-center bg-brand-orange text-brand-white font-bold py-3 px-6 rounded-lg hover:bg-brand-orange/80 transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: '#D4991B',
            color: '#FFFFFF',
            fontWeight: 'bold',
            padding: '12px 24px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
          }}
        >
          View Details
          <svg
            className="ml-2 button-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ width: '16px', height: '16px' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </TransitionLink>
      </div>
    </div>
  );

  return (
    <div 
      className="min-h-screen"
      style={{ backgroundColor: '#0B0B0B', minHeight: '100vh' }}
    >
      {/* Hero Section */}
      <section 
        className="py-20"
        style={{ 
          backgroundColor: '#0B0B0B', 
          padding: '80px 0',
          background: 'linear-gradient(135deg, #0B0B0B 0%, #1A1A1A 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ 
              color: '#D4991B',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 'bold',
              marginBottom: '24px'
            }}
          >
            Our Formula Cars
          </h1>
          <p 
            className="text-xl md:text-2xl"
            style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: 'clamp(1.125rem, 3vw, 1.5rem)'
            }}
          >
            Explore our electric formula cars and their specifications.
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section 
        className="py-20"
        style={{ 
          backgroundColor: '#1A1A1A', 
          padding: '80px 0',
          background: 'linear-gradient(180deg, #1A1A1A 0%, #0B0B0B 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div 
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            style={{ 
              display: 'grid',
              gap: '40px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
            }}
          >
            {cars.map((car) => (
              <Card key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}