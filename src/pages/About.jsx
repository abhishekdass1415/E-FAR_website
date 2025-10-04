import { useState } from "react";

export default function About() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const departments = [
    {
      name: "Mechanical",
      image: "/images/mechanical.jpg",
      description:
        "Responsible for the core mechanical systems including chassis, suspension, and drivetrain design, ensuring performance and durability.",
    },
    {
      name: "High Voltage",
      image: "/images/highvoltage.jpg",
      description:
        "Manages the high-voltage battery systems, power distribution, and safety protocols for the electric race car.",
    },
    {
      name: "System Integration",
      image: "/images/systemintegration.jpg",
      description:
        "Ensures all subsystems (mechanical, electrical, and software) integrate seamlessly for maximum performance and reliability.",
    },
    {
      name: "Aerodynamics",
      image: "/images/aero.jpg",
      description:
        "Designs and tests aerodynamic components such as wings and diffusers to improve downforce, stability, and efficiency.",
    },
    {
      name: "Data Acquisition",
      image: "/images/data.jpg",
      description:
        "Collects and analyzes real-time data from the car to enhance performance, optimize setups, and support decision-making.",
    },
    {
      name: "Thermals",
      image: "/images/thermals.jpg",
      description:
        "Manages thermal systems to keep the battery, motor, and other components at optimal temperatures during performance.",
    },
    {
      name: "Admin",
      image: "/images/admin.jpg",
      description:
        "Handles team management, finances, sponsorships, and overall coordination of operations.",
    },
    {
      name: "Social Media",
      image: "/images/social.jpg",
      description:
        "Manages outreach, branding, and digital presence, showcasing the team’s achievements and engaging the community.",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-orange to-brand-blue text-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            About E-Formula Ashwa Riders
          </h1>
          <p className="text-xl md:text-2xl font-semibold">
            Pioneering the Future of Electric Racing
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="bg-gradient-to-r from-brand-blue/20 to-brand-orange/20 shadow-lg rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-brand-blue/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed text-center">
                To design, build, and race electric formula cars that push the
                boundaries of sustainable automotive technology while fostering
                innovation, teamwork, and engineering excellence among students.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-r from-brand-orange/20 to-brand-blue/20 shadow-lg rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-brand-orange/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔮</span>
              </div>
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
                Our Vision
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed text-center">
                To become a leading Formula Student team that inspires the next
                generation of engineers and contributes to the global transition
                towards sustainable transportation through cutting-edge electric
                vehicle technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-brand-orange mb-4 drop-shadow-lg">
              Our Story
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              From humble beginnings to competitive excellence
            </p>
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed prose prose-lg mx-auto">
            <p>
              E-Formula Ashwa Riders was founded in 2022 by a group of passionate
              engineering students who shared a common dream: to build the future
              of electric racing. What started as a small team of 15 members has
              grown into a dynamic organization of over 50 dedicated individuals.
            </p>
            <p>
              Our journey began with a simple yet ambitious goal - to design and
              build an electric formula car that could compete with the best teams
              in the world. Through countless hours of design, testing, and
              iteration, we've created vehicles that not only perform on the track
              but also showcase the potential of sustainable racing technology.
            </p>
            <p>
              Today, we're proud to be one of the most innovative Formula Student
              teams, consistently pushing the boundaries of what's possible in
              electric vehicle design and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-brand-blue mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-700">
              Key milestones in our team's history
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l-4 border-brand-orange/60 pl-16 space-y-12">
            {[
              {
                year: "2022",
                title: "Team Founded",
                desc: "E-Formula Ashwa Riders was established with 15 founding members and a vision to revolutionize electric racing.",
              },
              {
                year: "2023",
                title: "First Competition",
                desc: 'Competed in Formula Student India 2023, winning the "Best Newcomer Award" and finishing in the top 10 overall.',
              },
              {
                year: "2024",
                title: "Breakthrough Year",
                desc: "Achieved 1st place in Design Event and 2nd place in Business Plan at Formula Student India 2024, establishing ourselves as a top-tier team.",
              },
              {
                year: "2025",
                title: "International Expansion",
                desc: "Planning to compete in international Formula Student competitions and expand our global presence in electric racing.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-6">
                {/* Year Circle */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-brand-orange to-brand-blue flex items-center justify-center shadow-lg text-white font-bold text-lg">
                  {item.year}
                </div>
                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-brand-blue">
            Our Departments
          </h2>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {departments.map((dept, index) => (
              <div
                key={dept.name}
                className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                {/* Image with overlay */}
                <div className="relative h-48">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-lg">
                    {dept.name}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div
                    className={`text-gray-700 text-sm leading-relaxed overflow-hidden transition-all duration-500 ${
                      expandedIndex === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p>{dept.description}</p>
                  </div>

                  {/* See More button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-4 text-brand-orange font-semibold hover:underline"
                  >
                    {expandedIndex === index ? "See Less" : "See More"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
