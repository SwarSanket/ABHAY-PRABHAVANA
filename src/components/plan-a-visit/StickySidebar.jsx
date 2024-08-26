import { useState, useEffect, useRef } from "react";
import imag1 from "../../assets/Plain-a-visit/visit.jpg";

const StickySidebar = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionsRef = useRef([]);

  // Scroll to the section and update active link
  const scrollToSection = (index) => {
    sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });
    setActiveSection(index);
    setIsMenuOpen(false); // Close menu on selection (for mobile)
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    "Location/Getting there",
    "Nearest Airports",
    "Nearest Railway Stations",
    "Transport",
    "Local Stay",
    "Important Guidelines",
    "FAQ",
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-4 bg-fipch-grey-number text-fipch-grey font-bold"
      >
        {isMenuOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Sidebar */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block w-full md:w-1/4 p-6 sticky top-0 h-screen bg-gray-100 border-r border-gray-200`}
      >
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(index)}
                className={`block text-left w-full p-2 rounded-md transition-colors duration-300 ${
                  activeSection === index
                    ? "bg-orange-500 text-white font-semibold"
                    : "text-gray-700 hover:bg-orange-200 hover:text-orange-600"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-8 space-y-24">
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="scroll-mt-20"
        >
          <img src={imag1} />
          <h2 className="text-fipch-heading text-fipch-orange font-bold mb-6 mt-2">
            Location/Getting there
          </h2>
          <p className="text-fipch-grey text-base pb-3">
            From Mumbai: 115 km, approx. 2 hrs by road
            <br />
            From Pune: 45 km, approx. 1 hr by road
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5287878630065!2d74.73219977488719!3d19.084444582121822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb0f602463443%3A0xf83bf2ba52f49214!2sOneVoice%20Transmedia%20Pvt.%20Ltd.%20-%20Digital%20marketing%20company%20in%20Ahmednagar%20%7C%20Pune%20%7C%20Mumbai!5e0!3m2!1sen!2sin!4v1724488289942!5m2!1sen!2sin"
            width="860"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>

          <p className=" mt-6">
            <a href="#" className="text-fipch-orange  text-lg">
              Click here
            </a>{" "}
            to view or download a map
          </p>
        </section>

        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className="scroll-mt-20"
        >
          <div className="flex items-center space-x-4 mb-3">
            <h2 className="text-3xl font-bold text-fipch-orange">
              Nearest Airports : -{" "}
            </h2>
            <p className="text-gray-700 text-lg">Pune | Mumbai</p>
          </div>
          <div className="w-1/4 border border-fipch-grey"></div>
        </section>

        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="scroll-mt-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-fipch-orange">
            Nearest Railway Stations
          </h2>
          <ul className="text-gray-700 text-lg list-disc list-inside">
            <li>Pune</li>
            <li>Lonavala</li>
            <li>Karjat</li>
            <li>Dadar (Mumbai)</li>
            <li>Kanhe (local train station, close to Abhay Prabhavana site)</li>
          </ul>
          <div className="w-1/4 border border-fipch-grey mt-3"></div>
        </section>

        <section
          ref={(el) => (sectionsRef.current[3] = el)}
          className="scroll-mt-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-fipch-orange">
            Transport
          </h2>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Individuals/Small Groups:</span>{" "}
            OLA/Uber available from the nearest airport or railway station.
            <br />
            <span className="font-semibold">Large Groups:</span> Vans or buses
            can be booked (See our transport list for more details).
          </p>
          <div className="w-1/4 border border-fipch-grey mt-3"></div>
        </section>

        <section
          ref={(el) => (sectionsRef.current[4] = el)}
          className="scroll-mt-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-fipch-orange">
            Local Stay
          </h2>
          <p className="text-gray-700 text-lg">
            Information on nearby hotels is made available for your convenience.
            <br />
            Abhay Prabhavana is not affiliated with these hotels; please contact
            them directly for bookings.
          </p>
          <button className="mt-6 p-3 bg-fipch-grey-number text-black font-bold text-lg rounded-md">
            List of Stays
          </button>
        </section>

        <section
          ref={(el) => (sectionsRef.current[5] = el)}
          className="scroll-mt-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-fipch-orange">
            Important Guidelines
          </h2>
          <ol className="text-gray-700 text-lg list-decimal list-inside space-y-2">
            <li>
              Please maintain silence in the galleries. Talking will disturb the
              experience of others.
            </li>
            <li>
              It is strictly prohibited to touch any display items, or operation
              systems.
            </li>
            <li>
              Any staining or damage caused to the display would result in the
              person concerned being fined/prosecuted.
            </li>
            <li>Please do not lean on the railings or display items.</li>
            <li>Do not litter.</li>
            <li>
              Mobile phones, cameras, electronic watches, voice recorders, and
              similar devices are strictly prohibited inside the galleries.
            </li>
            <li>
              Weapons of any kind, pointed or sharp objects are prohibited in
              the experience centre.
            </li>
            <li>
              Food items served in the Cafeteria, ‘Sattva - The Food Court’, and
              the outdoor ‘Chaupati’, must be consumed within the designated
              dining areas.
            </li>
            <li>
              Food, beverages, and drinking water brought from outside the
              campus are strictly prohibited on the premises.
            </li>
            <li>
              Kindly adhere to all rules, regulations, and instructions, as
              outlined by the centre administration.
            </li>
            <li>
              Individuals found to be violating any rules, damaging property, or
              engaging in unruly behaviour, will be fined and reported to the
              appropriate authorities.
            </li>
          </ol>
        </section>

        <section
          ref={(el) => (sectionsRef.current[6] = el)}
          className="scroll-mt-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-fipch-orange">FAQ</h2>
          <p className="text-gray-700 text-lg">
            Frequently Asked Questions will be added here...
          </p>
        </section>
      </div>
    </div>
  );
};

export default StickySidebar;
