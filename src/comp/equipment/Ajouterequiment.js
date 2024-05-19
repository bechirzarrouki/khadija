import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import Sideequipment from "./Sideequipment";
import './Equipment.css';
import axios from 'axios';
function Ajouterequipment() {
    const [formData, setFormData] = useState({
        name: '',  
        description: '',
        df: '',
        da: '',
    });
    const navigate=useNavigate();
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
            const response = await axios.post('http://localhost:8000/api/equipements', formData);
            navigate('/Listedesfiches');
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'équipement:', error);
            // Add your logic for handling errors during API call here
        }
    };

    return (
        <div>
            <Sideequipment />
            <div className='nompage'>
                <p>Ajouter équipement:</p>
            </div>
            <form onSubmit={handleSubmit} className="ajouterequipment">
                <label htmlFor="name">Nom d'équipement</label>
                <input 
                    id="name" 
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                /> 
                <br/>
                <label htmlFor="df">Date de vérification</label>
                <input 
                    id="df" 
                    type="date" 
                    value={formData.df}
                    onChange={handleChange}
                /> 
                <br/>
                <label htmlFor="da">Date d'étalonnage</label>
                <input 
                    id="da" 
                    type="date" 
                    value={formData.da}
                    onChange={handleChange}
                /> 
                <br/>
                <label htmlFor="des">Description</label>
                <input 
                    type="text"
                    id="description" 
                    placeholder="Description" 
                    value={formData.description}
                    onChange={handleChange}
                />
                <br/>
                <button type='submit' className='btnajouter'>Ajouter</button>
            </form>
        </div>
    );
}

export default Ajouterequipment;
