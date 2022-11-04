import React from "react";
//import assets from 'assets'
import './Subscribe.css';

const Subscribe = () => {
  
  return (
    <section>
      <div className="Subscribe py-5 ">
        <div className="container py-md-5">
          <div className="row">

          <div className="py-5 py-lg-0 col-10 col-lg-7 d-grid text-center mx-auto d-grid">
              <h2 className="">
              Hurry up! Subscribe our newsletter
and get 25% Off
              </h2>
              <p className="my-3">
              Limited time offer for this month. No credit card required.
</p>
   <form action="">
   <div className="row d-flex my-3 ">
   <div className="col-12 col-sm-7 my-1">
   <input type="text" className=" px-2 py-3 w-100" placeholder="Email Address here"/>
   </div>
   <div className="col-12 my-1 col-sm-5">
   <a  href="/" className="main-btn btn ms-auto w-100 py-3" >Subscribe</a>
   </div>
   </div>
   </form>
            </div>    
          </div>
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
