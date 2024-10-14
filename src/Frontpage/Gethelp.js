import React, { useState } from 'react';
import './Gethelp.css';

export default function Gethelp() {
  const locationsData = {
    "Indore": [
      { city: "Bada Ganpati", url: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7360.529567138453!2d75.84242768952498!3d22.718397717552225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3962fda0a27f50f5%3A0xdd375ab4fdfb3f50!2sRajwada%2C%20Indore%2C%20Madhya%20Pradesh%20452004!3m2!1d22.71771!2d75.8544848!4m5!1s0x3962fdbd4aa1e69b%3A0x56f972310c26337b!2sBada%20Ganpati%2C%20Malharganj%2C%20Indore%2C%20Madhya%20Pradesh!3m2!1d22.720542!2d75.8419112!5e0!3m2!1sen!2sin!4v1701282967364!5m2!1sen!2sin" },
      { city: "C21 Mall", url: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29438.937704409596!2d75.85391065658125!3d22.73317638013296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3962fda0a27f50f5%3A0xdd375ab4fdfb3f50!2sRajwada%2C%20Indore%2C%20Madhya%20Pradesh!3m2!1d22.71771!2d75.8544848!4m5!1s0x3962fd541cc92fb7%3A0x84fe7fdd973a8f3e!2sC21%20Mall%2C%20C21%20Mall%2C%20AB%20Road%2C%20Scheme%2054%20PU4%2C%20Indore%2C%20Madhya%20Pradesh!3m2!1d22.7441207!2d75.8940231!5e0!3m2!1sen!2sin!4v1701288628654!5m2!1sen!2sin" },
      { city: "Indore Center 3", url: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14718.978218031358!2d75.89031598514568!3d22.737734060207092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3962fd541cc92fb7%3A0x84fe7fdd973a8f3e!2sC21%20Mall%2C%20C21%20Mall%2C%20AB%20Road%2C%20Scheme%2054%20PU4%2C%20Indore%2C%20Madhya%20Pradesh!3m2!1d22.7441207!2d75.8940231!4m5!1s0x3962e392c3e7709f%3A0xbe613e2b66216261!2sKhajrana%20Ganesh%20Mandir%2C%20Ganeshpuri%20Main%20Rd%2C%20Ganeshpuri%2C%20Khajrana%2C%20Indore%2C%20Madhya%20Pradesh%20452016!3m2!1d22.731233!2d75.9081489!5e0!3m2!1sen!2sin!4v1701288913909!5m2!1sen!2sin" }
    ],
    "Betul": [
      { city: "Ganj", url: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7403.470154152078!2d77.9007549880698!3d21.906275119886892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d21.903310299999998!2d77.899697!4m5!1s0x3bd609ebbcc8350b%3A0xfbfc47ba0e46aca4!2sGanj%2C%20Betul%2C%20Madhya%20Pradesh%20460001!3m2!1d21.9076017!2d77.9122095!5e0!3m2!1sen!2sin!4v1701289009708!5m2!1sen!2sin" },
      { city: "Housing colony", url: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d14806.935692321356!2d77.8779064347134!3d21.906319538027617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x3bd6099355fd39f5%3A0xfcd7f3a44fc36322!2zQmV0dWwg4KSs4KWI4KSk4KWC4KSy!3m2!1d21.9011601!2d77.8960201!4m3!3m2!1d21.9142518!2d77.8804292!5e0!3m2!1sen!2sin!4v1701289831778!5m2!1sen!2sin" }
    ],
    "Ratlam": [
      { city: "Ratlam Center 1", url: "https://www.example.com/ratlam-center-1" },
      { city: "Ratlam Center 2", url: "https://www.example.com/ratlam-center-2" },
      { city: "Ratlam Center 3", url: "https://www.example.com/ratlam-center-3" }
    ],
    "Gwalior": [
      { city: "Gwalior Center 1", url: "https://www.example.com/gwalior-center-1" },
      { city: "Gwalior Center 2", url: "https://www.example.com/gwalior-center-2" }
    ]
  };

  const [selectedLocation, setSelectedLocation] = useState('Indore');

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div>
      <div className='textplacer'>
        <p className='text1 '>Where are you located ?</p>
      </div>

      <div className='selectContainer scroll'>
        {/* Add onChange prop to call handleLocationChange function */}
        <select className='dropdown' onChange={handleLocationChange}>
          <option value="Indore">Indore</option>
          <option value="Betul">Betul</option>
          <option value="Ratlam">Ratlam</option>
          <option value="Gwalior">Gwalior</option>
        </select>
      </div>

      <div>
        {selectedLocation && (
          <div className='locations'>
            {locationsData[selectedLocation].map((location, index) => (
              <div>
                <div className='locamap'>
                  <iframe title={location.city} src={location.url} ></iframe>
                </div>
              <div key={index} className='nameloca'>
              <h1>
                 {location.city} 
               </h1>
              
              </div>
              
                </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
