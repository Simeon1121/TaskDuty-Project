import React from 'react';
import womanLogo from '../assets/Component 1.png';
import '../Style/Hero.css';

const Hero = () => {
  return (
    <>
    {/* <section className='d-flex col-md-4'> */}
    <section className="row p-3 justify-content-center align-items-center shadow-lg">
    <div className='col-lg-6 p-5'>
    <h1> Manage your Task on</h1>
    <h2 className='taskduty'> Task Duty</h2>
    <p className='w-50 fs-5 '>  Lorem ipsum dolor Lorem ipsum dolor sit
     amet consectetur. sit re esse culpa, vero corporis. Explicabo, eveniet incidunt ut, ea debitis sit quia deleniti consectetur quis est nulla! Nam!
    </p>
    <button className="btn btn1 btn-primary btn-lg"> Go to my Task</button>
    </div>
   <div className='col-lg-3'>
<img src= {womanLogo} alt="woman - logo" className="img-fluid "  />
   </div>

    </section>
   
   
    
    </>
  )
}

export default Hero