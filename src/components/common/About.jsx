import React from 'react'
import AboutImage from '../../assets/images/about-us.jpg'

const About = () => {
  return (
    <section className="section-2 py-5">
        <div className="container py-3">
            <div className="row">
                <div className="col-md-6">
                    <img src={AboutImage} className="w-100" />
                </div>
                <div className="col-md-6">
                    <span>about us</span>
                    <h2>Crafting structures that last a lifetime</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus enim molestiae maxime officia nihil amet eaque illo provident, quibusdam excepturi quam et exercitationem, rem inventore quidem laborum. Accusamus, odio fugit?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempora quod esse molestiae, necessitatibus laborum nisi laboriosam dolorem eum? Temporibus animi fugiat ipsa vitae ducimus neque maxime harum repellat voluptatibus?</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About