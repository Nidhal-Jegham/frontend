import React from "react";
import "../styles/footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const componentDidMount = () => {
    window.scrollTo({ top: 0 });
  };
  const componentDidMountAbout = () => {
    window.scrollTo({ top: 1250, behavior: "smooth" });
  };
  const componentDidMountContact = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container d-flex  justify-content-center">
          <div className="row ">
            <div className="col-lg-12">
              <h4>Our Partners</h4>
              <div className="d-flex justify-content-around align-items-stretch  ">
                <div className="row d-flex justify-content-center align-items-stretch">
                  <div className="col-lg-2">
                    <img className="image" src="/assets/img/warda.png"></img>
                  </div>
                  <div className="col-lg-2">
                    <img
                      className="image"
                      src="https://res.cloudinary.com/daihyew9d/image/upload/v1671370734/logo_website_11zon_ytncp1.png"
                    ></img>
                  </div>{" "}
                  <div className="col-lg-2">
                    <img className="image" src="/assets/img/wto.png"></img>
                  </div>{" "}
                  <div className="col-lg-2">
                    <img
                      className="image"
                      src="https://res.cloudinary.com/daihyew9d/image/upload/v1671654601/Logo_TIMUN_1__11zon_1_hnqyju_0f2a76.png"
                    ></img>
                  </div>{" "}
                  <div className="col-lg-2">
                    <img
                      className="image"
                      src="https://res.cloudinary.com/daihyew9d/image/upload/v1671652943/undp_logo_1_mgppzz.png"
                    ></img>
                  </div>{" "}
                  <div className="col-lg-2">
                    <img className="image" src="/assets/img/photolab.png"></img>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links ">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                </li>
                <li onClick={componentDidMountAbout}>
                  <i className="bx bx-chevron-right" />
                  <Link className="navbar-comp " to="">
                    About Us
                  </Link>
                </li>
                <li onClick={componentDidMount}>
                  <i className="bx bx-chevron-right" />
                  <Link className="navbar-comp" to="/events">
                    Events
                  </Link>
                </li>
                <li onClick={componentDidMount}>
                  <i className="bx bx-chevron-right" />
                  <Link className="navbar-comp " to="/sguides">
                    Study Guides
                  </Link>
                </li>

                <li onClick={componentDidMount}>
                  <i className="bx bx-chevron-right" />
                  <Link className="navbar-comp" to="/articles">
                    Articles
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Bir El Kassaa 2059, <br />
                Tunisia 2059 El Mourouj, Tunisia
                <br />
                <br />
                <br />
                <strong>Phone:</strong> +216 54 982 651
                <br />
                <strong>Email:</strong>{" "}
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  target="_blank"
                >
                  timun.tbs@gmail.com
                </a>
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-36 footer-info">
              <h3>About TIMUN TBS</h3>
              <p>
                TIMUN TBS is a chapter founded by a group of students. We aim to
                provide TBS students with the necessary skills and experience to
                become exemplary leaders.
              </p>
              <div className="social-links mt-3">
                <a
                  href="https://www.facebook.com/TIMUN.TBS"
                  target="_blank"
                  className="facebook"
                >
                  <i className="bx bxl-facebook" />
                </a>
                <a
                  href="https://www.instagram.com/timuntbs/?hl=en"
                  target="_blank"
                  className="instagram"
                >
                  <i className="bx bxl-instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/company/timun-tbs/mycompany/"
                  target="_blank"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyrights{" "}
          <strong>
            <span>TIMUN TBS 2023</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/nidhal-jegham-b05840224/"
            target="_blank"
          >
            Nidhal Jegham
          </a>
          {"   "}&{"   "}
          <a
            href="https://www.linkedin.com/in/wael-dghim-99b807235/"
            target="_blank"
          >
            {" "}
            Wael Dghim
          </a>
          <div className="credits">
            <a href="https://docs.google.com/document/d/1vLVCmh9LQIbLNTE18pddBSKer9-5ZpqwIFlT1rfFAV4/edit?usp=sharing">
              1036
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
