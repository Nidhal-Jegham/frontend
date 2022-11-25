import React, { useEffect, useState } from "react";
import "../styles/aboutus.scss";
import { Link } from "react-router-dom";
import CountDown from "./countdown";

const AboutUs = ({ loading, setLoading }) => {
  const componentDidMount = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [team, setTeam] = useState([]);
  const [about, setAbout] = useState([]);

  useEffect(() => {
    setLoading(false);
    fetch(`${process.env.REACT_APP_API_URL}/home/teams`)
      .then((res) => res.json())
      .then((data) => {
        setTeam(data);
      });
    fetch(`${process.env.REACT_APP_API_URL}/home`)
      .then((res) => res.json())
      .then((data) => {
        setAbout(data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) return null;

  return (
    <div>
      <section class="values">
        <h3>Our values</h3>

        <div class="container">
          <div className="d-flex justify-content-center">
            <div class="row d-flex align-items-center">
              <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
                <div class="icon-box ">
                  <div class="icon">
                    <i class="bi bi-globe2"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Diplomacy</a>
                  </h4>
                  <p class="description">
                    We value the art of tact and diplomacy and aim to perfect
                    the negotiation and communication skills of students.
                  </p>
                </div>
              </div>

              <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
                <div class="icon-box icon-box-blue">
                  <div class="icon">
                    <i class="bx bx-lemon"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Innovation</a>
                  </h4>
                  <p class="description">
                    We aim to develop a common sense on innovation in order to
                    develop the critical and solution oriented mindsets of
                    students.
                  </p>
                </div>
              </div>

              <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
                <div class="icon-box icon-box-blue">
                  <div class="icon">
                    <i class="bx bx-star"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Cooperation</a>
                  </h4>
                  <p class="description">
                    We value teamwork and aim to develop team players in order
                    to exchange ideas, propel forward together and to align the
                    efforts with our partners.{" "}
                  </p>
                </div>
              </div>

              <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
                <div class="icon-box icon-box-blue">
                  <div class="icon">
                    <i class="bx bx-rocket"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Leadership</a>
                  </h4>
                  <p class="description">
                    We aim to develop future leaders with numerous fundamental
                    skills that will pave the way for their success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      <section className="about-us">
        <div className="container about-us ">
          <div className="section-title"></div>
          <div className="row d-flex align-items-center ">
            {" "}
            <div className="col-md-5 order-1 order-md-2">
              <img src={about[0].src} className="img-fluid" alt />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1  ">
              <a href="https://www.facebook.com/TIMUN.TBS" target="_blank">
                <h3>Who we are</h3>
              </a>

              <p className="fst-italic">{about[0].text}</p>

              <ul>
                <a
                  href="https://www.facebook.com/TIMUN.TBS"
                  target="_blank
                  "
                  className="btn-get-started "
                >
                  Learn More
                </a>
              </ul>
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <img src={about[1].src} className="img-fluid" alt />
            </div>
            <div className="col-md-6   pt-5 ">
              <a href="https://www.facebook.com/TIMUN.TBS" target="_blank">
                <h3>Our Vision</h3>
              </a>
              <p className="fst-italic">{about[1].text}</p>

              <ul>
                <a
                  href="https://www.facebook.com/TIMUN.TBS"
                  target="_blank
                  "
                  className="btn-get-started "
                >
                  Learn More
                </a>
              </ul>
            </div>
          </div>
          <div className="row d-flex align-items-center d-flex align-items-center">
            <div className="col-md-5 order-1 order-md-2">
              <img src={about[2].src} className="img-fluid" alt />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <a href="https://www.facebook.com/TIMUN.TBS" target="_blank">
                <h3>Our Mission</h3>
              </a>
              <p className="fst-italic">{about[2].text}</p>

              <ul>
                <a
                  href="https://www.facebook.com/TIMUN.TBS"
                  target="_blank
                  "
                  className="btn-get-started "
                >
                  Learn More
                </a>
              </ul>
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div className="col-md-5">
              <img src={about[3].src} className="img-fluid" alt />
            </div>
            <div className="col-md-7 pt-4">
              <Link to="/events">
                {" "}
                <h3>Our Events</h3>
              </Link>

              <p className="fst-italic">{about[3].text}</p>

              <ul>
                <a href className="btn-get-started ">
                  <Link onClick={componentDidMount} to="/events">
                    Learn More
                  </Link>
                </a>
              </ul>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-5 order-1 order-md-2">
              <img src={about[4].src} className="img-fluid" alt />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <Link to="/sguides">
                {" "}
                <h3>Our Study Guides</h3>
              </Link>

              <p className="fst-italic">{about[5].text}</p>

              <ul>
                <a href className="btn-get-started ">
                  <Link to="/sguides">Learn More</Link>
                </a>
              </ul>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-5">
              <img src={about[5].src} className="img-fluid" alt />
            </div>
            <div className="col-md-7 pt-5">
              <Link to="/articles">
                {" "}
                <h3>Our Articles</h3>
              </Link>
              <p className="fst-italic">
                TIMUN TBS contributes to the academic world with numerous
                articles. On subjects ranging from cults to genetic engineering,
                the creativity of our academics is limitless.
              </p>
              <ul>
                <a
                  onClick={componentDidMount}
                  href
                  className="btn-get-started "
                >
                  <Link to="/articles"> Learn More</Link>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr></hr>
      <section class="breadcrumbs">
        <div class="container board">
          <h3>Our Executive Board</h3>
        </div>
      </section>
      <section className="team">
        <div className="container d-flex justify-content-center">
          <div className="row d-flex align-items-center ">
            {team.map((member) => {
              return (
                <div className="col-lg-3  ">
                  <div className="member">
                    <div className="member-img d-flex justify-content-center">
                      <img src={member.src} className="img-fluid" alt />
                      <div className="social">
                        <a href={member.accounts.facebook} target="_blank">
                          <i className="bi bi-facebook" />
                        </a>
                        <a href={member.accounts.insta} target="_blank">
                          <i className="bi bi-instagram" />
                        </a>
                        <a href={member.accounts.linkedin} target="_blank">
                          <i className="bi bi-linkedin" />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>{member.name}</h4>
                      <span>{member.position}</span>
                      <p>{member.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
