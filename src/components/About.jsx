import React from "react";
//import assets from 'assets'
const About = () => {
  return (
    <section>
      <div className="about py-5">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6 ">
              <img
                className="w-100 rounded"
                src={require("../assets/1.png")}
                alt=""
              />
            </div>
            <div className="py-5 py-lg-0 col-12 col-lg-6 d-grid">
              <h2 className="col-10 col-lg-11">
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p className="col-10 col-lg-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <div>
                <a
                  className="py-2 col-12 col-lg-6 btn main-btn border-radius-none"
                  href="/"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
