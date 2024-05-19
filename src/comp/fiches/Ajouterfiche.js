import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Fiche.css';
import Sidebarfiche1 from "./Sidebarfiche1";
import axios from 'axios';

function Ajouterfiche() {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        description: '' // Added description field
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        console.log(`Updating ${id} to ${value}`); // Debugging log
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data being submitted:', formData); // Debugging log
        try {
            const response = await axios.post('http://localhost:8000/api/fiches', formData);
            console.log('Fiche ajoutée avec succès:', response.data);
            navigate('/Listedesfiches');
            // Add your logic for handling successful fiche addition
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la fiche:', error);
            // Add your logic for handling errors during API call
        }
    };

    return (
        <div>
            <Sidebarfiche1 />
            <div className='nompage'>
                <p>Ajouter une nouvelle fiche :</p>
            </div>
            <form onSubmit={handleSubmit} className='ajouterfiche'>
                <label htmlFor="name">Nom du fiche :</label>
                <input 
                    id="name" 
                    type="text" 
                    placeholder='Nom du fiche :' 
                    value={formData.name}
                    onChange={handleChange} 
                />
                <br />
                <label htmlFor="type">Type :</label>
                <input 
                    id="type" 
                    type="text" 
                    placeholder='Type :' 
                    value={formData.type}
                    onChange={handleChange} 
                />
                <br />
                <label htmlFor="description">Déscription :</label>
                <input
                    type="text" 
                    id="description" 
                    placeholder='Description :' 
                    value={formData.description}
                    onChange={handleChange} 
                />
                <br />
                <button type='submit' className='btnajouter'>Ajouter</button>
            </form>
        </div>
    );
}

export default Ajouterfiche;
