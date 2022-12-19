import React from "react";

const Event = (props) => {
  const date = new Date(props.event.date).toString().substring(0, 15);
  return (
    <div className="col-md-6 d-flex align-items-stretch">
      <div className="card">
        <div className="card-img">
          <img src={props.event.cover} alt="..."></img>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <a href={props.event.drive} target="_blank">
              {props.event.name}
            </a>
          </h5>
          <p className="card-text">{props.event.description}</p>

          <h6 className="card-text ">
            {" "}
            <i className="bi bi-clock" /> {""}
            <span> {date}</span>
          </h6>
          <h6 className="card-text ">
            {" "}
            <i className="bi bi-geo-alt" /> {""}
            <span> {props.event.location}</span>
          </h6>
          <p className="card-text">
            <i className="bi bi-person" />{" "}
            <span>
              {props.event.sponsors.map((sponsor) => {
                if (
                  props.event.sponsors.indexOf(sponsor) <
                  props.event.sponsors.length - 1
                ) {
                  return (
                    <span>
                      {sponsor}
                      {" /"}
                    </span>
                  );
                }
                return <span> {sponsor}</span>;
              })}
            </span>
          </p>
          <div className="read-more">
            <a href={props.event.drive} target="_blank">
              <i className="bi bi-arrow-right"></i> Read More
            </a>
          </div>

          <div className="read-more">
            {" "}
            {props.event.aftermovie != "" ? (
              <a className="  " href={props.event.aftermovie} target="_blank">
                <i className="bi bi-arrow-right" /> Watch More
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;
