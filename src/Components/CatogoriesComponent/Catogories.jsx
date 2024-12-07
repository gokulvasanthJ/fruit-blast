import React from "react";
import "../CatogoriesComponent/Catogories.css";
import pageseparator from "../pageseparator/pageseparator-fruit.jpg";
import fruitpic1 from "../CatogoriesComponent/Catogoriesimgs/strawberry.jpg";
import fruitpic2 from "../CatogoriesComponent/Catogoriesimgs/grapes.jpg";
import fruitpic3 from "../CatogoriesComponent/Catogoriesimgs/pomo.jpg";

function Catogories() {
  return (
    <>
      <div className="catogories-container">
        <h1>Categories Features</h1>
        <img className="pageseparator-img" src={pageseparator} alt="" />

        <div className="row catagories-imgcontainer row-cols-1 row-cols-md-3 g-5">
          <div className="col">
            <div className="card h-100">
              <img src={fruitpic1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Strawberry</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src={fruitpic2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Grapes</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src={fruitpic3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pomogranate</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catogories;
