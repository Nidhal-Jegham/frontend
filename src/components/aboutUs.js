import React, { useEffect, useState } from "react";
import "../styles/aboutus.scss";
import { Link } from "react-router-dom";
import CountDown from "./countdown";

const AboutUs = ({ loading, setLoading, team, about }) => {
  const componentDidMount = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
                    <a href>Diplomacy</a>
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
                    <i class="bi bi-lightbulb"></i>
                  </div>
                  <h4 class="title">
                    <a href>Innovation</a>
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
                    <a href>Cooperation</a>
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
                    <a href>Leadership</a>
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
        {" "}
        <div className="container about-us ">
          <div className="row d-flex align-items-center ">
            {" "}
            <div className="col-md-5 order-1 order-md-2">
              <img
                src="https://res.cloudinary.com/daihyew9d/image/upload/v1671369464/family-2_11zon_njetrf.jpg"
                className="img-fluid aboutIMG"
                alt
              />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1  ">
              {" "}
              <div>
                {" "}
                <a href="https://www.facebook.com/TIMUN.TBS" target="_blank">
                  <h3>Who We Are</h3>{" "}
                </a>
              </div>
              <p className="fst-italic">
                TIMUN TBS is a student organization under the direct supervision
                of an active community operating under the instructions of the
                United Nations. Our club seeks to strengthen the skills of
                students such as public speaking, academic knowledge,
                international relations, and leadership.
              </p>
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
              <img
                src="https://res.cloudinary.com/daihyew9d/image/upload/v1671366101/missionfamily_11zon_ugyire.jpg"
                className="img-fluid aboutIMG"
                alt
              />
            </div>
            <div className="col-md-6   pt-5 ">
              <div>
                {" "}
                <a
                  href="https://www.facebook.com/TIMUN.TBS"
                  target="_blank
        "
                >
                  <h3>Our Vision</h3>{" "}
                </a>
              </div>
              <p className="fst-italic">
                To provide every TBS student with the fundamental skills to
                integrate and Lead the international Community when facing
                global Challenges.
              </p>

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
        </div>
        <div className="container about-us ">
          <div className="row d-flex align-items-center ">
            {" "}
            <div className="col-md-5 order-1 order-md-2">
              <img
                src="https://res.cloudinary.com/daihyew9d/image/upload/v1671371436/green_11zon_1_bcmiug.jpg"
                className="img-fluid aboutIMG"
                alt
              />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1  ">
              {" "}
              <div>
                {" "}
                <a href="https://www.facebook.com/TIMUN.TBS" target="_blank">
                  <h3>Our Mission</h3>{" "}
                </a>
              </div>
              <p className="fst-italic">
                TIMUN TBS is a student organization under the direct supervision
                of an active community operating under the instructions of the
                United Nations. Our club seeks to strengthen the skills of
                students such as public speaking, academic knowledge,
                international relations, and leadership.
              </p>
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
              <img
                src="https://res.cloudinary.com/daihyew9d/image/upload/v1671371209/events_11zon_1_1_ku9ozw.jpg"
                className="img-fluid aboutIMG"
                alt
              />
            </div>
            <div className="col-md-6   pt-5 ">
              <div>
                {" "}
                <Link to="/events" onClick={componentDidMount}>
                  <h3>Our Events</h3>{" "}
                </Link>
              </div>
              <p className="fst-italic">
                For those who are interested in the realm of diplomacy, eager to
                test their public speaking and negotiation skills, want to
                expand their academic knowledge and meet interesting people;
                coming to our events is the perfect opportunity for you to
                experience that and more.
              </p>

              <ul>
                <Link
                  onClick={componentDidMount}
                  to="/events"
                  className="btn-get-started "
                >
                  Learn More
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="container about-us ">
          <div className="row d-flex align-items-center ">
            {" "}
            <div className="col-md-5 order-1 order-md-2">
              <img
                src="https://res.cloudinary.com/daihyew9d/image/upload/v1671366029/committee_11zon_isbsxt.jpg"
                className="img-fluid aboutIMG"
                alt
              />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1  ">
              {" "}
              <div>
                {" "}
                <Link onClick={componentDidMount} to="/sguides">
                  <h3>Our Study Guides</h3>{" "}
                </Link>
              </div>
              <p className="fst-italic">
                A deep dive into the world of politics, economics, and many
                more. In our study guides, we tackle numerous subjects with high
                informative value and immaculate academic skills.
              </p>
              <ul>
                <Link
                  onClick={componentDidMount}
                  to="/sguides"
                  className="btn-get-started "
                >
                  Learn More
                </Link>
              </ul>
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <img
                src="https://res.cloudinary.com/daihyew9d/image/upload/v1671371495/magazines_11zon_1_zjhimo.jpg"
                className="img-fluid aboutIMG"
                alt
              />
            </div>
            <div className="col-md-6   pt-5 ">
              <div>
                {" "}
                <Link onClick={componentDidMount} to="/articles">
                  <h3>Our Articles</h3>{" "}
                </Link>
              </div>
              <p className="fst-italic">
                TIMUN TBS contributes to the academic world with numerous
                articles. On subjects ranging from cults to genetic engineering,
                the creativity of our academics is limitless.
              </p>

              <ul>
                <Link
                  onClick={componentDidMount}
                  to="/articles"
                  className="btn-get-started "
                >
                  Learn More
                </Link>
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
