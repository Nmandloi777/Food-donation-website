import React, { useState } from 'react';
import './Donation.css'
const Donation = () => {

  const [formState, setFormState] = useState({
   
    location: 'indore-centre-1',
    food: '',
    expiry: '',
    quantity: '',
    manufacturingDate: '',
    drop: false,
    radio: '',
  });



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: type === 'checkbox' ? checked : value,
    }));

  };
   

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://meal-rescue-india-default-rtdb.firebaseio.com/Fooddata.json', {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Data submitted successfully');
        setFormState({
          
          location: 'indore-centre-1',
          food: '', 
          expiry: '',
          quantity: '',
          manufacturingDate: '',
          drop: false,
          radio: '',
        });
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data', error);
    }

  };
  

  return (
    <div className='shifter'>

  
    <form className='formD' onSubmit={handleSubmit}>
      <p className='logo1 ab'>Food Donation Form</p>
      <br />
      <div className="div1">
        <br />
        <label htmlFor="location">Select Location: </label>
        <select
        className='select1'
          id="location"
          name="location"
          value={formState.location}
          onChange={handleChange}
          required
        >
          <option value="indore-centre-1">indore-centre-1</option>
          <option value="indore-centre-2">indore-centre-2</option>
          <option value="indore-centre-3">indore-centre-3</option>
          <option value="indore-centre-3">indore-centre-4</option>
        </select>
        
      </div>
      
      <div className="div1">
        <br />
        <label htmlFor="food">Food / Grocery Type : </label>
        <input
          type="text"
          id="food"
          name="food"
          required
          value={formState.food}
          onChange={handleChange}
          className="inp"
        />
    
      </div>
      
          
      <div className="div1">
        <label htmlFor="manufacturingDate">Date of Manufacturing : </label>
        <input
          type="date"
          required
          id="manufacturingDate"
          name="manufacturingDate"
          value={formState.manufacturingDate}
          onChange={handleChange}
          className="inp"
        />
     
      </div>

      <div className="div1">
        <label htmlFor="expiry">Date of Expiry : </label>
        <input
          type="date"
          id="expiry"
          required
          name="expiry"
          value={formState.expiry}
          onChange={handleChange}
          className="inp"
        />
      
      </div>
     
      <div className="div1">
        <label htmlFor="quantity">Quantity : </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          required
          value={formState.quantity}
          onChange={handleChange}
          className="inp"
        />
   
      </div>
  
     
      <div className="div1">
        <label htmlFor="drop">I agree to the terms and will be responsible for delivering the food at {formState.location}: </label>
        <input style={{ transform:"scale(2)", marginLeft:"10px"}}
          type="checkbox"
          id="drop"
          name="drop"
          required
          checked={formState.drop}
          onChange={handleChange}
        />
        
     
      </div>
      <div className="div1">
        <label>Type - </label>
        <input
          type="radio"
          id="hot"
          name="radio"
          value="Hot"
          required
          checked={formState.radio === 'Hot'}
          onChange={handleChange}
        />
         Hot 
         <input
          type="radio"
          id="cold"
          name="radio"
          value="Cold"
          checked={formState.radio === 'Cold'}
          onChange={handleChange}
        />      
        Cold
        <br />
       
      </div>
     <div className='btnD'>
     <button className="button-82-pushable"  type='submit'>
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">
             Submit
            </span>
          </button>
     </div>
    
      <br />
      <br />
   
    </form>
    </div>
  );
};

export default Donation;
