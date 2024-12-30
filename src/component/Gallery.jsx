import airport from '../images/airport.png';
import atal from '../images/atal.png';
import iit from '../images/iitbhilai.png';
import isro from '../images/isro.png';
import metro from '../images/metro.jpeg';
import port from '../images/port.jpeg';
import statue from '../images/statue.png';

const Gallery = () => {
  const companies = [
    { name: "Airport", logo: airport },
    { name: "Atal", logo: atal },
    { name: "IIT", logo: iit },
    { name: "ISRO", logo: isro },
    { name: "Metro", logo: metro },
    { name: "PORT", logo: port },
    { name: "Statue", logo: statue }
  ];

  return (
    <div className=" mb-10 pt-3 bg-blue-500 pb-5">
      <h2 className="text-2xl font-bold text-center font-proxima mb-3 text-white">
        Our Projects
      </h2>
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-scroll w-[200%]">
          {/* Duplicate the images array to create a seamless scrolling effect */}
          {[...companies, ...companies].map((company, index) => (
            <img
              key={index}
              src={company.logo}
              alt={company.name}
              className="h-[150px] w-auto object-contain rounded-lg hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
