import React from "react";
import "./Footer.scss";
import message from "../../assets/icons/messenger.png";
import telegram from "../../assets/icons/telegram.png";
import facebook from "../../assets/icons/facebook.png";

const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="Footer__intro">
              <h3 className="Footer__intro-title">Giới thiệu</h3>
              <span className="Footer__intro-subTitle">
                Xin chào! Mình là Khương Viết Tài. Rất vui được biết mọi người.
              </span>
              <hr />
              <span className="Footer__intro-contact">
                Thông tin mạng xã hội
              </span>
              <div className="Footer__intro-contact-box">
                <div className="intro__contact-box">
                  <img
                    src={message}
                    alt="message"
                    className="intro__contact-box--img"
                  />
                  <a href="#" className="intro__contract-box--link">
                    Message
                  </a>
                </div>
                <div className="intro__contact-box">
                  <img
                    src={telegram}
                    alt="telegram"
                    className="intro__contact-box--img"
                  />
                  <a href="#" className="intro__contract-box--link">
                    Telegram
                  </a>
                </div>
                <div className="intro__contact-box">
                  <img
                    src={facebook}
                    alt="message"
                    className="intro__contact-box--img"
                  />
                  <a href="#" className="intro__contract-box--link">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="Footer__category">
              <h3 className="Footer__category-title">Danh mục</h3>
              <div className="Footer__category-box">
                <ul className="Footer__category-list">
                  <li className="Footer__category-item">
                    <a href="#" className="Footer__category-link">
                      Home
                    </a>
                  </li>
                  <li className="Footer__category-item">
                    <a href="#" className="Footer__category-link">
                      Khoá học
                    </a>
                  </li>
                  <li className="Footer__category-item">
                    <a href="#" className="Footer__category-link">
                      Forex
                    </a>
                  </li>
                  <li className="Footer__category-item">
                    <a href="#" className="Footer__category-link">
                      Indicator
                    </a>
                  </li>
                  <li className="Footer__category-item">
                    <a href="#" className="Footer__category-link">
                      Vlog
                    </a>
                  </li>
                  <li className="Footer__category-item">
                    <a href="#" className="Footer__category-link">
                      Chia sẻ
                    </a>
                  </li>
                  <li className="Footer__category-item">
                    <a href="#" className="Footer__category-link">
                      Q&A
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="Footer__contact">
              <h3 className="Footer__contact-title">Liên hệ</h3>
              <form action="" className="Footer__contact-form">
                <div className="Footer__contact-form--box">
                  <input
                    type="text"
                    className="Footer__contact-form--input"
                    placeholder="Họ và tên*"
                  />
                </div>
                <div className="Footer__contact-form--box">
                  <input
                    type="number"
                    className="Footer__contact-form--input"
                    placeholder="Số điện thoại*"
                  />
                </div>

                <div className="Footer__contact-form--box">
                  <input
                    type="text"
                    className="Footer__contact-form--input"
                    placeholder="Email*"
                  />
                </div>
                <div className="Footer__contact-form--box">
                  <textarea
                    className="Footer__contact-form--content"
                    placeholder="Nội dung"
                  />
                </div>
                <div className="Footer__contact-form--box">
                  <button className="Footer__contact-form--btn">Gửi</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
