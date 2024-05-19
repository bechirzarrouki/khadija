import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import './Users.css'

function ConsultPage() {
  /*  const [userData, setUserData] = useState(null);

    useEffect(() => {
        console.log(userId);
        fetchUserData(userId.userId);
    }, [userId]);

    const fetchUserData = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/show/${userId}`); // Replace with your API endpoint
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            // Add your logic for handling errors during API call
        }
    };
     {userData ? (
                <div>
                    <h1>User Details</h1>
                    <p><strong>Name:</strong> {userData.prenom}</p>
                    <p><strong>ID:</strong> {userData.matricule}</p>
                    {/* Add more user details here */
                   /* </div>
                
                ) : (
                    <p>Loading user data...</p>
                )}*/

    return (
        <div >
         <Sidebar/>  
         <div className='nompage'>
                <p> Consuler le listes des Utilisateurs :</p>
            </div>
                <div  className='consultpage'> 
                <p id="lue">Les utilisateurs enregistrés</p>
                <div className='entet'>
                    <p>Nom:</p>
                    <p>Matricule:</p>
                    <p>Email :</p>
                    <p>Mot de passe :</p>
                    <p>Poste :</p>
                    <p>Mode d'accès :</p>
                    <p>Téléphone :</p>
                    </div>
                <button className='btnsupprimeretconsulter'>Modéfier</button>
                <button className='btnsupprimeretconsulter'>Supprimer</button>
                </div>
        </div>
    );

}
export default ConsultPage;
