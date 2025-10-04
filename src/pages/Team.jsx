import Image from "../components/Image";
import { TransitionLink } from "../components/TransitionProvider";

export default function Team() {
  const teamMembers = {
    leadership: [
      { name: "Alex Johnson", role: "Team Captain", department: "Leadership", linkedin: "#", github: "#" },
      { name: "Sarah Chen", role: "Technical Director", department: "Leadership", linkedin: "#", github: "#" },
      { name: "Michael Rodriguez", role: "Business Manager", department: "Leadership", linkedin: "#", github: "#" }
    ],
    aerodynamics: [
      { name: "Emma Wilson", role: "Aerodynamics Lead", department: "Aerodynamics", linkedin: "#", github: "#" },
      { name: "David Kim", role: "CFD Engineer", department: "Aerodynamics", linkedin: "#", github: "#" },
      { name: "Lisa Zhang", role: "Wind Tunnel Specialist", department: "Aerodynamics", linkedin: "#", github: "#" }
    ],
    powertrain: [
      { name: "James Thompson", role: "Powertrain Lead", department: "Powertrain", linkedin: "#", github: "#" },
      { name: "Maria Garcia", role: "Battery Engineer", department: "Powertrain", linkedin: "#", github: "#" },
      { name: "Ahmed Hassan", role: "Motor Controller", department: "Powertrain", linkedin: "#", github: "#" }
    ],
    chassis: [
      { name: "Sophie Brown", role: "Chassis Lead", department: "Chassis", linkedin: "#", github: "#" },
      { name: "Ryan O'Connor", role: "Suspension Engineer", department: "Chassis", linkedin: "#", github: "#" },
      { name: "Priya Patel", role: "Structural Engineer", department: "Chassis", linkedin: "#", github: "#" }
    ],
    business: [
      { name: "Kevin Lee", role: "Business Lead", department: "Business", linkedin: "#", github: "#" },
      { name: "Anna Kowalski", role: "Marketing Manager", department: "Business", linkedin: "#", github: "#" },
      { name: "Carlos Mendez", role: "Sponsorship Coordinator", department: "Business", linkedin: "#", github: "#" }
    ]
  };

  const MemberCard = ({ member }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
      <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 bg-gray-100">
        <Image
          src="/logo.jpg"
          alt={member.name}
          width={112}
          height={112}
          className="h-28 w-28 object-cover"
          sources={[]}
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-blue-600 font-medium mb-2">{member.role}</p>
      <p className="text-gray-600 text-sm mb-4">{member.department}</p>
      <div className="flex justify-center space-x-3">
        <a href={member.linkedin} className="text-blue-600 hover:text-blue-700">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
          </svg>
        </a>
        <a href={member.github} className="text-gray-600 hover:text-gray-700">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-brand-orange">Meet Our Team</h1>
          <p className="text-xl md:text-2xl text-brand-blue/90">
            The passionate individuals behind E-Formula Ashwa Riders
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-blue mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-blue mb-2">5</div>
              <div className="text-gray-600">Departments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-blue mb-2">3</div>
              <div className="text-gray-600">Years Active</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-blue mb-2">100%</div>
              <div className="text-gray-600">Dedication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-brand-black text-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-orange mb-4">Leadership Team</h2>
            <p className="text-xl text-brand-white/80">The visionaries leading our mission</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.leadership.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Aerodynamics Team */}
      <section className="py-16 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Aerodynamics Department</h2>
            <p className="text-xl text-gray-700">Optimizing airflow for maximum performance</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.aerodynamics.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Powertrain Team */}
      <section className="py-16 bg-brand-black text-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-orange mb-4">Powertrain Department</h2>
            <p className="text-xl text-brand-white/80">Powering the future with electric innovation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.powertrain.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Chassis Team */}
      <section className="py-16 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Chassis Department</h2>
            <p className="text-xl text-gray-700">Building the foundation of performance</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.chassis.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Team */}
      <section className="py-16 bg-brand-black text-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-orange mb-4">Business Department</h2>
            <p className="text-xl text-brand-white/80">Driving growth and partnerships</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.business.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-brand-blue text-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-xl mb-8 text-white/90">
            We're always looking for passionate individuals to join our mission
          </p>
          <TransitionLink 
            to="/contact" 
            className="bg-brand-white text-brand-blue hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Get in Touch
          </TransitionLink>
        </div>
      </section>
    </div>
  );
}
  