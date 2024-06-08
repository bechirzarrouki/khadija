// FicheDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../navbar/Navbar";
import Sidebarfiche1 from "./Sidebarfiche1";
import './Fiche.css';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function FicheDetails() {
    const { id } = useParams();
    const [fiche, setFiche] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchFicheDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/fiches/${id}`);
                setFiche(response.data);
                setData(JSON.parse(response.data.data));
                console.log(JSON.parse(response.data.data));
            } catch (error) {
                console.error('Error fetching fiche details:', error);
            }
        };

        fetchFicheDetails();
    }, [id]);

    if (!fiche) {
        return <div>Loading...</div>;
    }

    const handleDownloadPDF = () => {
        const input = document.getElementById('fiche-details-content');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save("fiche-details.pdf");
            });
    };

    return (
        <div>
            <Navbar />
            <div className='container'>
                <Sidebarfiche1 />
                <div className='ajouterequipment'>
                    <div className='nompage'>
                        <p>Fiche Details:</p>
                    </div>
                    <div className='fiche-details' id='fiche-details-content'>
                        <p><strong>Nom:</strong> {fiche.name}</p>
                        <p><strong>Description:</strong> {fiche.description}</p>
                        <p><strong>Date d'Ajout:</strong> {fiche.created_at}</p>
                        <p><strong>Date de mise à jour:</strong> {fiche.updated_at}</p>
                        {data.length>0 && data.map((option, optionIndex) => (
                            <p key={optionIndex}><strong>{option.placeholder}:</strong> {JSON.stringify(option.value)}</p>
                        ))}
                    </div>
                    <button onClick={handleDownloadPDF} className='btn-download'>Download as PDF</button>
                </div>
            </div>
        </div>
    );
}

export default FicheDetails;
