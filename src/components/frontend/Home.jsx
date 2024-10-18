import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ServiceImage from '../../assets/images/construction1.jpg';
import ConstructionImage from '../../assets/images/construction2.jpg';
import BlogImage from '../../assets/images/construction3.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AvatarImage from '../../assets/images/author-2.jpg';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import About from "../common/About";

const Home = ()  => {
    return (
        <>
            <Header/>
            <main>
                {/* Hero section */}
                <section className="section-1">
                    <div className="hero d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="text-center">
                                <span>Welcome Amazing Construction</span>
                                <h1>Crafting dreams with <br />precision and excellence.</h1>
                                <p>We excel at transforming vision into reality through outstanding craftsmanship and prices
                                    <br />attention to detail. With years of experience and a dedicaton to quality.
                                </p>
                                <div className="MT-4">
                                    <a className="btn btn-primary large">Contact Now</a>
                                    <a className="btn btn-secondary large ms-2">View Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <About/>

                {/* Our services */}
                <section className="section-3 bg-light py-5">
                    <div className="container-fluid py-2">
                        <div className="section-header text-center">
                            <span>Our Services</span>
                            <h2>Our Construction Services</h2>
                            <p>We offere Lorem ipsum dolor sit amet consectetur adipisicing 
                            blanditiis fugit illum corrupti ipsam incidunt repellat omnis eveniet possimus.
                            Eaque velit perspiciatis nam necessitatibus rerum.</p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImage} className="w-100"/>
                                    </div>
                                    <div className="service-body">
                                        <div className="service-item">
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempore quas, 
                                                non similique saepe nemo, natus sit qui, a sed autem dolorem nesciunt itaque 
                                                rem at voluptates quae? Qui, mollitia!</p>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImage} className="w-100"/>
                                    </div>
                                    <div className="service-body">
                                        <div className="service-item">
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempore quas, 
                                                non similique saepe nemo, natus sit qui, a sed autem dolorem nesciunt itaque 
                                                rem at voluptates quae? Qui, mollitia!</p>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImage} className="w-100"/>
                                    </div>
                                    <div className="service-body">
                                        <div className="service-item">
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempore quas, 
                                                non similique saepe nemo, natus sit qui, a sed autem dolorem nesciunt itaque 
                                                rem at voluptates quae? Qui, mollitia!</p>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImage} className="w-100"/>
                                    </div>
                                    <div className="service-body">
                                        <div className="service-item">
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempore quas, 
                                                non similique saepe nemo, natus sit qui, a sed autem dolorem nesciunt itaque 
                                                rem at voluptates quae? Qui, mollitia!</p>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why choose us */}
                <section className="section-4 py-5">
                    <div className="container py-5">
                        <div className="section-header text-center">
                            <span>Why Choose Us</span>
                            <h2>Discover our wise verity of projects</h2>
                            <p>We offere Lorem ipsum dolor sit amet consectetur adipisicing 
                            Eaque velit perspiciatis nam necessitatibus rerum,<br/>
                            Voluptatum iure quos, commodi repellat libero harum?</p>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-3">
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon1} alt="" />
                                </div>
                                <div className="card-title mt-3">
                                    <h3>Cutting-Edge Solution</h3>
                                    <div>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        quas aliquid facilis facere ea, id, odio eum delectus? 
                                        Iusto dicta eveniet cum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon2} alt="" />
                                </div>
                                <div className="card-title mt-3">
                                    <h3>Cutting-Edge Solution</h3>
                                    <div>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        quas aliquid facilis facere ea, id, odio eum delectus? 
                                        Iusto dicta eveniet cum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon3} alt="" />
                                </div>
                                <div className="card-title mt-3">
                                    <h3>Cutting-Edge Solution</h3>
                                    <div>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        quas aliquid facilis facere ea, id, odio eum delectus? 
                                        Iusto dicta eveniet cum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>


                {/* Our Projects */}
                <section className="section-3 bg-light py-5">
                    <div className="container-fluid py-2">
                        <div className="section-header text-center">
                            <span>our projects</span>
                            <h2>Discover our diverse range of projects</h2>
                            <p>We offere Lorem ipsum dolor sit amet consectetur adipisicing 
                            Eaque velit perspiciatis nam necessitatibus rerum.</p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ConstructionImage} className="w-100"/>
                                    </div>
                                    <div className="service-body">
                                        <div className="service-item">
                                            <h3>Kolkata Projects</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempore quas, 
                                                non similique saepe nemo, natus sit qui, a sed autem dolorem nesciunt itaque 
                                                rem at voluptates quae? Qui, mollitia!</p>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ConstructionImage} className="w-100"/>
                                    </div>
                                    <div className="service-body">
                                        <div className="service-item">
                                        <h3>Kolkata Projects</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempore quas, 
                                                non similique saepe nemo, natus sit qui, a sed autem dolorem nesciunt itaque 
                                                rem at voluptates quae? Qui, mollitia!</p>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ConstructionImage} className="w-100"/>
                                    </div>
                                    <div className="service-body">
                                        <div className="service-item">
                                        <h3>Kolkata Projects</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempore quas, 
                                                non similique saepe nemo, natus sit qui, a sed autem dolorem nesciunt itaque 
                                                rem at voluptates quae? Qui, mollitia!</p>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ConstructionImage} className="w-100"/>
                                    </div>
                                    <div className="service-body">
                                        <div className="service-item">
                                        <h3>Kolkata Projects</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempore quas, 
                                                non similique saepe nemo, natus sit qui, a sed autem dolorem nesciunt itaque 
                                                rem at voluptates quae? Qui, mollitia!</p>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="section-5 py-5">
                    <div className="container">
                        <div className="section-header text-center">
                            <span>testimonials</span>
                            <h2>What people are saying about us</h2>
                            <p>We offere Lorem ipsum dolor sit amet consectetur adipisicing 
                            Eaque velit perspiciatis nam necessitatibus rerum.</p>
                        </div>
                        <Swiper
                        modules={[ Pagination ]}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        >
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-5">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </div>
                                    <div className="content pt-4 pb-2">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aut,
                                            hic voluptates enim repudiandae dignissimos expedita in deleniti,
                                            nulla commodiconsectetur cum saepe architecto! Obcaecati nobis modi
                                            recusandae quisquam quibusdam?</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex meta">
                                        <div>
                                            <img src={AvatarImage} alt="" width={50}/>
                                        </div>
                                        <div className="ps-3">
                                            <div className="name">Tahsin Raza</div>
                                            <div>Software Developer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-5">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </div>
                                    <div className="content pt-4 pb-2">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aut,
                                            hic voluptates enim repudiandae dignissimos expedita in deleniti,
                                            nulla commodiconsectetur cum saepe architecto! Obcaecati nobis modi
                                            recusandae quisquam quibusdam?</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex meta">
                                        <div>
                                            <img src={AvatarImage} alt="" width={50}/>
                                        </div>
                                        <div className="ps-3">
                                            <div className="name">Tahsin Raza</div>
                                            <div>Software Developer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-5">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </div>
                                    <div className="content pt-4 pb-2">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aut,
                                            hic voluptates enim repudiandae dignissimos expedita in deleniti,
                                            nulla commodiconsectetur cum saepe architecto! Obcaecati nobis modi
                                            recusandae quisquam quibusdam?</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex meta">
                                        <div>
                                            <img src={AvatarImage} alt="" width={50}/>
                                        </div>
                                        <div className="ps-3">
                                            <div className="name">Tahsin Raza</div>
                                            <div>Software Developer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-5">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </div>
                                    <div className="content pt-4 pb-2">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aut,
                                            hic voluptates enim repudiandae dignissimos expedita in deleniti,
                                            nulla commodiconsectetur cum saepe architecto! Obcaecati nobis modi
                                            recusandae quisquam quibusdam?</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex meta">
                                        <div>
                                            <img src={AvatarImage} alt="" width={50}/>
                                        </div>
                                        <div className="ps-3">
                                            <div className="name">Tahsin Raza</div>
                                            <div>Software Developer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                {/* blog section  */}
                <section className="section-6 bg-light py-5">
                    <div className="container">
                        <div className="section-header text-center">
                        <span>blog and news</span>
                        <h2>Articles & Blog Post</h2>
                        <p>We offer Lorem ipsum dolor sit amet consectetur adipisicing. Eaque velit perspiciatis nam necessitatibus rerum.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center pt-3">
                            <div className="col-md-3">
                                <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImage} alt="Blog post" className="w-100" />
                                </div>
                                <div className="card-body p-4">
                                    <div className="mb-3">
                                    <a href="#" className="title">Dummy blog title</a>
                                    </div>
                                    <a href="#" className="btn btn-primary small">Read More</a>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImage} alt="Blog post" className="w-100" />
                                </div>
                                <div className="card-body p-4">
                                    <div className="mb-3">
                                    <a href="#" className="title">Dummy blog title</a>
                                    </div>
                                    <a href="#" className="btn btn-primary small">Read More</a>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImage} alt="Blog post" className="w-100" />
                                </div>
                                <div className="card-body p-4">
                                    <div className="mb-3">
                                    <a href="#" className="title">Dummy blog title</a>
                                    </div>
                                    <a href="#" className="btn btn-primary small">Read More</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Home