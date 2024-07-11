import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/tep2.jpeg"

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="bg-secondary bg-gradient">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Aboutpage
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="col">
            <div className="card shadow p-5 ">
              <div className="row">
              <div className="col-lg-4">
              <center><img src={myImage} /></center>
              </div>
              <div className="col-lg-8">
                <div className="card box shadow mb-3 p-3">
                <h4 className="text-dark"><span>About Me</span></h4>
              <p> Im Stephen T. Abelong 23 years old from Brgy Poblacion,Cauayan Neg.Occ Taking a Bachelor of Science in Information Technology (BSIT) at Central Philippines State University (CPSU). I have an interest in PC Repair </p>
              <p> I am also a mechanic and that my source of my income and allowance </p>
                </div>
                <div className="card box shadow p-3">
                <h4 className="text-dark"><span>Academic</span> </h4>
              <p> Primary:St.Columban's Academy (SCA) S.Y:2014 <br /> Secondary: Junior High: St.Columban's Academy (SCA) S.Y:2017 <br />Senior High: St.Columban's Academy (SCA) S.Y:2020 <br />Tertiary: Central Philippines State University (CPSU)SY:2024</p>
              <p> </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
