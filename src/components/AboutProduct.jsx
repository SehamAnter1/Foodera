import React from "react";
//import assets from 'assets'
import './AboutProducts.css';

const AboutProducts = () => {
  
  return (
    <section>
      <div className="AboutProducts py-5 ">
        <div className="container">
          <div className="row ">

          <div className="py-5 py-lg-0 col-12 col-lg-6 d-grid">
              <h2 className="col-10 col-lg-11">
              We make everything by hand with the best possible ingredients.

              </h2>
              <p className="col-10 col-lg-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
                <ul className="px-2 ">
                    <li>Etiam sed dolor ac diam volutpat.</li>
                    <li>Erat volutpat aliquet imperdiet.</li>
                    <li>purus a odio finibus bibendum.</li>
                </ul>
                <div>
                <a
                  className="py-2 col-12 col-lg-3 btn main-btn border-radius-none"
                  href="/"
                >
                  learn more
                </a>
              </div>
            </div>

            <div className="col-12 col-lg-6 ">
              <img
                className="w-100 rounded"
                src={require("../assets/5.png")}
                alt=""
              />
            </div>
    
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutProducts;
