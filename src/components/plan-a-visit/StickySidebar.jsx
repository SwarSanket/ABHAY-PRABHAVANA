import { useState, useEffect, useRef } from 'react';

const StickySidebar = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  // Scroll to the section and update active link
  const scrollToSection = (index) => {
    sectionsRef.current[index].scrollIntoView({ behavior: 'smooth' });
    setActiveSection(index);
  };

  // Set the active link based on scroll position
  const handleScroll = () => {
    const offsets = sectionsRef.current.map((section) => section.offsetTop);
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const activeIndex = offsets.findIndex((offset, index) => {
      return (
        scrollPosition >= offset &&
        (index === offsets.length - 1 || scrollPosition < offsets[index + 1])
      );
    });

    setActiveSection(activeIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    'Location/Getting there',
    'Nearest Airports',
    'Nearest Railway Stations',
    'Transport',
    'Local Stay',
    'Important Guidelines',
    'FAQ',
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <nav className="w-1/4 p-6 sticky top-0 h-screen bg-gray-100 border-r border-gray-200">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(index)}
                className={`block text-left w-full p-2 rounded-md transition-colors duration-300 ${
                  activeSection === index
                    ? 'bg-orange-500 text-white font-semibold'
                    : 'text-gray-700 hover:bg-orange-200 hover:text-orange-600'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="w-3/4 p-8 space-y-24">
        <section ref={(el) => (sectionsRef.current[0] = el)} className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Location/Getting there</h2>
          <p className="text-gray-700 text-lg">
            From Mumbai: 115 km, approx. 2 hrs by road<br />
            From Pune: 45 km, approx. 1 hr by road
          </p>
          <p className="text-orange-500 mt-6">
            <a href="#" className="underline text-lg">Click here</a> to view or download a map
          </p>
        </section>

        <section ref={(el) => (sectionsRef.current[1] = el)} className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Nearest Airports</h2>
          <p className="text-gray-700 text-lg">Pune | Mumbai</p>
        </section>

        <section ref={(el) => (sectionsRef.current[2] = el)} className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Nearest Railway Stations</h2>
          <ul className="text-gray-700 text-lg list-disc list-inside">
            <li>Pune</li>
            <li>Lonavala</li>
            <li>Karjat</li>
            <li>Dadar (Mumbai)</li>
            <li>Kanhe (local train station, close to Abhay Prabhavana site)</li>
          </ul>
        </section>

        <section ref={(el) => (sectionsRef.current[3] = el)} className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Transport</h2>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Individuals/Small Groups:</span> OLA/Uber available from the nearest airport or railway station.<br />
            <span className="font-semibold">Large Groups:</span> Vans or buses can be booked (See our transport list for more details).
          </p>
        </section>

        <section ref={(el) => (sectionsRef.current[4] = el)} className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Local Stay</h2>
          <p className="text-gray-700 text-lg">
            Information on nearby hotels is made available for your convenience.<br />
            Abhay Prabhavana is not affiliated with these hotels; please contact them directly for bookings.
          </p>
          <button className="mt-6 p-3 bg-orange-500 text-white text-lg rounded-md">List of Stays</button>
        </section>

        <section ref={(el) => (sectionsRef.current[5] = el)} className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Important Guidelines</h2>
          <ol className="text-gray-700 text-lg list-decimal list-inside space-y-2">
            <li>Please maintain silence in the galleries. Talking will disturb the experience of others.</li>
            <li>It is strictly prohibited to touch any display items, or operation systems.</li>
            <li>Any staining or damage caused to the display would result in the person concerned being fined/prosecuted.</li>
            <li>Please do not lean on the railings or display items.</li>
            <li>Do not litter.</li>
            <li>Mobile phones, cameras, electronic watches, voice recorders, and similar devices are strictly prohibited inside the galleries.</li>
            <li>Weapons of any kind, pointed or sharp objects are prohibited in the experience centre.</li>
            <li>Food items served in the Cafeteria, ‘Sattva - The Food Court’, and the outdoor ‘Chaupati’, must be consumed within the designated dining areas.</li>
            <li>Food, beverages, and drinking water brought from outside the campus are strictly prohibited on the premises.</li>
            <li>Please keep your electronic wristband securely on your wrist, until you leave the premises.</li>
            <li>Access to the Experience Centre’s facilities and services is exclusively through this wristband.</li>
            <li>In the event of loss or damage to the wristband, financial compensation will be charged.</li>
            <li>Please ensure the safety of your belongings. The Experience Centre or Management cannot be held responsible for any loss.</li>
            <li>Smoking, chewing tobacco, gutkha, or any similar substances/drugs are strictly prohibited on the premises.</li>
            <li>Individuals found in possession of such substances will be escorted off the premises and barred from future visits. Legal action will be taken against offenders.</li>
          </ol>
          <p className="text-gray-500 mt-6">
            <span className="font-semibold">Please note:</span><br />
            All galleries are continuously monitored via video surveillance for enhanced security.
          </p>
          <ul className="text-gray-500 text-lg list-disc list-inside mt-4 space-y-2">
            <li>Children ages 12-18 to be accompanied by an adult (TBD)</li>
            <li>Kindly co-operate with the security check.</li>
            <li>The Ushers are here to help you. Kindly follow their instructions for a smooth experience.</li>
            <li>They have the right to ask you to step aside, in case of any disturbance caused.</li>
            <li>You will have to stay with the group assigned to you, as per the booking made.</li>
          </ul>
        </section>

        <section ref={(el) => (sectionsRef.current[6] = el)} className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">FAQ</h2>
          <p className="text-gray-700 text-lg">Frequently Asked Questions will be added here...</p>
        </section>
      </div>
    </div>
  );
};

export default StickySidebar;
