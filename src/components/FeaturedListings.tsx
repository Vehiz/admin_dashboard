import MetricItem from '../assets/Metric item.png';
import img from '../assets/img.png';
import img2 from '../assets/img (1).png';

const FeaturedListings = () => {
  const listings = [
    {
      image: MetricItem,
      badge: 'MOST CLICKED',
      title: 'Urban Prime Plaza Premiere',
      activeDot: 1,
      dots: 3,
    },
    {
      image: img,
      badge: 'MOST WATCHLISTED',
      title: 'Urban Prime Plaza Premiere',
      activeDot: 2,
      dots: 3,
    },
    {
      image: img2,
      badge: 'HOTTEST LISTING',
      title: 'Urban Prime Plaza Premiere',
      activeDot: 3,
      dots: 3,
      // showChat: true,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 pb-6">
      {listings.map((listing, index) => (
        <div key={index} className="relative rounded-2xl overflow-hidden min-h-70 bg-gray-200">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-full object-cover"
          />

          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/25 to-transparent" />

          {/* Text overlay */}
          <div className="absolute left-6 bottom-6 text-white space-y-2">
            <div className="text-xs font-semibold tracking-wide uppercase opacity-90">{listing.badge}</div>
            <div className="text-lg font-semibold leading-tight">{listing.title}</div>
          </div>

          {/* Progression dots */}
          <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2">
            {Array.from({ length: listing.dots }).map((_, dotIndex) => {
              const active = dotIndex + 1 === listing.activeDot;
              return (
                <span
                  key={dotIndex}
                  className={`h-2 rounded-full transition-all ${
                    active ? 'w-3 bg-white' : 'w-2 bg-white/60'
                  }`}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedListings;
