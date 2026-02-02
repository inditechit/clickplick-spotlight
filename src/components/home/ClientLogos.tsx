const clients = [
  { id: 1, logo: '/clients/1.png' },
  { id: 2, logo: '/clients/2.jpg' },
  { id: 3, logo: '/clients/3.webp' },
  { id: 4, logo: '/clients/4.jpg' },
  { id: 5, logo: '/clients/5.jpg' },
  { id: 6, logo: '/clients/6.jpg' },
  { id: 7, logo: '/clients/7.png' },
  { id: 8, logo: '/clients/8.png' },
  { id: 9, logo: '/clients/9.png' },
];

export default function ClientLogos() {
  return (
    <>
      {/* CSS IN SAME FILE */}
      <style>{`
        @keyframes logo-slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-slider {
          display: flex;
          gap: 4rem;
          animation: logo-slide 25s linear infinite;
        }
      `}</style>

      <section className="py-16 bg-background border-y border-border overflow-hidden">
        <div className="section-container">
          <p className="text-center text-muted-foreground text-sm font-medium mb-10">
            TRUSTED BY LEADING BRANDS & EVENT PLANNERS
          </p>

          {/* Slider */}
          <div className="w-full overflow-hidden">
            <div className="logo-slider">
              {[...clients, ...clients].map((client, index) => (
                <img
                  key={index}
                  src={client.logo}
                  alt={`Client ${client.id}`}
                  className="h-12 md:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
