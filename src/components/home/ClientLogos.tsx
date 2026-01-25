const clients = [
  { name: 'BBC', logo: 'BBC' },
  { name: 'Virgin', logo: 'VIRGIN' },
  { name: 'Hilton', logo: 'HILTON' },
  { name: 'Google', logo: 'GOOGLE' },
  { name: 'Meta', logo: 'META' },
  { name: 'Nike', logo: 'NIKE' },
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="section-container">
        <p className="text-center text-muted-foreground text-sm font-medium mb-8">
          TRUSTED BY LEADING BRANDS & EVENT PLANNERS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="text-2xl md:text-3xl font-heading font-bold text-muted-foreground/30 hover:text-accent transition-colors cursor-default"
            >
              {client.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
