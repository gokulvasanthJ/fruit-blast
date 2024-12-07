import React from "react";
import banner1 from "./crouselsimg/peach.jpg";
import banner2 from "./crouselsimg/apple.jpg";
import "../CrouselComponent/Crousels.css";

function Crousels() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="..." />

            <div className="carousel-caption carousal-text ">
              <h1>A better alternatives than fast foods !</h1>
              <p>
                It is a long established fact that a reader will be
                dikkkstracted by the page when looking of using Lorem Ipsum is
                that it has a more-or-lessnormal distribution.
              </p>
              <button className="shopnow-button">Shop Now</button>
            </div>
          </div>

          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
              <h1>We Grow and Sell The Best Fruits !</h1>
              <p>
                It is a long established fact that a reader will be
                dikkkstracted by the page when looking of using Lorem Ipsum is
                that it has a more-or-lessnormal distribution.
              </p>
              <button classNameName="shopnow-button">Shop Now</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Crousels;
