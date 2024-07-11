import "./Experience.css";
import Navbar from "./Navbar";
import boy2Image from "./img/mechanic2.jpeg"
import boy1Image from "./img/mechanic1.jpeg"
import boy3Image from "./img/mechanic.jpeg"
import oms2Image from "./img/boy2.jpeg"
import oms1Image from "./img/ojt1.jpeg"
import oms3Image from "./img/ojt.jpeg"
import oms4Image from "./img/ojt2.jpeg"
import oms5Image from "./img/ojt3.jpeg"
import oms6Image from "./img/ojt4.jpeg"
const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="bg-secondary bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Experience Page
              </h1>
            </div>
          </div>
        </div>
      </div>

    <div className="exp">
    <div className="container">
          <hr/>
          <div className="row mb-5">
            <h3 className=" text-light text-center">On-the Job Training</h3>
            <hr />
          <div className="col-lg-4">
          <img className="two" src={oms2Image} />
          <h4>CCTV installing</h4>
          </div>
          <div className="col-lg-4">
          <img className="one" src={oms1Image} />
          <h4> CCTV cabling</h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={oms3Image} />
          <h4>CCTV cabling</h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={oms4Image} />
          <h4>Laptop LCD replace</h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={oms5Image} />
          <h4>Printer Repair</h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={oms6Image} />
          <h4>Replace Motherboard</h4>
          </div>
          </div>
          <hr/>
          <div className="row mb-5">
            <h3 className=" text-light text-center">Me as Mechanic</h3>
            <hr />
          <div className="col-lg-4">
          <img className="two" src={boy2Image} />
          <h4>Top overhaul</h4>
          </div>
          <div className="col-lg-4">
          <img className="one" src={boy1Image} />
          <h4>wiring spare lights</h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={boy3Image} />
          <h4>First trophy in legal race</h4>
          </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default Experience;
