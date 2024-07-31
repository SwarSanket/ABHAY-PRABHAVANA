import React from "react";

const Objective = () => {
  return (
    <div className="pt-6 pb-12 bg-fipch-conch">
      <div className="container p-6 mx-auto ">
        <h2 className="mb-6 font-bold text-fipch-heading text-fipch-orange">
          OBJECTIVE OF THE MUSEUM
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 ">
              <span className="flex items-center text-fipch-orange">
                <span className="relative flex-shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-fipch-orange inline-block"></span>
                  {/* <span className="absolute top-0.5 left-1 transform -translate-y-0.5 w-px h-full bg-gray-300"></span> */}
                </span>
              </span>
            </div>
            <p className="mx-3 text-xl text-fipch-grey text-fipch-text">
              To disseminate the{" "}
              <span className="font-bold">
                principles expounded by the Tirthankars
              </span>
              , spanning from the first Tirthankar, Rishabhdev, to the last,
              Mahavir{" "}
              <span className="font-bold">
                comprising asi, masi, kasi, vanijya, shilp, vidya, ahimsa,
                aparigrah, anekantvad and kshama
              </span>
              , and
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 ">
              <span className="flex items-center text-fipch-orange">
                <span className="relative flex-shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-fipch-orange inline-block"></span>
                  {/* <span className="absolute top-0.5 left-1 transform -translate-y-0.5 w-px h-full bg-gray-300"></span> */}
                </span>
              </span>
            </div>
            <p className="mx-3 text-xl text-fipch-grey text-fipch-text">
              To critically examine all thoughts to understand and accept their
              validity.{" "}
              <span className="font-bold">‘Panna Samikhaye Dhammam’</span>{" "}
              encourages <span className="font-bold">not to blindly</span>{" "}
              accept any thought principle, belief,{" "}
              <span className="font-bold">without personal conviction</span>.
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <span className="flex items-center text-fipch-orange">
                <span className="relative flex-shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-fipch-orange inline-block"></span>
                  {/* <span className="absolute top-0.5 left-1 transform -translate-y-0.5 w-px h-full bg-gray-300"></span> */}
                </span>
              </span>
            </div>
            <p className="mx-3 text-xl text-fipch-grey text-fipch-text">
              Any teaching should only{" "}
              <span className="font-bold">
                be accepted through one’s own objective examination
              </span>{" "}
              of the value propounded.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Objective;
