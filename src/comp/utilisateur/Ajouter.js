import React, { useState } from 'react';
import './Users.css';
import axios from 'axios';
import Sidebar from './Sidebar';

function Ajouter() {
    const [formData, setFormData] = useState({
        name: '',
        matricule: '',
        email: '',
        password: '',
        password_confirmation: '',
        poste: '',
        mode_dacces: '',
        tel: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleAjouter = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/register', formData);
            console.log('Data sent successfully:', response.data);
            // Add your logic for handling successful API response
        } catch (error) {
            console.error('Error sending data:', error);
            // Add your logic for handling errors during API call
        }
    };

    return (
        <div >
            <Sidebar/>
            <div className='nompage'>
                <p>Ajouter un Utilisateur :</p>
            </div>
            <div className='ajoutuser'>
                <label htmlFor='name'>Nom et prénom :</label>
                <input id="name" type="text" placeholder='Name' onChange={handleChange} />
                <br />
                <label htmlFor='matricule'>Matricule :</label>
                <input id="matricule" type="text" placeholder='Matricule :' onChange={handleChange} />
                <br />
                <label htmlFor='email'>Email :</label>
                <input id="email" type="email" placeholder='Email:' onChange={handleChange} />
                <br />
                <label htmlFor='password'>Mot de passe :</label>
                <input id="password" type="password" placeholder='Password :' onChange={handleChange} />
                <br />
                <label htmlFor='password_confirmation'>Confirmer mot de passe :</label>
                <input id="password_confirmation" type="password" placeholder='Confirm Password :' onChange={handleChange} />
                <br />
                <label htmlFor='poste'>Poste :</label>
                <input id="poste" type="text" placeholder='Poste :' onChange={handleChange} />
                <br />
                <label htmlFor='mode_dacces'>Mode d'accès :</label>
                <select id="mode_dacces" onChange={handleChange}>
                    <option className='options' value="">Choisir le mode d'accès:</option>
                    <option value="Admin">Admin</option>
                    <option value="Métrologie">Métrologie</option>
                    <option value="Qualité">Qualité</option>
                </select>
                <br />
                <label htmlFor='tel'>Téléphone :</label>
                <input id='tel' type="tel" placeholder='Téléphone :' onChange={handleChange} />
                <br />
                <button onClick={handleAjouter} className='btnajouter'>Ajouter</button>
            </div>
        </div>
    );
}

export default Ajouter;
