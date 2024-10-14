import React from 'react';
import "./Contactus.css"
import box from "../Images/Boxhand.png";

import { useEffect,useState, useRef } from 'react';
export default function Contactus() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setShowForm(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }} className='logoc'>Contact us</h1>
     
        <img className='imgc'
          src={box}
          alt="MRI_INDIA_CONTACT_US_IMAGE"
        />
        
       
       
     
      <div className="parac">
        <p className='pc'>
          Our mission is to reduce food waste and support our community. Your ideas and collaboration can make a real difference. Whether you want to volunteer or partner with us, we're here to listen.
          <br></br>
          <br></br>
          For organizations and companies, partnering with us can offer various benefits. By collaborating with our community-driven efforts, you can showcase your commitment to sustainability and social responsibility. Partnering with us provides a valuable opportunity to contribute to a meaningful cause while enhancing your corporate social responsibility initiatives.
          <br></br>
          <br></br>
          Join us in creating a more sustainable and compassionate world, one meal at a time. Together, we can make a substantial impact on food waste reduction and the well-being of our neighbors.
        </p>
      </div>

      
        <button className="btnc" onClick={() => setShowForm(true)}>Contact us</button>
      

        {showForm && (
        <form className="formc" ref={formRef}>
          <h2 className='logoc2'>Contact MRI</h2>
          <p>
            <input className="inputc" type="text" placeholder="Write your name here .." />
          </p>
          <p>
            <input className="inputc" type='email' placeholder="Drop your email we will contact you back.." />
          </p>
          <p>
            <input className="inputc" type="text" placeholder="How can we help you today.." />
          </p>
          <div className="btnc2" onClick={()=>{setShowForm(false)}}>
          <a href='#' >Send Message</a></div>
        </form>
      )}
    
    </div>
  );
}
