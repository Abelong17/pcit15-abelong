import "./Contact.css";
import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLocation, faNewspaper, faUserNinja } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div id="Contact-info" className="bg-secondary bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Contact Page
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section id="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <a href="https://www.facebook.com/profile.php?id=100010322260929">
                <h1>
                <FontAwesomeIcon className="icons" icon={faFacebook}/>
                </h1>
              </a>
            </div>
          </div>
        </div>
    </section>

 <footer class="footer text-light fixed-bottom pt-3" id="footer">
    <div class="container">
        <div class="row al">
            <div class="col-md-4 col-sm-6 text-lg-start text-center">
                <a class="navbar-brand" href="#">
                </a>
                <h5 class="mt-4"><FontAwesomeIcon className="me-1" icon={faUserNinja} />About Us</h5>
                <p>Now i realize i should focus more on my future and building my career since life is not all about love </p>
            </div>
            <div class="col-md-4 col-sm-6 text-lg-start text-center">
                <h5><FontAwesomeIcon className="me-1" icon={faLocation} /> Address </h5>
                <p>Poblacion,Cauayan<br/>Negros,Occidental Philippines</p>
                <p>Email: stephenabelong@gmail.com<br/>Phone: 09162636354</p>
            </div>
            <div class="col-md-4 col-sm-6 text-lg-start  text-center">
                <h5><FontAwesomeIcon className="me-1" icon={faNewspaper} />Newsletter</h5>
                <form>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control"/>
                        <button class="btn btn-outline-light" type="button" id="button-addon2">Subscribe</button>
                    </div>
                </form>
                <p>Delete me, block me, unfriend me, you can even unlove me, but you can never unmemory me</p>
            </div>
        </div>
    </div>
</footer>

    </>
  );
};

export default Contact;
