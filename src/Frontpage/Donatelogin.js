import React from 'react'
import { useState} from 'react'
import img from "../Images/Surplus1.jpg"
import { useNavigate } from 'react-router-dom'
import "./Donatelogin.css"
export default function Admin() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const navigate = useNavigate();

    const storeUserData = {
        email: username,
        pass: password

    }
    async function link(storeUserData) {
        const data = await fetch('https://meal-rescue-india-default-rtdb.firebaseio.com/Logindata.json', {
            method: 'POST',
            body: JSON.stringify(storeUserData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    const formhandler = (event) => {
        event.preventDefault();

        link(storeUserData);
        navigate("/donation");
        setpassword('');
        setusername('');


    }
    const passwordsetter = (event) => {
        setpassword(event.target.value);
    };
    const usernamesetter = (event) => {
        setusername(event.target.value);
    };
    return (
        <div className="container">
            <div className="login-form">
                <h2>MRI Donate</h2>
                <form onSubmit={formhandler}>
                    <div className="form-group">
                        <label htmlFor="username">Email:</label>
                        <input type="email" id="username" name="username" autoComplete="current-username" required onChange={usernamesetter} value={username} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required autoComplete="current-password" onChange={passwordsetter} value={password} />
                    </div>
                    <button className='btadmin' type="submit">Submit</button>
                </form>
            </div>
            <div>
                <img src={img} alt="ImagePlaceholder" className='imageadmin' />
            </div>
            <h5 className='admininfo'>मील रेस्क्यू इंडिया से सेवाओं का लाभ उठाने के लिए अपना उपयोगकर्ता आईडी और पासवर्ड दर्ज करें।</h5>
        </div>
    )
}
