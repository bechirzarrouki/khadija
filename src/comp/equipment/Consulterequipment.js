import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import '../fiches/Fiche.css';
import Sideequipment from "./Sideequipment";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen , faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

function Consulterequipment() {
    const navigate=useNavigate();
    const [equipments, setEquipments] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedEquipmentId, setSelectedEquipmentId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: '',
        description: '',
        df: null,
        da: null
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/equipements');
            const equipmentsData = response.data;
            setEquipments(equipmentsData);
            console.log(equipmentsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchByName = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/equipments?name=${searchQuery}`);
            setEquipments(response.data);
        } catch (error) {
            console.error('Error searching by name:', error);
        }
    };

    const handleEdit = (equipmentId) => {
        const selectedEquipment = equipments.find(equipment => equipment.id === equipmentId);
        setSelectedEquipmentId(equipmentId);
        setEditFormData({
            name: selectedEquipment.name,
            description: selectedEquipment.description,
            created_at: selectedEquipment.created_at,
            df: moment(selectedEquipment.df).format('YYYY-MM-DD'),
            da: moment(selectedEquipment.da).format('YYYY-MM-DD')
        });
        setShowEditModal(true);
    };

    const handleDelete = async (equipmentId) => {
        try {
            await axios.delete(`http://localhost:8000/api/equipements/${equipmentId}`);
            fetchData();
            navigate('/Listedesfiches');
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting equipment:', error);
        }
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({ ...editFormData, [name]: value });
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/equipements/${selectedEquipmentId}`, editFormData);
            fetchData();
            navigate('/Listedesfiches');
            setShowEditModal(false);
        } catch (error) {
            console.error('Error updating equipment:', error);
        }
    };

    return (
        <div>
            <Sideequipment />
            <div className='nompage'>
                <p>Listes des équipements:</p>
            </div>
            <div className='consutpageequipment'>
                <input type="search" placeholder='Search' value={searchQuery} onChange={handleSearchChange} />
                <button className='btnrecherche' onClick={handleSearchByName}>Search</button>
            </div>
            <div className='listesequipment'>
                <p id="lue">Les Équipements enregistrés</p>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Date d'Ajout</th>
                            <th>Date de vérification</th>
                            <th>Date d'ételonage</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipments.length > 0 ? (
                            equipments.map((equipment) => (
                                <tr key={equipment.id}>
                                    <td>{equipment.name}</td>
                                    <td>{equipment.description}</td>
                                    <td>{equipment.created_at}</td>
                                    <td>{equipment.df}</td>
                                    <td>{equipment.da}</td>
                                    <td>
                                        <FontAwesomeIcon icon={faPen} className='lock' onClick={() => handleEdit(equipment.id)} />
                                        <FontAwesomeIcon icon={faTrash} className='lock' style={{color:"red"}} onClick={() => handleDelete(equipment.id)} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No equipments found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Edit Modal */}
            <Modal isOpen={showEditModal}>
                <div className="modal-content">
                    <h2>Edit Equipment</h2>
                    <form onSubmit={handleEditSubmit}>
                        <label>
                            Nom:
                            <input type="text" name="name" value={editFormData.name} onChange={handleEditChange} />
                        </label>
                        <label>
                            Description:
                            <input type="text" name="description" value={editFormData.description} onChange={handleEditChange} />
                        </label>
                        <label>
                            Date de vérification:
                            <input type="date" name="df" value={editFormData.df} onChange={handleEditChange} />
                        </label>
                        <label>
                            Date d'ételonage:
                            <input type="date" name="da" value={editFormData.da} onChange={handleEditChange} />
                        </label>
                        <div className="modal-actions">
                            <button type="submit">Save</button>
                            <button type="button" onClick={() => setShowEditModal(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </Modal>

            {/* Delete Modal */}
            <Modal isOpen={showDeleteModal}>
                <div className="modal-content">
                    <h2>Delete Equipment</h2>
                    <p>Are you sure you want to delete this equipment?</p>
                    <div className="modal-actions">
                        <button onClick={() => handleDelete(selectedEquipmentId)}>Yes</button>
                        <button onClick={() => setShowDeleteModal(false)}>No</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Consulterequipment;
