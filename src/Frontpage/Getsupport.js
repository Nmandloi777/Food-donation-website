

import React, { useState } from 'react';
import './Getsupport.css';

export default function Getsupport() {
  const [state, setState] = useState('Madhya Pradesh');

  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  
  const data = {
    "Madhya Pradesh": [
      { city: "Indore", url: "https://www.google.com.qa/maps/d/u/0/embed?mid=1zpKbwGNxYyulkhdn5vY6sV0d-UKSYuQ&ehbc=2E312F&noprof=1" },
      { city: "Betul", url: "https://www.google.com.qa/maps/d/u/0/embed?mid=1rBYQgx8HuUmqz92e1B3KFGjFEVbUlJw&ehbc=2E312F&noprof=1" },
      { city: "Bhopal", url: "https://www.google.com.qa/maps/d/u/0/embed?mid=1HnZmkEw71ngAJmZOAAUqMiqrSnTWF04&ehbc=2E312F&noprof=1" },
      { city: "Dewas", url: "https://www.example.com" },
      { city: "Ratlam", url: "https://www.example.com" },
      { city: "Gwalior", url: "https://www.example.com" },
      { city: "Ujjain", url: "https://www.example.com" }
    ],
    "Maharastra": [
      { city: "Mumbai", url: "https://www.google.com.qa/maps/d/u/0/embed?mid=1Bo-YMtT3cUVfriRF-yjtw3ZUlmtTo4k&ehbc=2E312F&noprof=1" },
      { city: "Pune", url: "https://www.google.com.qa/maps/d/u/0/embed?mid=1TRzoJH844-Fhvp20VNyjQ5GGK5hSfSc&ehbc=2E312F&noprof=1" },
      { city: "Nagpur", url: "https://www.google.com.qa/maps/d/u/0/embed?mid=15sYYx4uJtrT9JxmmfYKm1av8OpX5IgI&ehbc=2E312F&noprof=1" },
      { city: "Nashik", url: "https://www.example.com/nashik" },
      { city: "Aurangabad", url: "https://www.example.com/aurangabad" },
      { city: "Solapur", url: "https://www.example.com/solapur" },
      { city: "Thane", url: "https://www.example.com/thane" }
    ],
    "Manipur": [
      { city: "Imphal", url: "https://www.google.com.qa/maps/d/u/0/embed?mid=1mCGTHN3t_AQz8b28GwFfzAngfrll8Aw&ehbc=2E312F&noprof=1" },
      { city: "Thoubal", url: "https://www.example.com/thoubal" },
      { city: "Kakching", url: "https://www.example.com/kakching" }
      
    ],
    "Goa": [
      { city: "Panaji", url: "https://www.google.com.qa/maps/d/u/0/embed?mid=1kZOb5PvNUgkF2FcTqXcOVke2MuKv4KM&ehbc=2E312F&noprof=1" },
      { city: "Margao", url: "https://www.example.com/margao" },
      { city: "Mapusa", url: "https://www.example.com/mapusa" },
      { city: "Ponda", url: "https://www.example.com/ponda" }
    ],
    "Assam": [
      { city: "Guwahati", url: "https://www.example.com/guwahati" },
      { city: "Silchar", url: "https://www.example.com/silchar" },
      { city: "Dibrugarh", url: "https://www.example.com/dibrugarh" },
      { city: "Jorhat", url: "https://www.example.com/jorhat" },
      { city: "Nagaon", url: "https://www.example.com/nagaon" }
    ],
    "Sikkim": [
      { city: "Gangtok", url: "https://www.example.com/gangtok" },
      { city: "Namchi", url: "https://www.example.com/namchi" },
      { city: "Mangan", url: "https://www.example.com/mangan" },
      { city: "Gyalshing", url: "https://www.example.com/gyalshing" },
      { city: "Rangpo", url: "https://www.example.com/rangpo" }
    ]
  };
  

  return (
    <div>
      <div className='top'>
        <h1 className='logos1'>Our Centers in</h1>
        <div className='selectContainer'>
          <select className='dropdown' onChange={handleStateChange} value={state}>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharastra">Maharastra</option>                
            <option value="Manipur">Manipur</option>
            <option value="Goa">Goa</option>
            <option value="Assam">Assam</option>
            <option value="Sikkim">Sikkim</option>
          </select>
        </div>
      </div>
      <div className='cardpositioner'>
        {data[state].map((item, index) => (
          <div key={index} className='cards'>
            <div className='cardname'><h4>{item.city}</h4></div>
            <div className='cardmap'>
              <iframe
                title={item.city}
                src={item.url}
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

