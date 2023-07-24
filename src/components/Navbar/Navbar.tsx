import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import expand from "../../assets/icons/expand.png";
import menu from "../../assets/icons/menu.png";
import user from "../../assets/icons/account_circle.png";
import close from "../../assets/icons/close.png";

const Navbar: React.FC = () => {
  const [isNavbarFixed, setNavbarFixed] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openKnowledge, setOpenKnowledge] = useState(false);
  const [openForex, setOpenForex] = useState(false);
  const [openIndicator, setOpenIndicator] = useState(false);
  const [showWarning, setShowWarning] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 30) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const hideWarningTimeout = setTimeout(() => {
      setShowWarning(false);
    }, 90000);

    return () => {
      clearTimeout(hideWarningTimeout);
    };
  }, []);

  const handleKnowledge = () => {
    setOpenKnowledge(!openKnowledge);
  };

  const handleForex = () => {
    setOpenForex(!openForex);
  };

  const handleIndicator = () => {
    setOpenIndicator(!openIndicator);
  };

  const handleNavbarToggle = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <header className={`Navbar ${isNavbarFixed ? "Navbar--fixed" : ""}`}>
      <div className="container">
        <div className="Navbar__panel">
          <div className="Navbar__open-menu" onClick={handleNavbarToggle}>
            <img src={menu} alt="menu" />
          </div>
          <div className="Navbar__panel-logo">
            <a href="\">
              <div className="Navbar__panel-logo--name">KhuongVietTai</div>
            </a>
          </div>
          <div className="nav__panel-item nav__panel-items">
            <ul className="nav__panel-list">
              <li className="panel__list-item">
                <a href="" className="panel__list-item--link">
                  <div className="panel__item-link--body">Home</div>
                </a>
              </li>
              <li className="panel__list-item">
                <a className="panel__list-item--link">
                  <div className="panel__item-link--body">
                    Khoá học
                    <img
                      src={expand}
                      alt="expand"
                      className="panel__item-link__img"
                    />
                  </div>
                </a>
                <div className="panel__subMenu">
                  <div className="panel__subMenu-body">
                    <div className="panel__subMenu-wrap">
                      <div className="row-fix">
                        <div className="col-6">
                          <ul className="panel__subMenu-list">
                            <li className="panel__subMenu-list--item">
                              <a href="" className="panel__subMenu-item--link">
                                Kiến thức cơ bản
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <ul className="panel__subMenu-list">
                            <li className="panel__subMenu-list--item">
                              <a href="" className="panel__subMenu-item--link">
                                Mô hình nến
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <ul className="panel__subMenu-list">
                            <li className="panel__subMenu-list--item">
                              <a href="" className="panel__subMenu-item--link">
                                Mô hình giá
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <ul className="panel__subMenu-list">
                            <li className="panel__subMenu-list--item">
                              <a href="" className="panel__subMenu-item--link">
                                Wyckoff
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="panel__list-item">
                <a className="panel__list-item--link">
                  <div className="panel__item-link--body">
                    Forex
                    <img
                      src={expand}
                      alt="expand"
                      className="panel__item-link__img"
                    />
                  </div>
                </a>
                <div className="panel__subMenu">
                  <div className="panel__subMenu-body">
                    <div className="panel__subMenu-wrap">
                      <div className="row-fix">
                        <div className="col-6">
                          <ul className="panel__subMenu-list">
                            <li className="panel__subMenu-list--item">
                              <a href="" className="panel__subMenu-item--link">
                                Hệ thống giao dịch
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <ul className="panel__subMenu-list">
                            <li className="panel__subMenu-list--item">
                              <a href="" className="panel__subMenu-item--link">
                                Phân thích xu hướng
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <ul className="panel__subMenu-list">
                            <li className="panel__subMenu-list--item">
                              <a href="" className="panel__subMenu-item--link">
                                Hướng dẫn mở tài khoản
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <ul className="panel__subMenu-list">
                            <li className="panel__subMenu-list--item">
                              <a href="" className="panel__subMenu-item--link">
                                Kiến thức forex
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <ul className="panel__subMenu-list">
                            <li className="panel__subMenu-list--item">
                              <a href="" className="panel__subMenu-item--link">
                                Quản lý vốn
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="panel__list-item">
                <a href="" className="panel__list-item--link">
                  <div className="panel__item-link--body">
                    Indicator
                    <img
                      src={expand}
                      alt="expand"
                      className="panel__item-link__img"
                    />
                  </div>
                </a>
                <div className="panel__subMenu">
                  <div className="panel__subMenu-body">
                    <div className="panel__subMenu-wrap">
                      <div className="row-fix">
                        <div className="col-12">
                          <ul className="panel__subMenu-list">
                            <li className="panel__subMenu-list--item ">
                              <a href="" className="panel__subMenu-item--link">
                                Meta Trader 4
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-12">
                          <ul className="panel__subMenu-list">
                            <li className="panel__subMenu-list--item">
                              <a href="" className="panel__subMenu-item--link">
                                Meta Trader 5
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="panel__list-item">
                <a href="" className="panel__list-item--link">
                  <div className="panel__item-link--body">Vlog</div>
                </a>
              </li>
              <li className="panel__list-item">
                <a href="" className="panel__list-item--link">
                  <div className="panel__item-link--body">
                    Nhật ký giao dịch
                  </div>
                </a>
              </li>
              <li className="panel__list-item">
                <a href="" className="panel__list-item--link">
                  <div className="panel__item-link--body">Chia sẻ</div>
                </a>
              </li>
              <li className="panel__list-item">
                <a href="" className="panel__list-item--link">
                  <div className="panel__item-link--body">Q&A</div>
                </a>
              </li>
              <li className="panel__list-item">
                <a href="" className="panel__list-item--link">
                  <div className="panel__item-link--body">Liên hệ</div>
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="nav__panel-search">
            <input
              type="search"
              className="nav_panel-search--input"
              placeholder="Tìm kiếmm ..."
            />
          </div> */}
          <div className="nav__panel-user">
            <div className="nav__user-block">
              <a className="panel__list-item--link">
                <div className="panel__item-link---body">
                  <img
                    src={user}
                    alt="user"
                    className="panel__item-img--user"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className={`Navbar__mobile ${openNavbar ? "show" : ""}`}>
        <div className="container-fix Navbar__mobile-wrap">
          <div className="Navbar__mobile-close" onClick={handleNavbarToggle}>
            <img src={close} className="Navbar__mobile-close--img" />
          </div>
        </div>
        <div className="Navbar__mobile-menu">
          <div className="Navbar__mobile-menu--wrap">
            <ul className="Navbar__mobile-menu--list">
              <li className="Navbar__mobile-menu--item">
                <a href="" className="Navbar__mobile-menu--link">
                  <div className="Navbar__mobile-menu--title">Home</div>
                </a>
              </li>
              <li className="Navbar__mobile-menu--item">
                <div className="Navbar__mobile-menu--block">
                  <a href="#" className="Navbar__mobile-menu--title">
                    Kiến thức
                  </a>
                  <div
                    className="Navbar__mobile-menu--more"
                    onClick={handleKnowledge}
                  >
                    <img
                      src={expand}
                      alt="expand"
                      className="Navbar__mobile-menu--img"
                    />
                  </div>
                </div>

                <div
                  className={`Navbar__mobile-subMenu--knowledge ${
                    openKnowledge ? "show" : ""
                  }`}
                >
                  <div className="Navbar__mobile-subMenu--body">
                    <div className="row-fix">
                      <div className="col-12">
                        <a href="#" className="Navbar__mobile-subMenu--item">
                          <div className="Navbar__mobile-subMenu--title">
                            Kiến thức cơ bản
                          </div>
                        </a>
                      </div>
                      <div className="col-12">
                        <a href="#" className="Navbar__mobile-subMenu--item">
                          <div className="Navbar__mobile-subMenu--title">
                            Mô hình giá
                          </div>
                        </a>
                      </div>
                      <div className="col-12">
                        <a href="#" className="Navbar__mobile-subMenu--item">
                          <div className="Navbar__mobile-subMenu--title">
                            Mô hình nến
                          </div>
                        </a>
                      </div>
                      <div className="col-12">
                        <a href="#" className="Navbar__mobile-subMenu--item">
                          <div className="Navbar__mobile-subMenu--title">
                            Phương pháp Wyckoff
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="Navbar__mobile-menu--item">
                <div className="Navbar__mobile-menu--block">
                  <a href="#" className="Navbar__mobile-menu--title">
                    Forex
                  </a>
                  <div
                    className="Navbar__mobile-menu--more"
                    onClick={handleForex}
                  >
                    <img
                      src={expand}
                      alt="expand"
                      className="Navbar__mobile-menu--img"
                    />
                  </div>
                </div>
                <div
                  className={`Navbar__mobile-subMenu--forex ${
                    openForex ? "show" : ""
                  }`}
                >
                  <div className="Navbar__mobile-subMenu--body">
                    <div className="row-fix">
                      <div className="col-12">
                        <a href="#" className="Navbar__mobile-subMenu--item">
                          <div className="Navbar__mobile-subMenu--title">
                            Hệ thống giao dịch
                          </div>
                        </a>
                      </div>
                      <div className="col-12">
                        <a href="#" className="Navbar__mobile-subMenu--item">
                          <div className="Navbar__mobile-subMenu--title">
                            Hướng dẫn mở tài khoản
                          </div>
                        </a>
                      </div>
                      <div className="col-12">
                        <a href="#" className="Navbar__mobile-subMenu--item">
                          <div className="Navbar__mobile-subMenu--title">
                            Quản lý vốn
                          </div>
                        </a>
                      </div>
                      <div className="col-12">
                        <a href="#" className="Navbar__mobile-subMenu--item">
                          <div className="Navbar__mobile-subMenu--title">
                            Phân tích xu hướng
                          </div>
                        </a>
                      </div>
                      <div className="col-12">
                        <a href="#" className="Navbar__mobile-subMenu--item">
                          <div className="Navbar__mobile-subMenu--title">
                            Kiến thức forex
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="Navbar__mobile-menu--item">
                <div className="Navbar__mobile-menu--block">
                  <a href="#" className="Navbar__mobile-menu--title">
                    Indicator
                  </a>
                  <div
                    className="Navbar__mobile-menu--more"
                    onClick={handleIndicator}
                  >
                    <img
                      src={expand}
                      alt="expand"
                      className="Navbar__mobile-menu--img"
                    />
                  </div>
                </div>
                <div
                  className={`Navbar__mobile-subMenu--indicator ${
                    openIndicator ? "show" : ""
                  }`}
                >
                  <div className="Navbar__mobile-subMenu--body">
                    <div className="row-fix">
                      <div className="col-12">
                        <a href="#" className="Navbar__mobile-subMenu--item">
                          <div className="Navbar__mobile-subMenu--title">
                            Meta Trader 4
                          </div>
                        </a>
                      </div>
                      <div className="col-12">
                        <a href="#" className="Navbar__mobile-subMenu--item">
                          <div className="Navbar__mobile-subMenu--title">
                            Meta Trader 5
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="Navbar__mobile-menu--item">
                <div className="Navbar__mobile-menu--block">
                  <a href="#" className="Navbar__mobile-menu--title">
                    Vlog
                  </a>
                </div>
              </li>
              <li className="Navbar__mobile-menu--item">
                <div className="Navbar__mobile-menu--block">
                  <a href="#" className="Navbar__mobile-menu--title">
                    Nhật ký giao dịch
                  </a>
                </div>
              </li>
              <li className="Navbar__mobile-menu--item">
                <div className="Navbar__mobile-menu--block">
                  <a href="#" className="Navbar__mobile-menu--title">
                    Chia sẻ
                  </a>
                </div>
              </li>
              <li className="Navbar__mobile-menu--item">
                <div className="Navbar__mobile-menu--block">
                  <a href="#" className="Navbar__mobile-menu--title">
                    Q&A
                  </a>
                </div>
              </li>
              <li className="Navbar__mobile-menu--item">
                <div className="Navbar__mobile-menu--block">
                  <a href="#" className="Navbar__mobile-menu--title">
                    Liên hệ
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showWarning && (
        <div className="warning">
          <div className="marquee-text">
            Cảnh báo đây là một thị trường vô cùng rủ ro. Thị trường ngoại hối
            (Forex) là một thế giới tài chính hấp dẫn và tiềm ẩn nhiều cơ hội
            lớn. Tuy nhiên, đi cùng với những triển vọng hứa hẹn là những rủi ro
            tiềm ẩn, đòi hỏi sự cẩn trọng và hiểu biết
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
