import React from "react";
import "../ProductPackage/ProductPackage.css";
import kiviimg from "../ProductPackage/ProductPackageimg/kivi.png";

function ProductPackage() {
  return<>
  <div className="productpackage">
    <div className="card package mb-3" >
      <div className="row g-0">
        <div className="col-md-5">
          <img src={kiviimg} className="img-fluid rounded-start" alt="Kivi" />
        </div>
        <div className="col-md-5">
          <div className="card-body productcard">
            <h1 className="card-title">On the packaging of your products</h1>
            <p className="card-text" style={{ color: "black"}}>
            Our fruits deserve packaging as fresh as they are. We use eco-friendly, vibrant designs to keep them safe and visually stunning. Freshness and sustainability, hand in hand!
            </p>
            
              <button className="btn btn-success">Shop Now</button>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
}

export default ProductPackage;
