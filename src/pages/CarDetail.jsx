import { useParams } from "react-router-dom";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";

export default function CarDetail() {
  const { id } = useParams();

  const cars = [
    { id: "efar-2024", name: "ZEUS", image: car1, description: "Our most advanced car yet, featuring cutting-edge aerodynamics, lightweight chassis, and a high-efficiency powertrain. This car represents the pinnacle of our engineering and design efforts, combining speed, efficiency, and innovation in a sleek package." },
    { id: "efar-2023", name: "NEXUX", image: car2, description: "This car introduced significant improvements in suspension and cooling systems. Designed for precision and reliability, NEXUX set new standards in performance while maintaining energy efficiency." },
    { id: "efar-2022a", name: "Tarkashya", image: car3, description: "Our first electric vehicle platform. A robust and reliable design that laid the foundation for future innovations. Tarkashya demonstrated the potential of electric racing and inspired future designs." },
    { id: "efar-2022b", name: "Tarkashya 2.0", image: car5, description: "Further refinements with better aero package and cooling upgrades. This iteration focused on stability and driver control, making it a more competitive and responsive car on track." },
    { id: "efar-2022c", name: "Tarkashya 3.0", image: car4, description: "Experimental upgrades for stability and thermal management. This car pushed the limits of design experimentation and served as a testbed for future innovations." },
  ];

  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-2xl text-gray-700">Car not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{car.name}</h1>
        </div>
      </section>

      {/* Car Image */}
      <section className="-mt-16">
        <div className="max-w-4xl mx-auto px-6 flex justify-center">
          <img 
            src={car.image} 
            alt={car.name} 
            className="rounded-xl shadow-lg w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-auto object-contain"
          />
        </div>
      </section>

      {/* Description */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
            {car.description}
          </p>
        </div>
      </section>
    </div>
  );
}
