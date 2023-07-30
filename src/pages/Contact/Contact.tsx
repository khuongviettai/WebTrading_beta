import React from "react";
import styles from "./Contact.module.scss";

export interface IContact {}

const Contact: React.FunctionComponent<IContact> = () => {
  return (
    <div className={styles.Contact}>
      <div className="container"></div>
    </div>
  );
};

export default Contact;
