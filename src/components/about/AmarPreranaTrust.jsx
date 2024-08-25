import NavalmalFirodiaImg from "../../assets/about-img/Abt-Navalmal-Firodia.png";
import AptLogo from "../../assets/about-img/apt-logo.png";

function AmarPreranaTrust() {
  return (
    <div className="container px-4 py-20 mx-auto">
      <div className="">
        <h1 className="mb-4 font-bold text-fipch-heading text-fipch-orange">
          AMAR PRERANA TRUST
        </h1>
        <div className="flex flex-wrap gap-4">
          <img
            src={AptLogo}
            alt="APT LOGO"
            className="hidden h-auto w-36 md:block"
          />
          <img
            src={NavalmalFirodiaImg}
            alt="Shri Navalmal Firodia"
            className="hidden h-auto w-36 md:block"
          />
          <img
            src={AptLogo}
            alt="APT LOGO"
            className="w-36 sm:w-1/2 md:hidden"
          />
          <img
            src={NavalmalFirodiaImg}
            alt="Shri Navalmal Firodia"
            className="w-36 sm:w-1/2 md:hidden"
          />

          <p className="text-lg text-fipch-grey">
            Shri Navalmal Kundanmal Firodia (1910-1997), a{" "}
            <span className="font-bold">
              freedom fighter, pioneering industrialist
            </span>{" "}
            , and <span className="font-bold">passionate philanthropist</span>,
            established the Amar Prerana Trust in 1991.
          </p>
          <p className="text-lg text-fipch-grey">
            The Amar Prerana Trust is a unique charitable organization dedicated
            to promoting the ideals of moral and ethical living.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AmarPreranaTrust;
