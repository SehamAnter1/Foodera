import React from 'react';
import './Header.css';
import './Nav.css';
//import assets from 'assets'
const Header =()=>{
   return (
    <header>
        <div className="header py-lg-5">
        <div className="container py-lg-5">
            <div className="col-lg-6 mt-5"><h2 className='col-6 col-lg-8'>Good food choices are good investments</h2></div>
            <div className="col-lg-6"><p className='col-6 col-lg-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
            <div className="btns d-block d-lg-flex  my-5 col-12 col-sm-6 col-lg-10">
            <a className="nav-link my-2 col-12 col-lg-6  btn main-btn border-radius-none px-5" href="/">Order Now</a>
            <a className="nav-link my-2 col-12 col-lg-6  btn main-btn px-5" href="/">Learn More</a>  
            </div>
        </div>
        </div>
        </div>
    </header>
   );
}
export default Header;