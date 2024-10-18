import React, { useEffect, useState } from 'react';
import Sidebar from '../../common/Sidebar';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import { apiUrl, token } from '../../common/http';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Show = () => {
    const [services, setServices] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedServiceId, setSelectedServiceId] = useState(null);

    const fetchServices = async () => {
        try {
            const res = await fetch(apiUrl + 'services', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`,
                },
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await res.json();
            setServices(result.services || []);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`${apiUrl}service/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token()}`,
                },
            });

            const result = await res.json();

            if (result.status) {
                toast.success('Service deleted successfully.');
                setServices(services.filter(service => service.id !== id)); // Remove deleted service from the list
            } else {
                toast.error('Failed to delete the service.');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setShowModal(false); // Close modal after deletion
        }
    };

    const openDeleteModal = (id) => {
        setSelectedServiceId(id);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Header />
            <main>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9">
                            <div className="card shadow border-0">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <h4 className='h5'>Services</h4>
                                        <Link to="/admin/services/create" className='btn btn-primary'>Create</Link>
                                    </div>
                                    <hr />
                                    <table className='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Slug</th>
                                                <th>Status</th>
                                                <th className="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {services && services.length > 0 ? (
                                                services.map((service) => (
                                                    <tr key={service.id}>
                                                        <td>{service.id}</td>
                                                        <td>{service.title}</td>
                                                        <td>{service.slug}</td>
                                                        <td>
                                                            {service.status === 1 ? 'Active' : 'Block'}
                                                        </td>
                                                        <td className="text-end">
                                                            <Link to={`/admin/services/edit/${service.id}`} className='btn btn-primary btn1-sm'>Edit</Link>
                                                            <button
                                                                onClick={() => openDeleteModal(service.id)}
                                                                className='btn btn-secondary btn1-sm ms-2'>
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="5" className="text-center">No services found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            {/* Confirmation Modal */}
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton style={{ backgroundColor: '#FF9933' }}>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#FFFFFF' }}> {/* Red background */}
                    Are you sure you want to delete this service?
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#138808' }}>
                    <Button style={{ backgroundColor: '#6c757d', borderColor: '#5a6268' }} onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button style={{ backgroundColor: '#d9534f', borderColor: '#d43f3a' }} onClick={() => handleDelete(selectedServiceId)}>
                        CONFIRM
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Show;
