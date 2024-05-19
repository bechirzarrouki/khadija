import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";
import logologin from './favicon (1).png'; 
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', formData);
            console.log('Login successful:', response.data);
            navigate('/Ajouter');
        } catch (error) {
            console.error('Error logging in:', error);
            // Add your logic for handling login errors
        }
    };

    return (
        <div className='login'>
            <div className='forme'>
                <form className="ff" onSubmit={handleSubmit}>
                    <div className='head'>
                        <img className="logodelogin" src={logologin} alt="Logo" />
                        <p>LogIn</p>
                    </div>
                    <div className='boxinput'>
                        <input id='email' type='email' placeholder='Email' onChange={handleChange} />
                        <FaUser className='icon' />
                    </div>
                    <div className='boxinput'>
                        <input id='password' type='password' placeholder='Password' onChange={handleChange} />
                        <RiLock2Fill className='icon'/>
                        <div className='passspace'>
                            <div className='partie1'>
                                <a href='mod de pass oublier'>Forget password</a>
                            </div>
                            <div className='partie2'>
                                <label htmlFor="ch">See</label>
                                <input id="ch" type="checkbox"></input>
                            </div>
                        </div>
                    </div>
                    <button id='send' type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
