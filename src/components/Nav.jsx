 import React from 'react';
 import './Nav.css';

//import assets from 'assets'
const Nav =()=>{
    return (
        <nav className="navbar navbar-expand-lg  text-capitalize py-0">
        <div className="container">
          <a className="navbar-brand" href="/"><img className='w-75' src={require('../assets/logo.png')} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link redtext-red active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">explore foods</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn main-btn " href="tel:+201026037513">Contact Owner</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Nav;