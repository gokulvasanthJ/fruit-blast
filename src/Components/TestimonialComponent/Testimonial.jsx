import React from 'react'
import '../TestimonialComponent/Testimonial.css'
import testimonialsbackimage1 from '../TestimonialComponent/Testimonialimg/testimonialsbackimage1.jpg'
import testimonialsbackimage2 from '../TestimonialComponent/Testimonialimg/testimonialsbackimage2.jpg'
import testimonialsbackimage3 from '../TestimonialComponent/Testimonialimg/testimonialsbackimage4.jpg'

import testimonialprofile1 from '../TestimonialComponent/Testimonialimg/people5.jpg'
import testimonialprofile2 from '../TestimonialComponent/Testimonialimg/people2.jpg'
import testimonialprofile3 from '../TestimonialComponent/Testimonialimg/people4.jpg'


function Testimonial() {
  return<>
 <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner testimonial-cardcontainer">
    <div class="carousel-item testimonial-card active">
      <img src={testimonialsbackimage1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption testimonial-text d-none d-md-block">
      <img src={testimonialprofile1} class='peopleimg' alt="..."/>
        <h5 class='head-testimonial'>First slide label</h5>
        <p class='para-testimonial'>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item testimonial-card">
      <img src={testimonialsbackimage2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption testimonial-text d-none d-md-block">
      <img src={testimonialprofile3} class='peopleimg' alt="..."/>
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item testimonial-card">
      <img src={testimonialsbackimage3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption testimonial-text d-none d-md-block">
      <img src={testimonialprofile2} class='peopleimg' alt="..."/>
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </>
}

export default Testimonial