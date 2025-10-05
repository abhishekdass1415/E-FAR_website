import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";

// Vehicle data (reuse the same structure as in Home)
const vehicles = [
  { 
    id: "efar-2024",
    name: "ZEUS",
    year: 2024,
    image: car1,
    description: "Our first electric formula car, built for speed and reliability.",
    color: "255, 106, 11",
    specs: {
      topSpeed: "120 km/h",
      acceleration: "0-60 in 4.2s",
      weight: "280 kg",
      power: "80 kW",
      battery: "7.2 kWh",
      torque: "240 Nm"
    }
  },
  { 
    id: "efar-2023",
    name: "NEXUS",
    year: 2023,
    image: car2,
    description: "Enhanced aerodynamics and improved battery management.",
    color: "34, 165, 238",
    specs: {
      topSpeed: "115 km/h",
      acceleration: "0-60 in 4.5s",
      weight: "290 kg",
      power: "75 kW",
      battery: "6.8 kWh",
      torque: "220 Nm"
    }
  },
  { 
    id: "efar-2022a",
    name: "Tarkashya",
    year: 2022,
    image: car3,
    description: "Lightweight chassis with advanced suspension system.",
    color: "255, 106, 11",
    specs: {
      topSpeed: "110 km/h",
      acceleration: "0-60 in 5.0s",
      weight: "300 kg",
      power: "70 kW",
      battery: "6.4 kWh",
      torque: "200 Nm"
    }
  },
  { 
    id: "efar-2022b",
    name: "Tarkashya 2.0",
    year: 2022,
    image: car5,
    description: "Refined structure, enhanced endurance performance.",
    color: "34, 165, 238",
    specs: {
      topSpeed: "112 km/h",
      acceleration: "0-60 in 4.8s",
      weight: "295 kg",
      power: "72 kW",
      battery: "6.6 kWh",
      torque: "210 Nm"
    }
  },
  { 
    id: "efar-2022c",
    name: "Tarkashya 3.0",
    year: 2022,
    image: car4,
    description: "Latest innovation with cutting-edge technology.",
    color: "255, 106, 11",
    specs: {
      topSpeed: "118 km/h",
      acceleration: "0-60 in 4.6s",
      weight: "285 kg",
      power: "78 kW",
      battery: "7.0 kWh",
      torque: "230 Nm"
    }
  }
];

// Vehicle Card Component (same as Home carousel card style)
const VehicleCard = ({ car }) => (
  <div style={{
    background: 'black',
    borderRadius: '16px',
    overflow: 'hidden',
    border: `3px solid rgb(${car.color})`,
    boxShadow: `0 10px 30px rgba(${car.color}, 0.3)`,
    maxWidth: '400px',
    margin: '0 auto'
  }}>
    <img
      src={car.image}
      alt={car.name}
      style={{
        width: '100%',
        height: '250px',
        objectFit: 'cover'
      }}
    />
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: `rgb(${car.color})`, fontSize: '1.8rem', fontWeight: 'bold' }}>{car.name}</h2>
      <span style={{ color: 'white', fontSize: '1rem', fontWeight: '500' }}>{car.year}</span>
    </div>
  </div>
);

export default function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const selectedCar = vehicles.find(v => v.id === id);
    setCar(selectedCar);
  }, [id]);

  if (!car) return <div style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>Car not found</div>;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0b0f1d, #10121b, #14171f)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: isMobile ? '2rem 1rem' : '4rem 2rem'
    }}>
      {/* Back Link */}
      <Link to="/"
        style={{
          color: '#22a5ee',
          marginBottom: '2rem',
          display: 'inline-block',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
        ← Back to Home
      </Link>

      {/* Vehicle Card */}
      <VehicleCard car={car} />

      {/* Description */}
      <section style={{
        marginTop: '2rem',
        textAlign: 'center',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <p style={{
          fontSize: isMobile ? '1rem' : '1.25rem',
          lineHeight: '1.8',
          color: '#d1d5db'
        }}>
          {car.description}
        </p>
      </section>

      {/* Specifications */}
      <section style={{
        marginTop: '3rem',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <h3 style={{ textAlign: 'center', fontSize: isMobile ? '1.5rem' : '2rem', color: '#ff6a0b', marginBottom: '1.5rem' }}>
          Technical Specifications
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1rem'
        }}>
          {Object.entries(car.specs).map(([key, value]) => (
            <div key={key} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: `1px solid rgba(${car.color}, 0.2)`,
              borderRadius: '12px',
              padding: '15px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span style={{ color: 'rgba(255,255,255,0.7)', textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}:</span>
              <span style={{ color: `rgb(${car.color})`, fontWeight: 'bold' }}>{value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
