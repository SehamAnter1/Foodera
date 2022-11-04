import React from 'react';
import './Counters.css';
//import assets from 'assets'


window.addEventListener("load", () => {
    let count = document.querySelector(".counter1");
    countDown(count, 1000);
  });
  window.addEventListener("load", () => {
    let count = document.querySelector(".counter2");
    countDown(count, 1000);
  });
  window.addEventListener("load", () => {
    let count = document.querySelector(".counter3");
    countDown(count, 1000);
  });
  window.addEventListener("load", () => {
    let count = document.querySelector(".counter4");
    countDown(count, 1000);
  });
  function countDown(counter, speed) {
    let target = counter.dataset.count;
    let counting = setInterval(() => {
        counter.textContent++;
        if (counter.textContent === target) {
            clearInterval(counting);
        }
    }, speed / target);
  }


const Counters =()=>{
   return (
    <section className='counters ' id='countNumber'>
        <div className="container">
           <div>
            <ul className='row px-0 py-3 text-white counterContainer' >
            <li className="my-3  col-12 col-sm-6 col-md-3 text-center text-uppercase" ><span className='fs-3 counter1' data-count="55"></span>  <span className='fs-3' >k+</span><h5> saving</h5></li>
            <li className="my-3  col-12 col-sm-6 col-md-3 text-center text-uppercase" ><span className='fs-3 counter2' data-count="114"></span>  <span className='fs-3' >k+</span><h5> photos</h5></li>
            <li className="my-3  col-12 col-sm-6 col-md-3 text-center text-uppercase" ><span className='fs-3 counter3' data-count="23"></span>  <span className='fs-3' >k+</span><h5> rockets</h5></li>
            <li className="my-3  col-12 col-sm-6 col-md-3 text-center text-uppercase" ><span className='fs-3 counter4' data-count="12"></span>  <span className='fs-3' >k+</span><h5> GLOBES</h5></li>
            </ul>
           </div> 
        </div>
    </section>
   );
}
export default Counters;