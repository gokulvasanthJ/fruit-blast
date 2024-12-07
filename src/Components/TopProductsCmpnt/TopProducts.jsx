import React from 'react'
import '../TopProductsCmpnt/TopProducts.css'
import pageseparator from '../pageseparator/pageseparator-fruit.jpg'
import topfuit1 from '../TopProductsCmpnt/TopProductsimg/passionfruit.jpg'
import topfuit2 from '../TopProductsCmpnt/TopProductsimg/litchi.jpg'
import topfuit3 from '../TopProductsCmpnt/TopProductsimg/pears.jpg'
import topfuit4 from '../TopProductsCmpnt/TopProductsimg/blueberry.jpg'




function TopProducts() {
  return<>


<div className="topproducts-container">    

<h1>Top Products</h1>
  <img  className='pageseparator-img' src={pageseparator} alt="" />
  



<div className="row topproductsimg-container row-cols-1 row-cols-md-4 g-4">
<div className="col">
  <div className="card">
    <img src={topfuit1} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Passion fruit</h5>
      <p>$10.90 <span  style={{color:'grey',textDecoration:'line-through'}}>$11.90</span></p>
    </div>
  </div>
</div>
<div className="col">
  <div className="card">
    <img src={topfuit2} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Litchi</h5>
      <p>$9.45<span style={{color:'grey',textDecoration:'line-through'}}>$18.60</span></p>
    </div>
  </div>
</div>
<div className="col">
  <div className="card">
    <img src={topfuit3} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Pear</h5>
      <p>$12.90</p>
    </div>
  </div>
</div>
<div className="col">
  <div className="card">
    <img src={topfuit4} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">BlackCurrent</h5>
      <p>$11.90</p>
    </div>
  </div>
</div>
</div>
</div>

  
  </>
}

export default TopProducts