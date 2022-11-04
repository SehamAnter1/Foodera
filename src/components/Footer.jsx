import React from "react";
//import assets from 'assets'
import './Footer.css';

const Footer = () => {
  
  return (
    <section>
      <div className="Footer pt-5 pb-3">
        <div className="container ">
          <div className="row  col-8 col-md-5 col-lg-4 m-auto text-center ">
            <ul className="">
                <li><a href="/">Register</a></li>
                <li><a href="/">Forum</a></li>
                <li><a href="/">Affiliate</a></li>
                <li><a href="/">FAQ</a></li>
            </ul>
            <ul className="">
                <li><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                <li><a href="/"><i class="fab fa-youtube"></i></a></li>
                <li><a href="/"><i class="fas fa-basketball-ball"></i></a></li>
                <li><a href="/"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="/"><i class="fab fa-instagram"></i></a></li>
            </ul>
            <ul className="d-flex">
                <li>© 2022. Foodera.Seham Anter. All rights reserved </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
