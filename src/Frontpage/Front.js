import React from 'react'
import plate from '../Images/plate01.png';
import '../Frontpage/Front.css';
import Bag from '../Images/Bag01.png';
import { useNavigate } from 'react-router-dom';
export default function DesignsLayover() {
  const navigate = useNavigate();
  const supportbutton = () => {
    navigate("/gethelp");
  };
  const donatebutton = () => {
    navigate("/donatelogin");
  };
  const joinusbutton = () => {
    navigate("/contact");
  }

  return (
    <div className='all'>
      <div className='images'>
        <img className='plate1' alt='Food plate' src={plate}></img>
        <img className='bag1' alt='Grocery Bag' src={Bag} ></img>
        <div className='disk'></div>
      </div>
      <div>
        <p className='logo1'>Meal Rescue India </p>
        <p className='logo2'>Meet India's new MRI not the one that scans bodies, but the one that feeds souls.<br />बचा हुआ खाना है? फिकर न करें!<b> 'मील रेस्क्यू इंडिया' </b>  की मदद से इसे किसी की जरूरत में दे</p>
        <p className='frontpara1'>
          Join us in our mission to eliminate food waste and create a sustainable future for all. Whether you're a restaurant, a catering service, or an individual with excess food, your contribution can make a significant difference in someone's life.</p>

        <div className={"frontpara1 btn"}>
          <button className="button-82-pushable" onClick={donatebutton}>
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">
              Donate Now !! 🥘
            </span>
          </button>
          <button style={{ marginLeft: '30px' }} className="button-82-pushable" onClick={supportbutton}>
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">
              Get Help !! 🛍️
            </span>
          </button>
        </div>
        <div className='secondpart'>
          <h2 className='logo3'>Our Mission </h2>
          <p className='missionpara'>
            We Believe a small change a create a big difference, Meal Rescue India is dedicated to alleviating hunger and reducing food waste in our communities . Our mission is to foster a culture of giving and sharing, ensuring that no edible food goes to waste. We believe in the power of community support and collaboration to create a sustainable and compassionate society. </p>
          <br></br>
          <p className='missionpara'>For companies and organizations looking to partner with us, we offer a collaborative platform to contribute to our mission and make a meaningful impact in the lives of the underprivileged. </p>
        </div>
        <div className='btn2'>
          <button className="button-82-pushable" onClick={joinusbutton}>
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">
              Join Us ~
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
