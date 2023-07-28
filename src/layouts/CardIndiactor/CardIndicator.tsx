import React from "react";
import Style from "./CardIndicator.module.scss";
import indicator from "../../assets/images/indicator.png";

export interface ICardIndicator {}

const CardIndicator: React.FunctionComponent<ICardIndicator> = () => {
  return (
    <div className={Style.CardIndicator}>
      <div className={Style.CardIndicator_box}>
        <div className={Style.CardIndicator_img_block}>
          <a href="" className={Style.CardIndicator_box_link}>
            <img
              src={indicator}
              alt="indicator"
              className={Style.CardIndicator_box_img}
            />
            <div className={Style.CardIndicator_box_dex}>
              <span className={Style.CardIndicator_img_des}>Hello</span>
            </div>
          </a>
        </div>
        <div className={Style.CardIndicator_title_box}>
          <a href="" className={Style.CardIndicator_link_title}>
            <h3 className={Style.CardIndicator_title}>
              Indicator ATR Histogram
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardIndicator;
