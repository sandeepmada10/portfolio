import React, { useState } from 'react';
import './contact.css';
import Myweather from './weatherwidget/myweather';
import Userweather from './weatherwidget/userweather';



function ContactComponent() {
  const [displayUser, setDisplayUser] = useState(false);
  return (
    <div>
      <div className="details">

        <h3>Contact Details
        </h3>
        <p>+91-8074486431</p>
        <h3>Location</h3>
        <p>Door no:1-14/1,Dulla,Kadiyam Mandal,East Godavari DistrictAP-533234</p>

      </div>
      <div className='widget'>
        <div className='weather1'><Myweather /></div>
        <div className='user-weather'>
          <button onClick={() => setDisplayUser(true)}>Get Weather</button>
          {displayUser ? <Userweather /> : (' ')}
        </div>
      </div>
    </div>

  )
}

export default ContactComponent;