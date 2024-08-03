import React from "react";
import { Link } from "react-router-dom";



function Welcome() {
    return (
      <div className="flex items-center justify-center px-4 py-20 bg-white sm:px-3 lg:px-8">
        <section className="max-w-screen-lg mx-auto text-center">
          <h4 className="text-lg md:text-xl">WELCOME TO</h4>
          <h2 className="text-3xl font-bold text-fipch-orange md:text-3xl lg:text-4xl">
            ABHAY PRABHAVANA
          </h2>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center w-full p-4 lg:w-4/5">
              <article className="text-base tracking-normal text-pretty sm:text-lg lg:text-xl">
                <p>Abhay Prabhavana is dedicated to enhancing the understanding of
                Shraman and Jain core values, raising awareness of their antiquity,
                present-day relevance, and crucial impact on the Indian value system.</p>
              </article>
              <button className="px-8 py-2 mt-4 text-white transition-transform duration-300 ease-in-out transform bg-fipch-orange hover:bg-orange-700 hover:scale-105">
              <Link to="/founder-message">Know More</ Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  export default Welcome;