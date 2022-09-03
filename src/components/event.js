import React, { useState } from "react";

const Event = (props) => {
  const date = new Date(props.event.date).toString().substring(0, 15);
  return (
    <div className="col-md-6 d-flex align-items-stretch">
      <div class="card">
        <div class="card-img">
          <img src={props.event.cover} alt="..."></img>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            <a href={props.event.drive}>{props.event.name}</a>
          </h5>
          <p class="card-text">{props.event.description}</p>

          <h6 className="card-text ">
            {" "}
            <i className="bi bi-clock" /> {""}
            <span> {date}</span>
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
          <div class="read-more">
            <a href={props.event.drive} target="_blank">
              <i class="bi bi-arrow-right"></i> Read More
            </a>
          </div>

          <div class="read-more">
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
