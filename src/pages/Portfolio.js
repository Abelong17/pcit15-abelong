import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage2 from "./img/Calcu (2).png"

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="bg-secondary bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Portfolio 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <div className="row text-light mt-5">
            <h3>Projects</h3>
            <hr />
          <div className="col">
          <img className="one" src={calcuImage2} />
          <h4 className="mt-5">Calculator Project</h4>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
