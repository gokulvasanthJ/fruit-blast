import React from 'react'
import brand1 from '../BrandsComponent/brandimg/28.png'
import brand2 from '../BrandsComponent/brandimg/27.png'
import brand3 from '../BrandsComponent/brandimg/29.png'
import brand4 from '../BrandsComponent/brandimg/30.png'
import brand5 from '../BrandsComponent/brandimg/32.png'

import '../BrandsComponent/Brand.css'




function Brand() {
  return<>
  <div className="brand-container">

  <h6>“Practical Pieces Made With Thoughtful,<br/>
  Design Treatments”</h6>

  <div class="row row-cols-1 row-cols-md-5 g-3">
    
  <div class="col">
  <div class="card h-100 brand-img">
  <img src={brand1} class="card-img-top" alt="..."/>
  </div>
  </div> 

  <div class="col">
  <div class="card h-100 brand-img">
  <img src={brand2} class="card-img-top" alt="..."/>
  </div>
  </div> 

  <div class="col">
  <div class="card h-100 brand-img">
  <img src={brand3} class="card-img-top" alt="..."/>
  </div>
  </div> 

  <div class="col">
  <div class="card h-100 brand-img">
  <img src={brand4} class="card-img-top" alt="..."/>
  </div>
  </div> 

  <div class="col">
  <div class="card h-100 brand-img">
  <img src={brand5} class="card-img-top" alt="..."/>
  </div>
  </div> 

</div>
  </div>

  </>
}

export default Brand