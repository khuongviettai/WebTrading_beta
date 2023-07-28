import React from "react";
import Style from "./TradingJournal.module.scss";

export interface ITradingJournal {}

const TradingJournal: React.FunctionComponent<ITradingJournal> = () => {
  return (
    <div className={Style.TradingJournal}>
      <div className="container"></div>
    </div>
  );
};

export default TradingJournal;
