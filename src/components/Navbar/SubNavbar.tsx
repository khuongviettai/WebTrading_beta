import React, { useState, useEffect } from "react";
import styles from "./SubNavbar.module.scss";
import clock from "../../assets/icons/clock.png";
import messenger from "../../assets/icons/messenger.png";
import telegram from "../../assets/icons/telegram.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";

export interface ISubNavbar {}

const SubNavbar: React.FunctionComponent<ISubNavbar> = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [date, setDate] = useState("");

  function updateDateTime() {
    const current = new Date();
    const dayOfWeek = daysOfWeek[current.getDay()];
    const hours = current.getHours();
    const minutes = current.getMinutes();
    const seconds = current.getSeconds();

    const dateString = `${hours}:${minutes}:${seconds} ${dayOfWeek} - ${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()} `;

    setDate(dateString);
  }

  useEffect(() => {
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.SubNavbar}>
      <div className="container">
        <div className={styles.SubNavbar_wrap}>
          <div className={styles.SubNavbar_time}>
            <img
              src={clock}
              alt="Clock"
              className={styles.SubNavbar_time_img}
            />
            {date}
          </div>
          <div className={styles.SubNavbar_contact}>
            <ul className={styles.SubNavbar_contact_list}>
              <li className={styles.SubNavbar_contact_list_item}>
                <a
                  href=""
                  className={styles.SubNavbar_contact_list_item_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={messenger}
                    alt="messenger"
                    className={styles.SubNavbar_contact_list_item_img}
                  />
                </a>
              </li>
              <li className={styles.SubNavbar_contact_list_item}>
                <a
                  href=""
                  className={styles.SubNavbar_contact_list_item_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={telegram}
                    alt="telegram"
                    className={styles.SubNavbar_contact_list_item_img}
                  />
                </a>
              </li>
              <li className={styles.SubNavbar_contact_list_item}>
                <a
                  href=""
                  className={styles.SubNavbar_contact_list_item_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={facebook}
                    alt="facebook"
                    className={styles.SubNavbar_contact_list_item_img}
                  />
                </a>
              </li>
              <li className={styles.SubNavbar_contact_list_item}>
                <a
                  href=""
                  className={styles.SubNavbar_contact_list_item_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitter}
                    alt="twitter"
                    className={styles.SubNavbar_contact_list_item_img}
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
