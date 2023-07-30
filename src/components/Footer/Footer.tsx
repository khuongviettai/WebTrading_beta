import React, { useState } from "react";
import styles from "./Footer.module.scss";
import expand_more from "../../assets/icons/expand_more.png";

export interface IFooter {}

const Footer: React.FunctionComponent<IFooter> = () => {
  const [openReference, setOpenReference] = useState(false);
  const [openForex, setOpenForex] = useState(false);
  const [openCommunity, setOpenCommunity] = useState(false);
  const handleOpenReference = () => {
    setOpenReference(!openReference);
  };

  const handleOpenForex = () => {
    setOpenForex(!openForex);
  };

  const handleOpenCommunity = () => {
    setOpenCommunity(!openCommunity);
  };

  return (
    <div className={styles.Footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12">
            <div className={styles.Footer_intro}>
              <h5 className={styles.Footer_intro_title}>Giới thiệu</h5>
              <div className={styles.Footer_intro_wrap}>
                <span className={styles.Footer_intro_content}>
                  Xin chào, tôi là Khương Viết Tài, một người yêu thích lĩnh vực
                  công nghệ thông tin và tài chính. Trang web này mình tạo ra
                  với mục đích giúp mọi người hiểu rõ hơn về tài chính và đồng
                  thời cung cấp một không gian để chia sẻ và tìm hiểu về các vấn
                  đề tài chính.
                </span>
                <div className={styles.Footer_intro_more}>
                  <div className={styles.Footer_intro_more_me}>
                    Tìm hiểu thêm về tôi: {`${" "}`}
                    <a
                      href=""
                      target="_blank"
                      className={styles.Footer_intro_more_me_link}
                    >
                      Ở đây
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className={styles.Footer_reference}>
              <div className={styles.Footer_reference_box}>
                <h5 className={styles.Footer_reference_title}>Tham khảo</h5>
                <div
                  className={styles.Footer_reference_mobile_box_img}
                  onClick={handleOpenReference}
                >
                  <img
                    src={expand_more}
                    alt="expand more"
                    className={styles.Footer_reference_mobile_img_expand}
                  />
                </div>
              </div>
              <div
                className={`${styles.Footer_reference_wrap} ${
                  openReference ? "m-show" : ""
                }`}
              >
                <ul className={styles.Footer_reference_list}>
                  <li className={styles.Footer_reference_list_item}>
                    <a
                      href=""
                      className={styles.Footer_reference_list_item_link}
                    >
                      Kiến thức cơ bản
                    </a>
                  </li>
                  <li className={styles.Footer_reference_list_item}>
                    <a
                      href=""
                      className={styles.Footer_reference_list_item_link}
                    >
                      Chỉ báo Indicator
                    </a>
                  </li>
                  <li className={styles.Footer_reference_list_item}>
                    <a
                      href=""
                      className={styles.Footer_reference_list_item_link}
                    >
                      Quản lý vốn
                    </a>
                  </li>
                  <li className={styles.Footer_reference_list_item}>
                    <a
                      href=""
                      className={styles.Footer_reference_list_item_link}
                    >
                      Sách PDF
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className={styles.Footer_forex}>
              <div className={styles.Footer_forex_box}>
                <h5 className={styles.Footer_forex_title}>Forex</h5>
                <div
                  className={styles.Footer_forex_mobile_box_img}
                  onClick={handleOpenForex}
                >
                  <img
                    src={expand_more}
                    alt="expand more"
                    className={styles.Footer_forex_mobile_img_expand}
                  />
                </div>
              </div>
              <div
                className={`${styles.Footer_forex_wrap} ${
                  openForex ? "m-show" : ""
                }`}
              >
                <ul className={styles.Footer_forex_list}>
                  <li className={styles.Footer_forex_list_item}>
                    <a href="" className={styles.Footer_forex_list_item_link}>
                      Tin tức
                    </a>
                  </li>
                  <li className={styles.Footer_forex_list_item}>
                    <a href="" className={styles.Footer_forex_list_item_link}>
                      Lịch kinh tế
                    </a>
                  </li>
                  <li className={styles.Footer_forex_list_item}>
                    <a href="" className={styles.Footer_forex_list_item_link}>
                      Indicator MT4
                    </a>
                  </li>
                  <li className={styles.Footer_forex_list_item}>
                    <a href="" className={styles.Footer_forex_list_item_link}>
                      Indicator MT5
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className={styles.Footer_community}>
              <div className={styles.Footer_community_box}>
                <h5 className={styles.Footer_community_title}>Cộng đồng</h5>
                <div
                  className={styles.Footer_community_mobile_box_img}
                  onClick={handleOpenCommunity}
                >
                  <img
                    src={expand_more}
                    alt="expand more"
                    className={styles.Footer_community_mobile_img_expand}
                  />
                </div>
              </div>
              <div
                className={`${styles.Footer_community_wrap} ${
                  openCommunity ? "m-show" : ""
                }`}
              >
                <ul className={styles.Footer_community_list}>
                  <li className={styles.Footer_community_list_item}>
                    <a
                      href=""
                      className={styles.Footer_community_list_item_link}
                    >
                      Hỏi đáp
                    </a>
                  </li>
                  <li className={styles.Footer_community_list_item}>
                    <a
                      href=""
                      className={styles.Footer_community_list_item_link}
                    >
                      Chia sẻ
                    </a>
                  </li>
                  <li className={styles.Footer_community_list_item}>
                    <a
                      href=""
                      className={styles.Footer_community_list_item_link}
                    >
                      Youtube
                    </a>
                  </li>
                  <li className={styles.Footer_community_list_item}>
                    <a
                      href=""
                      className={styles.Footer_community_list_item_link}
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Footer_bottom}>
          <div className={styles.Footer_bottom_wrap}>
            <div className={styles.Footer_bottom_name}>
              Code by Khương Viết Tài
            </div>
            <div className={styles.Footer_bottom_notification}>
              Giao dịch Forex đòi hỏi hiểu rõ rủi ro và có kiến thức cần thiết
              để tránh tổn thất vốn đáng kể.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
