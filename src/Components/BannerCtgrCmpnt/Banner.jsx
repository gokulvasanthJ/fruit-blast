import React from 'react'
import '../BannerCtgrCmpnt/Banner.css'
import banner1 from'../BannerCtgrCmpnt/bannerimg/bannerimg1.jpg'
import banner2 from'../BannerCtgrCmpnt/bannerimg/bannerimg2.jpg'


function Banner() {
  return<>
  <div className="bannermain-container">
  <div className="container-fluid">

    <div className="banner-container">
        <img src={banner1} alt="" className="banner" />
        <div className="banner-text">
            <h3 className="banner-heading">For a better Life</h3>
            <p className="banner-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem he industry's standard.</p>
            <button className='banner-button'>Shop Now</button>
        </div>
    
    </div>
    
    <div className="banner-container">

        <img src={banner2} alt="" className="banner" />
        <div className="banner-text">

<h3 className="banner-heading">For a better Life</h3>
<p className="banner-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem he industry's standard.</p>
<button className='banner-button'>Shop Now</button>

    </div>
    
    </div>
    
  </div>
  </div>

  </>
}

export default Banner