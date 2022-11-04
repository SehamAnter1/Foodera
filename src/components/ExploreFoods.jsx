import React from "react";
//import assets from 'assets'
import './ExploreFoods.css';

const ExploreFoods = () => {
  
  return (
    <section>
      <div className="ExploreFoods py-5 ">
        <div className="container py-md-3">
          <div className="row">
 <div>
          <div className="py-3 py-lg-0 col-10 col-lg-9 d-grid text-center mx-auto d-grid">
              <h2 className="">
              Explore Our Foods
              </h2>
              <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
          </div>
               <div className="cards row d-flex m-auto">
  
               <div className="card  p-3 col-12  col-md-6 col-lg-4" Style="">
  <img src={require("../assets/01.jpg")} className="card-img-top w-100 rounded" alt="card-img"/>
  <div className="card-body px-0">
    <h5 className="card-title ">Vegetable Sandwich

</h5>
    <p className="card-text">Time: 30 - 45 Minutes | Serves: 1</p>
    <span> $9.20 <span className="insteadof">$10.50</span></span>
    <hr />
    <a href="/" className="btn main-btn col-6 py-3 mt-3">Order Now</a>
  </div>
</div>
<div className="card  col-12  p-3  col-md-6 col-lg-4" Style="">
  <img src={require("../assets/02.jpg")} className="card-img-top w-100 rounded" alt="card-img"/>
  <div className="card-body px-0">
    <h5 className="card-title ">Vegetarian Burger
</h5>
    <p className="card-text">Time: 20 -30 Minutes | Serves: 1</p>
    <span> $11.20 <span className="insteadof">$15.50</span></span>
    <hr />
    <a href="/" className="btn main-btn col-6 py-3 mt-3">Order Now</a>
  </div>
</div>
<div className="card   col-12  p-3   col-md-6 col-lg-4" Style="">
  <img src={require("../assets/03.jpg")} className="card-img-top w-100 rounded" alt="card-img"/>
  <div className="card-body px-0">
    <h5 className="card-title ">Raspberry French Toast
</h5>
    <p className="card-text">Time: 10 - 15 Minutes | Serves: 1</p>
    <span> $20.20 <span className="insteadof">$25.50</span></span>
    <hr />
    <a href="/" className="btn main-btn col-6 py-3 mt-3">Order Now </a>
  </div>
</div>

               </div>         
            </div>    
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExploreFoods;
