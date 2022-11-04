import React from "react";
//import assets from 'assets'
import "./Overlay.css";

const Overlay = () => {
  return (
    <section>
      <div className="Overlay py-5 ">
        <div className="container py-md-5">
          <div className="row">
            <div className="col-12 my-3 col-md-7">
              <h3>Baked fresh daily by bakers with passion.</h3>
            </div>
            <div className="col-12 my-3 col-md-5">
              <a className="main-btn btn py-3 w-50 w-md-75" href="/">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Overlay;
