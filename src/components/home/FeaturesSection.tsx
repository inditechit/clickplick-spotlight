import { ArrowRight } from 'lucide-react';

const services = [
  { name: 'PHOTOBOOTH ATTENDANT', img: '/icon/1.png' },
  { name: 'INSTANT PRINTS', img: '/icon/2.png' },
  { name: 'GUEST BOOK PHOTO ALBUM', img: '/icon/3.png' },
  { name: 'FUN PROPS', img: '/icon/4.png' },
  { name: 'PERSONALIZED TEXT AND LOGO', img: '/icon/5.png' },
  { name: 'INSURANCE', img: '/icon/6.png' }, // Is par special style aayega
  { name: 'Filters & Photo Effects', img: '/icon/7.webp' },
  { name: 'Green Screen', img: '/icon/8.webp' },
  { name: 'Choice Of Photo Layout', img: '/icon/9.webp' },
  { name: 'GIF Enabled', img: '/icon/10.webp' },
  { name: 'Branded Prints', img: '/icon/11.webp' },
  { name: 'Email Enabled', img: '/icon/12.webp' },
  { name: 'USB With Digital Copies', img: '/icon/13.webp' },
  { name: 'Social Media Uploads', img: '/icon/14.webp' },
  { name: 'Online Gallery', img: '/icon/15.webp' },
  { name: 'DSLR Camera', img: '/icon/16.webp' },
  { name: 'Delivery & Set Up', img: '/icon/17.webp' },
  { name: 'Price Match Guarantee', img: '/icon/18.webp' },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="section-container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-10">
          {services.map((service, index) => {
            // Check if this is the Insurance item
            const isInsurance = service.name === 'INSURANCE';

            return (
              <div 
                key={index} 
                className="group flex flex-col items-center text-center transition-all duration-300"
              >
                {/* Icon Container */}
                <div 
                  className=" flex items-center justify-center mb-3 transition-transform duration-500 group-hover:scale-110"
                  style={isInsurance ? { 
                    background: '#27aae1', 
                    borderRadius: '47px' 
                  } : {}}
                >
                  <img 
                    src={service.img} 
                    alt={service.name}
                    className={`w-14 h-14 md:w-14 md:h-14 object-contain ${isInsurance ? 'brightness-0 invert' : ''}`}
                  />
                </div>
                
                <h3 className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-tight px-1 max-w-[110px]">
                  {service.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}