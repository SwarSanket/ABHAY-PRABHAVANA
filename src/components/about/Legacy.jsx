import React from 'react';
import IndiraFirodiaImg from '../../assets/about-img/Shri_Prasan_Firodia.jpg';
import SunandaMehtaImg from '../../assets/about-img/Smt_Sunanda_Mehta.jpg';
import ShribalaChordiaImg from '../../assets/about-img/Smt_Shribala_Chordia.jpg';
import PrasanFirodiaImg from '../../assets/about-img/Shri_Prasan_Firodia.jpg';
import HarshaJainImg from '../../assets/about-img/Shri_Prasan_Firodia.jpg';

const trustees = [
  { name: 'Smt Indira Firodia', role: 'Trustee : Amar Prerana Trust', img: '' },
  { name: 'Smt Sunanda Mehta', role: 'Trustee : Amar Prerana Trust', img: SunandaMehtaImg },
  { name: 'Smt Shribala Chordia', role: 'Trustee : Amar Prerana Trust', img: ShribalaChordiaImg },
  { name: 'Shri Prasan Firodia', role: 'Trustee : Amar Prerana Trust', img: PrasanFirodiaImg },
  { name: 'Smt Harsha Jain', role: 'Trustee : Amar Prerana Trust', img: '' },
];

const TrusteeCard = ({ name, role, img }) => (
  <div className="flex flex-col items-start">
    <div className="flex items-start justify-center w-56 h-full bg-gray-300">
      {img ? <img src={img} alt={name} className="object-cover w-full h-full" /> : <div className="bg-gray-300 w-60 h-60"></div>}
    </div>
    <h3 className="mt-4 text-lg font-semibold">{name}</h3>
    <p className="text-center">{role}</p>
  </div>
);

const Legacy = () => {
  return (
    <div className="container px-4 pb-20 mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {trustees.map((trustee, index) => (
          <TrusteeCard key={index} {...trustee} />
        ))}
      </div>
      <div className="mt-12">
        <p className="text-lg font-semibold text-justify">
          Today, the legacy of our founder, Shri Navalmal Firodia, lives on through the values of integrity,
          innovation, and social responsibility ingrained in our institution. We strive to carry forward his vision,
          creating a positive impact on society and encouraging the youth to appreciate and follow the values
          of our ancient Bharatiya culture.
        </p>
      </div>
    </div>
  );
};

export default Legacy;
