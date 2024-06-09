import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Fiche.css';
import Sidebarfiche1 from "./Sidebarfiche1";
import axios from 'axios';
import DynamicForm from './Dynamicform'; // Import the DynamicForm component

function Ajouterfiche() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });
    const [options, setOptions] = useState([]); // State to store fetched options
    const [dynamicInputs, setDynamicInputs] = useState([]); // State to store dynamic inputs
    const [dynamicFormData, setDynamicFormData] = useState([]); // State to store dynamic form data

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch options from the API when the component mounts
        const fetchOptions = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/equipements');
                setOptions(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des options:', error);
            }
        };

        fetchOptions();
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
        // If the select input is changed, fetch the corresponding dynamic form inputs
        if (id === 'selectedName') {
            setDynamicInputs(JSON.parse(value));
        }
    };

    const handleDynamicFormChange = (data) => {
        setDynamicFormData(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let combinedData = {
            "name":formData.name,
            "description":formData.description,
            data: JSON.stringify(dynamicFormData)
        };
        console.log(combinedData);
        try {
            const response = await axios.post('http://localhost:8000/api/fiches', combinedData);
            console.log(response);
            navigate('/Listedesfiches');
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la fiche:', error);
        }
    };

    return (
        <div className='container'>
            <Sidebarfiche1 />

            <div className="ajouterequipment">
            <div className='nompage'>
                <p>Ajouter une nouvelle fiche :</p>
            </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nom du fiche :</label>
                    <input 
                        id="name" 
                        type="text" 
                        placeholder='Nom du fiche :' 
                        value={formData.name}
                        onChange={handleChange} 
                    />
                    <br/>
                    <label htmlFor="description">Déscription :</label>
                    <input
                        type="text" 
                        id="description" 
                        placeholder='Description :' 
                        value={formData.description}
                        onChange={handleChange} 
                    />
                    <br/>
                    <label htmlFor="selectedName">Select Name:</label>
                    <select 
                        id="selectedName" 
                        value={formData.selectedName} 
                        onChange={handleChange}
                    >
                        <option value="">Select...</option>
                        {options.map(option => (
                            <option key={option.value} value={option.data}>{option.name}</option>
                        ))}
                    </select>
                    <br />
                    {/* Render DynamicForm and pass the dynamicInputs and a handler for data change */}
                    {dynamicInputs.length > 0 && (
                        <DynamicForm inputArray={dynamicInputs} onFormChange={handleDynamicFormChange} />
                    )}
                    <button type='submit' className='btnajouter'>Ajouter</button>
                </form>
            </div>
        </div>
    );
}

export default Ajouterfiche;
