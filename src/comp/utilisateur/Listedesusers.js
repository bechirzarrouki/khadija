    import React, { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import Modal from 'react-modal';
    import './Users.css';
    import Sidebar from './Sidebar';
    import axios from 'axios';
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
    import Navbar from "../navbar/Navbar";
import { Search } from '@mui/icons-material';
    function Listedesusers() {
        const navigate=useNavigate();
        const [Users, setUsers] = useState([]);
        const [searchQuery, setSearchQuery] = useState('');
        const [showEditModal, setShowEditModal] = useState(false);
        const [showDeleteModal, setShowDeleteModal] = useState(false);
        const [selectedUserId, setSelectedUserId] = useState(null);
        const [editForm, setEditForm] = useState({ name: '', matricule: '', email: '', poste: '', mode_dacces: '', tel: '' });

        useEffect(() => {
            fetchData();
        }, []);

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/index');
                const userData = response.data.users;
                setUsers(userData);
                console.log(userData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const handleSearchChange = (e) => {
            setSearchQuery(e.target.value);
        };

        const handleSearchByMatricule = async () => {
                try {
                    if(searchQuery!==''){
                    const response = await axios.get(`http://localhost:8000/api/fiches/search`,{
                        params:{
                            name:searchQuery
                        }
                    });
                    console.log(response.data);
                    setUsers(response.data.users);
                }else{
                    fetchData();
                }
            } catch (error) {
                console.error('Error searching by matricule:', error);
            }
        };

        const handleEdit = (userId) => {
            const userToEdit = Users.find(user => user.id === userId);
            setEditForm({
                name: userToEdit.name,
                matricule: userToEdit.matricule,
                email: userToEdit.email,
                poste: userToEdit.poste,
                mode_dacces: userToEdit.mode_dacces,
                tel: userToEdit.tel
            });
            setSelectedUserId(userId);
            setShowEditModal(true);
        };

        const handleEditChange = (e) => {
            const { name, value } = e.target;
            setEditForm({ ...editForm, [name]: value });
        };

        const handleEditSubmit = async (e) => {
            e.preventDefault();
            try {
                await axios.put(`http://localhost:8000/api/update/${selectedUserId}`, editForm);
                fetchData();
                setShowEditModal(false);
                navigate('/Listedesusers');
            } catch (error) {
                console.error('Error updating user:', error);
            }
        };

        const handleDeleteSubmit = async (userId) => {
            try {
                await axios.delete(`http://localhost:8000/api/delete/${userId}`);
                fetchData();
                setShowDeleteModal(false);
                navigate('/Listedesusers');
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        };

        return (
            <div>
            <Navbar/>
            <div className='container'>
                <Sidebar />
                <div className='ajouterequipment'>
                <div className='nompage'>
                    <p> Listes des Utilisateurs :</p>
                </div>
                <div className='consutpageequipment'>
                    <input type="search" placeholder='Search' value={searchQuery} onChange={handleSearchChange} />
                    <button className='btnrecherche' onClick={handleSearchByMatricule}>Search</button>
                </div>
                <div className='listesequipment'>
                    <p id="lue">Les Utilisateurs enregistrés</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Matricule</th>
                                <th>Email</th>
                                <th>Poste</th>
                                <th>Mode d'accès</th>
                                <th>Téléphone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Users.length > 0 ? (
                                Users.map((user) => (

                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.matricule}</td>
                                        <td>{user.email}</td>
                                        <td>{user.poste}</td>
                                        <td>{user.mode_dacces}</td>
                                        <td>{user.tel}</td>
                                        <td>
                                            <FontAwesomeIcon icon={faPen} className='lock' onClick={() => handleEdit(user.id)} />
                                            <FontAwesomeIcon icon={faTrash} className='lock' style={{ color: "red" }} onClick={() => handleDeleteSubmit(user.id)} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8">No users found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
                {/* Edit Modal */}
                <Modal style={{height:"400px"}} isOpen={showEditModal} onRequestClose={() => setShowEditModal(false)}>
                    <div className="modal-content">
                        <h2>Edit User</h2>
                        <form onSubmit={handleEditSubmit}>
                            <label>
                                Nom:
                                <input type="text" name="name" value={editForm.name} onChange={handleEditChange} />
                            </label>
                            <label>
                                Matricule:
                                <input type="text" name="matricule" value={editForm.matricule} onChange={handleEditChange} />
                            </label>
                            <label>
                                Email:
                                <input type="email" name="email" value={editForm.email} onChange={handleEditChange} />
                            </label>
                            <label>
                                Poste:
                                <input type="text" name="poste" value={editForm.poste} onChange={handleEditChange} />
                            </label>
                            <label>
                                Mode d'accès:
                                <input type="text" name="mode_dacces" value={editForm.mode_dacces} onChange={handleEditChange} />
                            </label>
                            <label>
                                Téléphone:
                                <input type="text" name="tel" value={editForm.tel} onChange={handleEditChange} />
                            </label>
                            <div className="modal-actions">
                                <button type="submit">Save</button>
                                <button type="button" onClick={() => setShowEditModal(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }

    export default Listedesusers;
