import React from 'react'
import '../TestimonialComponent/Testimonial.css'
import testimonialsbackimage1 from '../TestimonialComponent/Testimonialimg/testimonialsbackimage1.jpg'
import testimonialsbackimage2 from '../TestimonialComponent/Testimonialimg/testimonialsbackimage5.jpg'
import testimonialsbackimage3 from '../TestimonialComponent/Testimonialimg/testimonialsbackimage4.jpg'

import testimonialprofile1 from '../TestimonialComponent/Testimonialimg/people5.jpg'
import testimonialprofile2 from '../TestimonialComponent/Testimonialimg/people2.jpg'
import testimonialprofile3 from '../TestimonialComponent/Testimonialimg/people4.jpg'


function Testimonial() {
  return<> 
 <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner testimonial-cardcontainer">
    <div className="carousel-item testimonial-card active">
      <img src={testimonialsbackimage1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption testimonial-text d-none d-md-block">
      <img src={testimonialprofile1} className='peopleimg' alt="..."/>
        <h5 className='head-testimonial'>Ms.Medosa</h5>
        <p className='para-testimonial'>"The freshest fruits delivered to my doorstep! Fruit Blast is my go-to for healthy and delicious snacks."</p>
      </div>
    </div>
    <div className="carousel-item testimonial-card">
      <img src={testimonialsbackimage2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption testimonial-text d-none d-md-block">
      <img src={testimonialprofile3} className='peopleimg' alt="..."/>
        <h5>Mr.Robert</h5>
        <p>"Amazing quality and great prices! I love how easy it is to shop for fruits on Fruit Blast."</p>
      </div>
    </div>
    <div className="carousel-item testimonial-card">
      <img src={testimonialsbackimage3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption testimonial-text d-none d-md-block">
      <img src={testimonialprofile2} className='peopleimg' alt="..."/>
        <h5>Ms.Davincy</h5>
        <p>Some representative placeholder content for the third slide."Fruit Blast has transformed my fruit shopping experience—fast, convenient, and super fresh!"</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </>
}

export default Testimonial