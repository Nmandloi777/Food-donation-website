import React from 'react'
import { useState } from 'react'
import "./Admin.css"
import img from "../Images/admin.jpg"
import { useNavigate } from 'react-router-dom'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
const createWarningNotification = () => {
    NotificationManager.warning('type password -  123', 'Invalid password', 5000);
};

export default function Admin() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    const formhandler = (event) => {
        event.preventDefault();

        if (password === '123') {
            navigate('/admindisplay');
        }
        else {
            createWarningNotification();
        }
        setpassword('');


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
                <h2>MRI Admin</h2>
                
                <form onSubmit={formhandler}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required onChange={usernamesetter} value={username} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required onChange={passwordsetter} value={password} />
                    </div>
                    <button className='btadmin' type="submit">Submit</button>
                </form>
            </div>
            <div>
                <img src={img} alt="ImagePlaceholder" className='imageadmin' />
            </div>
            <h5 className='admininfo'>कृपया व्यवस्थापक अपने क्रेडेंशियल्स दर्ज करें और लॉगिन करें।</h5>
            <NotificationContainer/>
        </div>
    )
}
