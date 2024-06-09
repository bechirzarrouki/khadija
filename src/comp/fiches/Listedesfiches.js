import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './Fiche.css';
import Sidebarfiche1 from "./Sidebarfiche1";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../navbar/Navbar";

function Listedesfiches() {
    const [fiches, setFiches] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedFicheId, setSelectedFicheId] = useState(null);
    const [editForm, setEditForm] = useState({ name: '', description: '', updated_at: '' });
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/fiches');
            const fichesData = response.data;
            setFiches(fichesData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchByName = async () => {
        try {
            if(searchQuery!==''){
            const response = await axios.get(`http://localhost:8000/api/fiches/search`,{
                params:{
                    name:searchQuery
                }
            });
            console.log(response.data);
            setFiches(response.data);
        }else{
            fetchData();
        }
        } catch (error) {
            console.error('Error searching by matricule:', error);
        }
    };

    const handleEdit = (ficheId) => {
        const ficheToEdit = fiches.find(fiche => fiche.id === ficheId);
        setEditForm({
            name: ficheToEdit.name,
            description: ficheToEdit.description,
            updated_at: ficheToEdit.updated_at,
        });
        setSelectedFicheId(ficheId);
        setShowEditModal(true);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/fiches/${selectedFicheId}`, editForm);
            fetchData();
            navigate('/Listedesfiches');
            setShowEditModal(false);
        } catch (error) {
            console.error('Error updating fiche:', error);
        }
    };

    const handleDeleteSubmit = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/fiches/${id}`);
            fetchData();
            navigate('/Listedesfiches');
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting fiche:', error);
        }
    };

    const handleRowClick = (ficheId) => {
        navigate(`/fiche/${ficheId}`);
    };

    return (
        <div>
            <Navbar />
            <div className='container'>
                <Sidebarfiche1 />
                <div className='ajouterequipment'>
                    <div className='nompage'>
                        <p>Listes des Fiches :</p>
                    </div>
                    <div className='consultequipment'>
                        <input type="search" placeholder='Search' value={searchQuery} onChange={handleSearchChange} />
                        <button className='btnrecherche' onClick={handleSearchByName}>Search</button>
                    </div>
                    <div className='listesequipment'>
                        <p id="luf">Les Fiches enregistrées</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Description</th>
                                    <th>Date d'Ajout</th>
                                    <th>Date de mise à jour</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fiches.length > 0 ? (
                                    fiches.map((fiche) => (
                                        <tr key={fiche.id} onClick={() => handleRowClick(fiche.id)}>
                                            <td>{fiche.name}</td>
                                            <td>{fiche.description}</td>
                                            <td>{fiche.created_at}</td>
                                            <td>{fiche.updated_at}</td>
                                            <td onClick={(e) => e.stopPropagation()}>
                                                <FontAwesomeIcon icon={faPen} className='edit-icon' onClick={() => handleEdit(fiche.id)} />
                                                <FontAwesomeIcon icon={faTrash} className='delete-icon' style={{ color: "red" }} onClick={() => handleDeleteSubmit(fiche.id)} />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5">No fiches found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Edit Modal */}
                <Modal className="modal1" isOpen={showEditModal} onRequestClose={() => setShowEditModal(false)}>
                    <div className="modal-content">
                        <h2>Edit Fiche</h2>
                        <form onSubmit={handleEditSubmit}>
                            <label>
                                Nom:
                                <input type="text" name="name" value={editForm.name} onChange={handleEditChange} />
                            </label>
                            <label>
                                Description:
                                <input type="text" name="description" value={editForm.description} onChange={handleEditChange} />
                            </label>
                            <div className="modal-actions">
                                <button type="submit">Save</button>
                                <button type="button" onClick={() => setShowEditModal(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Listedesfiches;
