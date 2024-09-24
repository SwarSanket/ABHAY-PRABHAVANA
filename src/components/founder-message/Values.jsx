import React from "react";
import ab from "../../assets/founder-msg/ABHY_SIR.jpeg";

const Values = () => {
  return (
    <div className="container px-6 mx-auto py-14 sm:container-sm md:container-md lg:container-lg xl:container-xl">
      <h1 className="mb-6 font-bold text-fipch-heading text-fipch-orange">
        FOUNDER'S MESSAGE
      </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex justify-center order-1 lg:justify-start lg:order-2">
          <img
            src={ab}
            alt="Founder"
            className="w-full rounded sm:w-4/5 lg:w-4/5"
          />
        </div>
        <div className="order-2 lg:col-span-2 lg:order-1">
          <ul className="space-y-4">
            <li className="flex items-start pb-3 space-x-5">
              <span className="text-fipch-orange">•</span>
              <p className="text-xl text-fipch-text text-fipch-grey">
              The <span className="font-bold">purpose of religion</span> and social values is to <span className="font-bold">enable individuals</span> 
              to find <span className="font-bold">inner peace, true happiness, confidence, contentment,</span> a positive <span className="font-bold">attitude</span>, and the ability to <span className="font-bold">collaborate with society</span>,
                thereby promoting inner peace and security.
              </p>
            </li>

            <li className="flex items-start pb-3 space-x-5">
              <span className="text-fipch-orange">•</span>
              <p className="text-xl text-fipch-text text-fipch-grey">
              For the renunciate or sadhu, Jain tradition shows a way to <span className="font-bold">progress towards enlightenment and liberation.</span>
              </p>
            </li>
            <li className="flex items-start pb-3 space-x-5">
              <span className="text-fipch-orange">•</span>
              <p className="text-xl text-fipch-text text-fipch-grey">
              For the householder, it emphatically encourages <span className="font-bold">prosperity and security for society</span> through individual productivity,
               connectivity, and scientific capability.

              </p>
            </li>
            <li className="flex items-start pb-3 space-x-5">
              <span className="text-fipch-orange">•</span>
              <p className="text-xl text-fipch-text text-fipch-grey">
              <span className="font-bold">Jain way of life</span> aims to enable an individual to feel secure and content,
               while cultivating awareness and compassion, leading to harmony with oneself and the world. 
              </p>
            </li>
            <li className="flex items-start pb-3 space-x-5">
              <span className="text-fipch-orange">•</span>
              <p className="text-xl text-fipch-text text-fipch-grey">
                Jainism is{" "}
                <span className="font-bold">not just non-violence</span>, nor is
                it simply limiting an individual's food habits and lifestyle.
              </p>
            </li>
            <li className="flex items-start pb-3 space-x-5">
              <span className="text-fipch-orange">•</span>
              <p className="text-xl text-fipch-text text-fipch-grey">
                A true Jain is defined not by birth, but fundamentally by
                adherence to values of Education, Enterprise and Ethics.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 text-sm text-gray-700 sm:container-sm md:container-md lg:container-lg xl:container-xl mx-automt-8">
        <p className="mx-4 my-4 text-xl text-fipch-text text-fipch-grey">
        Six thousand years ago, during the mature bronze age, <span className="font-bold">Rishabhdev</span> explained the basis for a <span className="font-bold">safe,
         productive, prosperous, enlightened and cohesive society.</span>  He became the first great spiritual guide or Tirthankar in the tradition.
        </p>
        <p className="mx-4 my-4 text-xl text-fipch-text text-fipch-grey">
        Three thousand years later, the last two of the 24 Tirthankaras, <span className="font-bold">Parshvanath and Mahavir, showed the path for enlightenment and liberation
         for an individual</span> through Ahimsa(non-violence),  Aparigraha (non-possessiveness), Anekantvad (open-mindedness), and Kshama (forgiveness).
        </p>
        <p className="mx-4 my-4 text-xl text-fipch-text text-fipch-grey">
        The Museum is built to showcase the <span className="font-bold">timeless relevance of Jainism</span> which lies in its <span className="font-bold">profound impact on the ethical and cultural values of India.</span>
         Known as the <span className="font-bold">path of knowledge</span>, it inspires <span className="font-bold">objective examination</span> to realize the values recommended.
         <span className="font-bold">Jainism promotes a creative, balanced, and compassionate individual, while emphasizing a productive and peaceful society.</span>”
        </p>
      </div>
    </div>
  );
};

export default Values;
