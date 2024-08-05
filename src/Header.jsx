import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ApLogo from "./assets/AP-Logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const onDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-20 px-5 py-2 bg-white shadow-lg">
        <nav className="flex justify-between">
          <div className="w-[130px] md:w-[250px] flex flex-col items-center">
            <Link to={'/'}>
              <img src={ApLogo} alt="ABHAY PRABHAVANA LOGO" />
            </Link>
            <span className="text-[10px] text-left md:text-base md:leading-5">
              Firodia Institute of Philosophy, Culture and History
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div
              className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] ${
                menuOpen ? "left-[0%]" : "left-[-100%]"
              } px-5 md:py-0 py-5 z-30`}
            >
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                <li className="text-fipch-grey font-bold relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#f15a22] to-[#fcb415] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <Link to={'/'}>HOM</Link>
                </li> 
                <li className="text-fipch-grey font-bold relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#f15a22] to-[#fcb415] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <a href="#">EXPERIENCES</a>
                </li>
                <li className="relative py-1 pr-3 font-bold cursor-pointer text-fipch-grey md:pr-0" onMouseEnter={onDropdownToggle} onMouseLeave={onDropdownToggle}>
                  <div className="flex items-center justify-between">
                    <Link to={'/About'}>ABOUT US</Link>
                    <FontAwesomeIcon icon={dropdownOpen ? faChevronUp : faChevronDown} className="ml-2" />
                  </div>
                  <ul
                    className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 transition-all duration-300 ${
                      dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link to={'/founder-message'}>Abhay Prabhavana</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link to={'/About'}>Amar Prerana Trust</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="px-5 py-1 font-bold text-white bg-fipch-orange"
              >
                Plan a Visit
              </button>
              <FontAwesomeIcon
                icon={menuOpen ? faTimes : faBars}
                onClick={onMenuToggle}
                className="text-[30px] cursor-pointer md:hidden"
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
