import React from "react";
const Studyguide = (props) => {
  const date = new Date(props.studyguide.date).toString().substring(0, 16);
  return (
    <div className="col-md-12   d-flex justify-content-center align-items-stretch">
      <section id="sguide" className="sguide">
        <div className="container d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="col-md-10">
              <article className="entry">
                <h2 className="entry-title">
                  <a target="_blank" href={props.studyguide.full}>
                    {props.studyguide.title}
                  </a>
                </h2>
                <h6 className="entry-subtitle">
                  <a target="_blank" href={props.studyguide.full}>
                    {props.studyguide.organ}
                  </a>
                </h6>
                <p>{props.studyguide.content}</p>
                <div className="entry-meta ">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock" /> {date}
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-calendar-event" />{" "}
                      {props.studyguide.event}
                    </li>
                  </ul>
                </div>
                <div className="entry-content">
                  <div className="read-more">
                    <a target="_blank" href={props.studyguide.full}>
                      Read More
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Studyguide;
