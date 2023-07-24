import React from "react";
import "./SubNavbar.scss";
import clock from "../../assets/icons/clock.png";
import facebook from "../../assets/icons/facebook.png";
import message from "../../assets/icons/messenger.png";
import tiktok from "../../assets/icons/tik-tok.png";
import telegram from "../../assets/icons/telegram.png";

const SubNavbar: React.FC = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const current = new Date();
  const dayOfWeek = daysOfWeek[current.getDay()];
  const date = `${dayOfWeek} - ${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="SubNavbar">
      <div className="container">
        <div className="SubNavbar__row">
          <div className="SubNavbar__today">
            <img src={clock} alt="clock" className="SubNavbar__contact-img" />
            {date}
          </div>
          <div className="SubNavbar__contact">
            <ul className="SubNavbar__contact-list">
              <li className="SubNavbar__contact-item">
                <a href="#" className="SubNavbar__contact-link">
                  <img
                    src={message}
                    alt="message"
                    className="SubNavbar__contact-img"
                  />
                </a>
              </li>
              <li className="SubNavbar__contact-item">
                <a href="#" className="Navbar__contact-link">
                  <img
                    src={telegram}
                    alt="telegram"
                    className="SubNavbar__contact-img"
                  />
                </a>
              </li>
              <li className="SubNavbar__contact-item">
                <a href="#" className="Navbar__contact-link">
                  <img
                    src={facebook}
                    alt="facebook"
                    className="SubNavbar__contact-img"
                  />
                </a>
              </li>
              <li className="SubNavbar__contact-item">
                <a href="#" className="Navbar__contact-link">
                  <img
                    src={tiktok}
                    alt="tiktok"
                    className="SubNavbar__contact-img"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
