import React, { useState, useRef, useMemo, useEffect } from 'react';
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import Footer from '../../common/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { apiUrl, fileUrl, token } from '../../common/http';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';

const Edit = ({ placeholder }) => {

    const editor = useRef(null);
	const [content, setContent] = useState('');
    const [service, setService] = useState('');
	const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const params = useParams();

    const config = useMemo(() => ({
            readonly: false, // all options from https://xdsoft.net/jodit/docs/,
            placeholder: placeholder || ''
        }),
        [placeholder]
    );
    
    const [successMessage, setSuccessMessage] = useState('');

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const res =  await fetch(apiUrl + 'service/' + params.id,{
                'method': 'GET',
                'headers': {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`,
                },
            });
            const result = await res.json();
            //setting the data for content actually I am using rich text editor
            // console.log(result);
            setContent(result.service.content);
            setService(result.service);
            return {
                title: result.service.title,
                slug: result.service.slug,
                short_desc: result.service.short_desc,
                status: result.service.status
            }
            
        }
    });

    const navigate = useNavigate();

    const onSubmit =  async(data) => {

        const newData = {...data, "content": content, "imageId": imageId}
        const res =  await fetch(apiUrl + 'service/'+params.id,{
            'method': 'PUT',
            'headers': {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`,
            },
            body: JSON.stringify(newData)
        });
        const result = await res.json();

        if (result.status) {
            toast.success(result.message);
            setSuccessMessage(result.message); // Display success message
            navigate('/admin/services');
        } else {
            setSuccessMessage('Something went wrong, please try again.');
            toast.error(result.message);
        }
    }

    const handleFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append("image", file);
    
        await fetch(apiUrl + 'temp-images', {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`,
            },
            body: formData
        })
        .then(response => response.json()) // Call .json() properly to parse the response
        .then(result => {
            if (!result.status) {
                // Show the first error message from errors.image
                if (result.errors && result.errors.image) {
                    toast.error(result.errors.image[0]); // Display specific error message for image
                } else {
                    toast.error("An error occurred while uploading the image."); // Fallback message
                }
            } else {
                setImageId(result.data.id); // Set the image ID on successful upload
            }
        })
        .catch(error => {
            console.error('Error uploading image:', error);
            toast.error("Failed to upload image"); // Handle any fetch errors
        });
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
                                            <h4 className='h5'>Services / Edit</h4>
                                            <Link to="/admin/services" className='btn btn-primary'>Back</Link>
                                        </div>
                                        <hr />
                                        {/* Display success message */}
                                        {successMessage && <div className="alert alert-success">{successMessage}</div>}
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="mb-3">
                                                <label htmlFor="title" className="form-label">Name</label>
                                                <input placeholder='Title'
                                                    {
                                                        ...register('title', {
                                                            required: "The title field is required"
                                                        })
                                                    }
                                                    type="text"
                                                    id="title"
                                                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                                />
                                                {
                                                    errors.title && <p className="invalid-feedback">{errors.title.message}</p>
                                                }
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="slug" className="form-label">Slug</label>
                                                <input placeholder='Slug'
                                                    {
                                                        ...register('slug', {
                                                            required: "The slug field is required"
                                                        })
                                                    }
                                                    type="text"
                                                    id="slug"
                                                    className={`form-control ${errors.slug ? 'is-invalid' : ''}`}
                                                />
                                                {
                                                    errors.slug && <p className="invalid-feedback">{errors.slug.message}</p>
                                                }
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="short_desc" className="form-label">Short Description</label>
                                                <textarea placeholder='Short Description'
                                                {
                                                    ...register('short_desc')                                            }
                                                className='form-control' rows={3}></textarea>
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="content" className="form-label">Content</label>
                                                <JoditEditor
                                                    ref={editor}
                                                    value={content}
                                                    config={config}
                                                    tabIndex={1} // tabIndex of textarea
                                                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                                    onChange={newContent => {}}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="image" className="form-label">Image</label><br />
                                                <input onChange={handleFile} type="file" />
                                            </div>
                                            <div className='pb-3'>
                                                {
                                                    service.image && <img src={fileUrl + 'uploads/services/small/' + service.image} alt="" />
                                                }
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="status" className="form-label">Status</label>
                                                <select className='form-control'
                                                    {
                                                        ...register('status')                                                }
                                                >
                                                    <option value="1">Active</option>
                                                    <option value="0">Block</option>
                                                </select>
                                            </div>
                                            <button disabled={isDisable} type="submit" className="btn btn-primary">Update</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />
        </>
    );
};

export default Edit;
