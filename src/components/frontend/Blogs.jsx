import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import BlogImage from '../../assets/images/construction3.jpg';

const Blogs = () => {
  return (
    <>
        <Header/>
            <main>
                <Hero preHeading='Quality. Integrity. Value.' 
                    heading='Blogs'
                    text='We excel at transforming vision into reality <br/> through outstanding craftsmanship and prices
                        Tahsin Raza shaikh'
                />
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

export default Blogs