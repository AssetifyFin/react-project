import React, { useContext, useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/Auth';
import { toast } from 'react-toastify'

const Login = () => {

    const [successMessage, setSuccessMessage] = useState('');
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data);
        const res = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    
        const result = await res.json();
        console.log(result);
    
        if (result.status) {
            // Assuming the success flow happens when status is true
            toast.success(result.message);
    
            // Store user information and handle login
            const userInfo = {
                id: result.id,
                token: result.token
            };
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
    
            // Call the login function (make sure it's defined and available in this context)
            login(userInfo);
    
            // Navigate to the admin dashboard
            navigate('/admin/dashboard');
        } else {
            // Handle the error case
            toast.error(result.message);
        }
    }
    

    // const onSubmit = async (data) => {
    //     // console.log(data);
    //     const res = await fetch('http://127.0.0.1:8000/api/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     });
    //     const result = await res.json();
    //     console.log(result);
    //     if (result.status) {
    //         // toast.error(result.message);
    //         toast.success(result.message);
            
    //     } else {
    //         toast.success(result.message);
    //         const userInfo = {
    //             id: result.id,
    //             token: result.token
    //         }
    //         localStorage.setItem('userInfo', JSON.stringify(userInfo))
    //         login(userInfo);
    //         navigate('/admin/dashboard');
    //     }
        
    // }
    
  return (
    <>
        <Header/>
            <main>
                <div className="container my-5 d-flex justify-content-center">
                    <div className="login-form my-5">
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className='mb-3'>Login Here</h4>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Email</label>
                                        <input 
                                            {
                                                ...register('email',{
                                                    required: "This field is required",
                                                    pattern: {
                                                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                                        message: "Invalid email address"
                                                      }                                                      
                                                })
                                            }
                                        type="text" placeholder='Email'
                                        className={`form-control ${errors.email && 'is-invalid'}`} />
                                        {
                                            errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Password</label>
                                        <input
                                        {
                                            ...register('password', {
                                                required: "This field is required"
                                            })
                                        }
                                        type="password" placeholder='Password'
                                        className={`form-control ${errors.password && 'is-invalid'}`}
                                        />
                                        {
                                            errors.password && <p className='invalid-feedback'>{errors.password?.message}</p>
                                        } 
                                        
                                    </div>
                                    <button type='submit' className='btn btn-primary'>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        <Footer/>
    
    </>
  )
}

export default Login