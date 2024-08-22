import React from "react";
import img1 from "../../../assets/JourneyOptions/op1/1.jpg";
import img2 from "../../../assets/JourneyOptions/op1/4.jpg";
import img3 from "../../../assets/JourneyOptions/op1/3.jpg";
import img4 from "../../../assets/JourneyOptions/op1/5.jpg";
import img5 from "../../../assets/JourneyOptions/op1/6.jpg";
import img6 from "../../../assets/JourneyOptions/op1/2.jpg";

const Jrop2outdoor = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col md:flex-row">
        <div className="border-r-[1px] w-full  md:w-1/2">
          <h3 className="text-fipch-orange text-2xl font-bold pl-5">
            <span className="text-fipch-grey font-bold text-2xl">
              Rishabhdev
            </span>{" "}
            : Fountainhead of Civilizational Values
          </h3>
          <div className="flex flex-row p-4 m-2 ">
            <div className="w-9/12 ">
              <p>The magnificent 13.2 m (43 feet) installation of first Tirthankar Rishabhdev, in meditation pose, is placed at the end of the Festival Walk.</p>
            </div>
            <div className="w-1/4 p-2">
              <img src={img1} className="w-auto h-auto "/>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-fipch-orange text-2xl font-bold pl-5">
           Heritage Walk - Nature trail
          </h3>
          <div className="flex flex-row p-6">
            <div className="w-9/12">
              <p>Designed along the Indrayani River, the 320 m (1050 feet) long nature trail/walk showcasing beautifully recreated miniatures of ancient Jain monuments, displaying the glorious cultural and historical legacy of Jain heritage across India.</p>
            </div>
            <div className="w-1/4 p-4">
              <img src={img2} className="w-auto h-auto " />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row border-t-2">
        <div className="border-r-[1px] w-full md:w-1/2">
          <h3 className="text-fipch-orange text-2xl font-bold pl-5 pt-3">
           Plaza of Equanity
          </h3>
          <div className="flex flex-row p-4 m-2">
            <div className="w-9/12">
              <p>A 17 m (56.5 feet) tall temple installation with a magnificent, tall, Sarvatobhadra statue (all four sides facing) standing inside, surrounded by a garden with beautiful flowering trees and a reflection pool, conducive to a contemplative and peaceful environment.</p>
            </div>
            <div className="w-1/4 p-4">
              <img src={img3} className="w-auto h-auto " />
            </div>
          </div>
        </div>
        <div className=" border-fipch-grey w-full md:w-1/2">
          <h3 className="text-fipch-orange text-2xl font-bold pl-3 mt-3">
            Garden of the Revered
          </h3>
          <div className="flex flex-row p-6">
            <div className="w-9/12">
              <p>Walk around the lovely miniature versions of trees, dedicated to the 24 Tirthankars.</p>
            </div>
            <div className="w-1/4 p-4">
              <img src={img6}  className="w-auto h-auto "/>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row border-t-2 border-b-2">
        <div className="border-r-[1px]  w-full md:w-1/2">
          <h3 className="text-fipch-orange text-2xl font-bold pl-3 pt-3">
            Mandal Wall - Murals
          </h3>
          <div className="flex flex-row p-4 mt-2">
            <div className="w-9/12">
              <p>The modern Museum building stands on a large platform representing the traditional Mandala form. The Mandal plinth Walls display stunning artistic murals of magnificent Jain pilgrim centers.</p>
            </div>
            <div className="w-1/4 p-4">
              <img src={img4} />
            </div>
          </div>
        </div>
        <div className=" border-fipch-grey w-full md:w-1/2">
          <h3 className="text-fipch-orange text-2xl font-bold pl-4 pt-3">
          Manastambh
          </h3>
          <div className="flex flex-row p-6">
            <div className="w-9/12">
              <p>The 30.5 m (100 feet) tall Manastambh tower, inspired by traditional design, is our modern interpretation of stages of spiritual elevation. The seven intricately carved layers/tiers represent important aspects of Jainism and human life, which includes the householders, ascetics, Tirthankars and Siddhas.</p>
            </div>
            <div className="w-1/4 p-4">
              <img src={img5} />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Jrop2outdoor;
