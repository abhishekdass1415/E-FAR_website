import { TransitionLink } from "../components/TransitionProvider";

export default function Sponsors() {
  const sponsors = [
    { name: "E-Prism India", logo: "/sponsor1.jpg", url: "https://eiprismindia.in/", category: "Technology Partner" },
    { name: "The Bombay Tools", logo: "/sponsor2.jpg", url: "https://thebombaytools.com/", category: "Tooling Partner" },
    { name: "Maha Bearings", logo: "/sponsor3.jpg", url: "https://www.mahabearings.com/", category: "Engineering Partner" },
    { name: "Carbonext", logo: "/sponsor4.jpg", url: "https://www.carbonext.net/", category: "Materials Partner" },
    { name: "PCB Power", logo: "/sponsor5.jpg", url: "https://www.pcbpower.com/", category: "Electronics Partner" },
    { name: "Vashii SL", logo: "/sponsor6.jpg", url: "https://corp.vashiisl.com/", category: "Software Partner" },
    { name: "Asap Hardware", logo: "/sponsor7.jpg", url: "https://www.asaphardwaresolutions.com/", category: "Hardware Partner" },
    { name: "Bender APAC", logo: "/sponsor8.jpg", url: "https://www.bender-apac.com/products/", category: "Safety Partner" },
  ];

  const SponsorCard = ({ sponsor, index }) => (
    <div 
      className="group relative rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl"
      style={{
        borderRadius: '24px',
        transition: 'all 0.3s ease',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
      }}
    >
      <a
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
        className="block p-8 text-center relative"
        style={{
          backgroundColor: 'transparent', // No background for main container
          padding: '32px',
        }}
      >
        {/* Logo container with tight border around edges */}
        <div className="mb-4">
          <div 
            className="mx-auto flex items-center justify-center rounded-2xl"
            style={{
              backgroundColor: '#FFFFFF', // White background for all logos
              border: '1px solid #E5E7EB', // Light grey border around logo
              borderRadius: '16px',
              padding: '8px', // Minimal padding - just enough for border
              display: 'inline-block', // Fit content size
            }}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              style={{
                width: '120px',
                height: '120px',
                maxWidth: '120px',
                maxHeight: '120px',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>

        {/* Sponsor name */}
        <h3 
          className="text-lg font-bold mb-2 group-hover:opacity-80 transition-opacity duration-300"
          style={{ 
            color: '#FFFFFF' // White text for dark background
          }}
        >
          {sponsor.name}
        </h3>

        {/* Visit website indicator */}
        <div 
          className="flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          style={{ 
            color: '#FFFFFF' // White for dark background
          }}
        >
          <span className="text-sm font-medium">Visit Website</span>
          <svg 
            className="ml-1 group-hover:translate-x-1 transition-transform duration-300 sponsor-visit-icon" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{ width: '12px', height: '12px' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>
    </div>
  );

  return (
    <div 
      className="min-h-screen"
      style={{ 
        backgroundColor: '#0B0B0B', 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0B0B0B 0%, #1A1A1A 50%, #0B0B0B 100%)'
      }}
    >
      {/* Hero Section */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{ 
          padding: '120px 0',
          background: 'linear-gradient(135deg, #0B0B0B 0%, #1A1A1A 100%)'
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4991B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ 
              color: '#D4991B',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 'bold'
            }}
          >
            Our Esteemed
            <span 
              className="block text-brand-white"
              style={{ color: '#FFFFFF' }}
            >
              Sponsors
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: 'clamp(1.125rem, 3vw, 1.5rem)'
            }}
          >
            We proudly thank the incredible sponsors who fuel our innovation and performance. 
            Their support enables us to push the boundaries of electric racing technology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div 
                className="text-4xl font-bold text-brand-orange mb-2"
                style={{ color: '#D4991B', fontSize: '2.5rem' }}
              >
                8+
              </div>
              <div 
                className="text-brand-white/80"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Active Partners
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-4xl font-bold text-brand-blue mb-2"
                style={{ color: '#00A3E0', fontSize: '2.5rem' }}
              >
                100%
              </div>
              <div 
                className="text-brand-white/80"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Support Coverage
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-4xl font-bold text-brand-orange mb-2"
                style={{ color: '#D4991B', fontSize: '2.5rem' }}
              >
                24/7
              </div>
              <div 
                className="text-brand-white/80"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Partnership Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section 
        className="py-20"
        style={{ 
          padding: '80px 0',
          background: 'linear-gradient(180deg, #1A1A1A 0%, #0B0B0B 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Our Valued Partners
            </h2>
            <p 
              className="text-lg"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Click on any sponsor to visit their website
            </p>
          </div>

          <div 
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            style={{ 
              display: 'grid',
              gap: '32px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
            }}
          >
            {sponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20"
        style={{ 
          padding: '80px 0',
          background: 'linear-gradient(135deg, #1A1A1A 0%, #0B0B0B 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div 
            className="bg-brand-dark border border-brand-orange/30 rounded-2xl p-12"
            style={{
              backgroundColor: '#1A1A1A',
              border: '1px solid rgba(212, 153, 27, 0.3)',
              borderRadius: '16px',
              padding: '48px'
            }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: '#FFFFFF' }}
            >
              Become a Sponsor
            </h2>
            
            <p 
              className="text-lg mb-8 leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
            >
              Join us in shaping the future of sustainable motorsports. Your support helps us innovate, 
              compete, and inspire the next generation of engineers and racing enthusiasts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TransitionLink
                to="/contact"
                className="inline-flex items-center justify-center bg-brand-orange text-brand-white font-bold py-4 px-8 rounded-lg hover:bg-brand-orange/80 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: '#D4991B',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
        >
          Contact Us
                <svg 
                  className="ml-2 button-icon" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ width: '16px', height: '16px' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </TransitionLink>
              
              <a
                href="mailto:sponsors@efar.com"
                className="inline-flex items-center justify-center border-2 border-brand-blue text-brand-blue font-bold py-4 px-8 rounded-lg hover:bg-brand-blue hover:text-brand-white transition-all duration-300"
                style={{
                  border: '2px solid #00A3E0',
                  color: '#00A3E0',
                  fontWeight: 'bold',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                Email Us
                <svg 
                  className="ml-2 button-icon" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ width: '16px', height: '16px' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
