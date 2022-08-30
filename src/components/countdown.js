import React, { useEffect, useState } from "react";
import "../styles/aboutus.scss";

const CountDown = ({ event, setCurrent }) => {
  const [TimerDays, setTimerDays] = useState();
  const [TimerHours, setTimerHours] = useState();
  const [TimerMinutes, setTimertMinutes] = useState();
  const [TimerSeconds, setTimerSeconds] = useState();
  let interval;
  const date = new Date(event.date).getTime();
  const StartTimer = () => {
    setInterval(() => {
      const current = new Date().getTime();
      const distance = date - current;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        setCurrent(false);
        clearInterval(interval);
        fetch(`${process.env.REACT_APP_API_URL}/events/countend`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ _id: event._id }),
        });
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimertMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => StartTimer());

  return (
    <section>
      <div className="d-flex justify-content-center ">
        <div className="col-md-12 countdown d-flex justify-content-center">
          <h2>We are Coming Soon...</h2>

          <div className="row d-flex align-items-stretch justify-content-around clock     ">
            <div className="col-md-3 box">
              <span>{TimerDays}</span> <span>Days</span>{" "}
            </div>
            <div className="col-md-3 box">
              <span>{TimerHours}</span> <span>Hours</span>{" "}
            </div>
            <div className="col-md-3 box">
              <span>{TimerMinutes}</span> <span>Minutes</span>{" "}
            </div>
            <div className="col-md-3 box ">
              <span>{TimerSeconds}</span> <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CountDown;
