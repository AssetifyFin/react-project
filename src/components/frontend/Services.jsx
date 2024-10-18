import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import ServiceImage from '../../assets/images/construction1.jpg';

const Services = () => {
  return (
    <>
        <Header/>
            <Hero preHeading='Quality. Integrity. Value.' 
                heading='Services'
                text='We excel at transforming vision into reality <br/> through outstanding craftsmanship and prices
                Tahsin Raza shaikh'
            />

            <section className="section-3 bg-light py-5">
                <div className="container py-2">
                    <div className="section-header text-center">
                        <span>Our Services</span>
                        <h2>Our Construction Services</h2>
                        <p>We offere Lorem ipsum dolor sit amet consectetur adipisicing 
                        blanditiis fugit illum corrupti ipsam incidunt repellat omnis eveniet possimus.
                        Eaque velit perspiciatis nam necessitatibus rerum.</p>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-4 col-lg-4">
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
                        <div className="col-md-4 col-lg-4">
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
                        <div className="col-md-4 col-lg-4">
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
                        <div className="col-md-4 col-lg-4">
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
                        <div className="col-md-4 col-lg-4">
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
                        <div className="col-md-4 col-lg-4">
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
        <Footer/>
    </>
  )
}

export default Services