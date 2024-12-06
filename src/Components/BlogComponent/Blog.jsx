import React from 'react'
import blogimg1 from '../BlogComponent/blog-img/fruitbowl.jpg'
import blogimg2 from '../BlogComponent/blog-img/mixedfruit.jpg'
import blogimg3 from '../BlogComponent/blog-img/strawberrybowl.jpg'
import pageseparator from '../pageseparator/pageseparator-fruit.jpg'

import '../BlogComponent/Blog.css'


function Blog() {
  return<>
  <div className="blog-container">
  <h1>Blog</h1>
  <img  className='pageseparator-img' src={pageseparator} alt="" />
  </div>
  <div className="card-group">
  
  <div className="card">
    <img src={blogimg1} className="blogimg card-img-top" alt="..."/>
    <div className="card-body">
    <div className="carddate">
        <p>Oct 05, 2023</p>
        <p>IN Blog</p>
      </div>
    <div className="card-body blogcard">

      
            <h1 className="card-title">Tincidunt ut laoreet dolore</h1>
            <p className="card-text" style={{ color: "black"}}>Our fruits deserve packaging as fresh as  are.use eco-friendly.Freshness and sustainability, hand in hand!</p>
            <button className="btn btn-dark">Read More</button>
          </div>
    </div>
  </div>
  <div className="card">
    <img src={blogimg2} className=" blogimg card-img-top" alt="..."/>
    <div className="card-body">
    <div className="carddate">
        <p>Oct 05, 2023</p>
        <p>IN Blog</p>
      </div>
    <div className="card-body blogcard">
    
            <h1 className="card-title">Nam liber tempor cum</h1>
            <p className="card-text" style={{ color: "black"}}>Our fruits  packaging as fresh as they are. We use eco-friendly,Freshness and sustainability, hand in hand!</p>
            <button className="btn btn-dark">Read More</button>
          </div>
    </div>
  </div>
  <div className="card">
    <img src={blogimg3} className=" blogimg card-img-top" alt="..."/>
    <div className="card-body">
    <div className="carddate">
        <p>Oct 05, 2023</p>
        <p>IN Blog</p>
      </div>
    <div className="card-body blogcard">
    
            <h1 className="card-title">Ut aliquip ex ea commodo</h1>
            <p className="card-text" style={{ color: "black"}}>Our fruits deserve packaging as fresh as they are.The fruit Freshness and sustainability, hand in hand!</p>
            <button className="btn btn-dark">Read More</button>
          </div>
    </div>
  </div>
</div>
  </>
}

export default Blog