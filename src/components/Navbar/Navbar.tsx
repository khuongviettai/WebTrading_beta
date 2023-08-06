'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.scss';
import expand_more from '../../assets/icons/expand_more.png';
import account from '../../assets/icons/account_circle.png';
import menu from '../../assets/icons/menu.png';
import close from '../../assets/icons/close.png';
import add from '../../assets/icons/add.png';
import remove from '../../assets/icons/remove.png';
import Image from 'next/image';
import Link from 'next/link';

export interface INavbar {}

const Navbar: React.FunctionComponent<INavbar> = () => {
  const [isNavbarFixed, setNavbarFixed] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openReference, setOpenReference] = useState(false);
  const [openForex, setOpenForex] = useState(false);
  const [openCommunity, setOpenCommunity] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [user] = useState();

  const menuRef = useRef<HTMLDivElement>(null);

  const handleNavbarToggle = () => {
    setOpenNavbar(!openNavbar);
  };

  const handleReferenceToggle = () => {
    setOpenReference(!openReference);
  };
  const handleForexToggle = () => {
    setOpenForex(!openForex);
  };

  const handleCommunityToggle = () => {
    setOpenCommunity(!openCommunity);
  };

  const handleUserToggle = () => {
    setOpenUser(!openUser);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenUser(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [menuRef]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 30) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOverflow = () => {
      if (window.innerWidth < 1200 && (openNavbar || openUser)) {
        document.body.classList.add('hidden_overflow');
      } else {
        document.body.classList.remove('hidden_overflow');
      }
    };

    window.addEventListener('resize', handleOverflow);
    handleOverflow();

    return () => {
      window.removeEventListener('resize', handleOverflow);
      document.body.classList.remove('hidden_overflow');
    };
  }, [openNavbar, openUser]);
  return (
    <div
      className={`${styles.Navbar} ${
        isNavbarFixed ? styles.Navbar_fixed : ''
      } `}
    >
      <div className="container">
        <div className={styles.Navbar_wrap}>
          <div
            className={styles.Navbar_mobile_open_menu}
            onClick={handleNavbarToggle}
          >
            <Image
              src={menu}
              alt="Menu"
              className={styles.Navbar_mobile_open_menu_img}
            />
          </div>
          <div className={styles.Navbar_wrap_logo}>
            <a href="/">
              <div className={styles.Navbar_logo_title}>KhuongVietTai</div>
            </a>
          </div>
          <div className={styles.Navbar_wrap_panel}>
            <ul className={styles.Navbar_panel_list}>
              <li className={styles.Navbar_panel_list_item}>
                <a href="/" className={styles.Navbar_panel_list_item_link}>
                  <span className={styles.Navbar_panel_list_item_link_body}>
                    Home
                  </span>
                </a>
              </li>
              <li className={styles.Navbar_panel_list_item}>
                <a href="#" className={styles.Navbar_panel_list_item_link}>
                  <span
                    className={styles.Navbar_panel_list_item_link_body}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Tham khảo
                    <Image
                      src={expand_more}
                      alt="expand_more"
                      className={styles.Navbar_panel_list_item_link_img}
                    />
                  </span>
                </a>
                <div className={styles.subMenu}>
                  <div className={styles.subMenu_body}>
                    <div className={styles.subMenu_wrap}>
                      <div className="row-fix">
                        <div className="col-12">
                          <ul className={styles.subMenu_list}>
                            <li className={styles.subMenu_list_item}>
                              <a
                                href=""
                                className={styles.subMenu_list_item_link}
                              >
                                Kiến thức cơ bản
                              </a>
                            </li>
                            <li className={styles.subMenu_list_item}>
                              <a
                                href=""
                                className={styles.subMenu_list_item_link}
                              >
                                Chỉ báo Indicator
                              </a>
                            </li>
                            <li className={styles.subMenu_list_item}>
                              <a
                                href=""
                                className={styles.subMenu_list_item_link}
                              >
                                Quản lý vốn
                              </a>
                            </li>
                            <li className={styles.subMenu_list_item}>
                              <a
                                href=""
                                className={styles.subMenu_list_item_link}
                              >
                                Sách PDF
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className={styles.Navbar_panel_list_item}>
                <a href="#" className={styles.Navbar_panel_list_item_link}>
                  <span
                    className={styles.Navbar_panel_list_item_link_body}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Forex
                    <Image
                      src={expand_more}
                      alt="expand_more"
                      className={styles.Navbar_panel_list_item_link_img}
                    />
                  </span>
                </a>
                <div className={styles.subMenu}>
                  <div className={styles.subMenu_body}>
                    <div className={styles.subMenu_wrap}>
                      <div className="row-fix">
                        <div className="col-12">
                          <ul className={styles.subMenu_list}>
                            <li className={styles.subMenu_list_item}>
                              <a
                                href=""
                                className={styles.subMenu_list_item_link}
                              >
                                Tin tức
                              </a>
                            </li>
                            <li className={styles.subMenu_list_item}>
                              <a
                                target="_blank"
                                href="https://www.forexfactory.com/calendar"
                                className={styles.subMenu_list_item_link}
                              >
                                Lịch kinh tế
                              </a>
                            </li>
                            <li className={styles.subMenu_list_item}>
                              <a
                                href=""
                                className={styles.subMenu_list_item_link}
                              >
                                Indicator MT4
                              </a>
                            </li>
                            <li className={styles.subMenu_list_item}>
                              <a
                                href=""
                                className={styles.subMenu_list_item_link}
                              >
                                Indicator MT5
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className={styles.Navbar_panel_list_item}>
                <a href="#" className={styles.Navbar_panel_list_item_link}>
                  <span
                    className={styles.Navbar_panel_list_item_link_body}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Cộng đồng
                    <Image
                      src={expand_more}
                      alt="expand_more"
                      className={styles.Navbar_panel_list_item_link_img}
                    />
                  </span>
                </a>
                <div className={styles.subMenu}>
                  <div className={styles.subMenu_body}>
                    <div className={styles.subMenu_wrap}>
                      <div className="row-fix">
                        <div className="col-12">
                          <ul className={styles.subMenu_list}>
                            <li className={styles.subMenu_list_item}>
                              <a
                                href=""
                                className={styles.subMenu_list_item_link}
                              >
                                Hỏi đáp
                              </a>
                            </li>
                            <li className={styles.subMenu_list_item}>
                              <a
                                href=""
                                className={styles.subMenu_list_item_link}
                              >
                                Chia sẻ
                              </a>
                            </li>
                            <li className={styles.subMenu_list_item}>
                              <a
                                target="_blank"
                                href="youtube.com/@khuongviettai"
                                className={styles.subMenu_list_item_link}
                              >
                                Youtube
                              </a>
                            </li>
                            <li className={styles.subMenu_list_item}>
                              <a
                                target="_blank"
                                href="https://twitter.com/khuongviettai"
                                className={styles.subMenu_list_item_link}
                              >
                                Twitter
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className={styles.Navbar_panel_list_item}>
                <a href="#" className={styles.Navbar_panel_list_item_link}>
                  <span className={styles.Navbar_panel_list_item_link_body}>
                    Nhật ký giao dịch
                  </span>
                </a>
              </li>
              <li className={styles.Navbar_panel_list_item}>
                <a
                  href="/contact"
                  className={styles.Navbar_panel_list_item_link}
                >
                  <span className={styles.Navbar_panel_list_item_link_body}>
                    Liên hệ
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.Navbar_user}>
            <div className={styles.Navbar_user_wrap}>
              {user ? (
                <>
                  <div
                    className={styles.Navbar_user_box}
                    onClick={handleUserToggle}
                  >
                    <Image
                      src={account}
                      alt="account"
                      className={styles.Navbar_user_box_img}
                    />
                  </div>
                  <div
                    className={`${styles.Navbar_user_box_info} ${
                      openUser
                        ? styles.Navbar_mobile_show_user
                        : styles.Navbar_mobile_hidden_user
                    }`}
                    ref={menuRef}
                  >
                    <div className={styles.Navbar_user_box_info_content}>
                      <div className={styles.Navbar_mobile_close_user_wrap}>
                        <div
                          className={styles.Navbar_mobile_close_user_box}
                          onClick={handleUserToggle}
                        >
                          <Image
                            src={close}
                            alt="close"
                            className={styles.Navbar_mobile_close_user}
                          />
                        </div>
                      </div>
                      <ul className={styles.Navbar_user_list}>
                        <li className={styles.Navbar_user_list_item_name}>
                          <a className={styles.Navbar_user_list_item_link_name}>
                            {user}
                          </a>
                        </li>
                        <li className={styles.Navbar_user_list_item}>
                          <a
                            href=""
                            className={styles.Navbar_user_list_item_link}
                          >
                            Thông tin cá nhân
                          </a>
                        </li>
                        <li className={styles.Navbar_user_list_item}>
                          <a
                            href=""
                            className={styles.Navbar_user_list_item_link}
                          >
                            Bài viết của tôi
                          </a>
                        </li>
                        <li className={styles.Navbar_user_list_item}>
                          <a
                            href=""
                            className={styles.Navbar_user_list_item_link}
                          >
                            Nhật ký giao dịch
                          </a>
                        </li>
                        <li className={styles.Navbar_user_list_item}>
                          <a
                            href=""
                            className={styles.Navbar_user_list_item_link}
                          >
                            Đăng xuất
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <a href="/auth/sign-in" className={styles.Navbar_user_link}>
                  <span className={styles.Navbar_user_link_sign_in}>
                    Đăng nhập
                  </span>
                  <Image
                    src={account}
                    alt="account"
                    className={styles.Navbar_mobile_user}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div
        className={`${styles.Navbar_mobile} ${
          openNavbar ? styles.Navbar_mobile_menu_show : ''
        }`}
      >
        <div className={styles.Navbar_mobile_wrap}>
          <div
            className={styles.Navbar_mobile_close}
            onClick={handleNavbarToggle}
          >
            <Image
              src={close}
              alt="close"
              className={styles.Navbar_mobile_close_img}
            />
          </div>
        </div>
        <div className={styles.Navbar_mobile_menu}>
          <div className={styles.Navbar_mobile_menu_wrap}>
            <ul className={styles.Navbar_mobile_menu_list}>
              <li className={styles.Navbar_mobile_menu_list_item}>
                <div className={styles.Navbar_mobile_menu_more_wrap}>
                  <Link href="/" className={styles.Navbar_mobile_menu_link}>
                    Home
                  </Link>
                </div>
              </li>
              <li className={styles.Navbar_mobile_menu_list_item}>
                <div className={styles.Navbar_mobile_menu_more_wrap}>
                  <a href="#" className={styles.Navbar_mobile_menu_link}>
                    Tham khảo
                  </a>
                  <div
                    className={styles.Navbar_mobile_menu_more_box}
                    onClick={handleReferenceToggle}
                  >
                    <Image
                      src={openReference ? remove : add}
                      alt={openReference ? 'remove' : 'add'}
                      className={styles.Navbar_mobile_menu_more_img}
                    />
                  </div>
                </div>
                {/* <div className={styles.Navbar_mobile_subMenu}> */}
                <ul
                  className={`${styles.Navbar_mobile_subMenu_list} ${
                    openReference ? 'm-show' : 'm-hidden'
                  }`}
                >
                  <li className={styles.Navbar_mobile_subMenu_item}>
                    <a href="" className={styles.Navbar_mobile_subMenu_link}>
                      Kiến thức cơ bản
                    </a>
                  </li>
                  <li className={styles.Navbar_mobile_subMenu_item}>
                    <a href="" className={styles.Navbar_mobile_subMenu_link}>
                      Chỉ báo Indicator
                    </a>
                  </li>
                  <li className={styles.Navbar_mobile_subMenu_item}>
                    <a href="" className={styles.Navbar_mobile_subMenu_link}>
                      Quản lý vốn
                    </a>
                  </li>
                  <li className={styles.Navbar_mobile_subMenu_item}>
                    <a href="" className={styles.Navbar_mobile_subMenu_link}>
                      Sách PDF
                    </a>
                  </li>
                </ul>
                {/* </div> */}
              </li>
              <li className={styles.Navbar_mobile_menu_list_item}>
                <div className={styles.Navbar_mobile_menu_more_wrap}>
                  <a href="#" className={styles.Navbar_mobile_menu_link}>
                    Forex
                  </a>
                  <div
                    className={styles.Navbar_mobile_menu_more_box}
                    onClick={handleForexToggle}
                  >
                    <Image
                      src={openForex ? remove : add}
                      alt={openForex ? 'remove' : 'add'}
                      className={styles.Navbar_mobile_menu_more_img}
                    />
                  </div>
                </div>
                <ul
                  className={`${styles.Navbar_mobile_subMenu_list} ${
                    openForex ? 'm-show' : 'm-hidden'
                  }`}
                >
                  <li className={styles.Navbar_mobile_subMenu_item}>
                    <a href="" className={styles.Navbar_mobile_subMenu_link}>
                      Tin tức
                    </a>
                  </li>
                  <li className={styles.Navbar_mobile_subMenu_item}>
                    <a
                      target="_blank"
                      href="https://www.forexfactory.com/calendar"
                      className={styles.Navbar_mobile_subMenu_link}
                    >
                      Lịch kinh tế
                    </a>
                  </li>
                  <li className={styles.Navbar_mobile_subMenu_item}>
                    <a href="" className={styles.Navbar_mobile_subMenu_link}>
                      Indicator MT4
                    </a>
                  </li>
                  <li className={styles.Navbar_mobile_subMenu_item}>
                    <a href="" className={styles.Navbar_mobile_subMenu_link}>
                      Indicator MT5
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.Navbar_mobile_menu_list_item}>
                <div className={styles.Navbar_mobile_menu_more_wrap}>
                  <a href="#" className={styles.Navbar_mobile_menu_link}>
                    Cộng đồng
                  </a>
                  <div
                    className={styles.Navbar_mobile_menu_more_box}
                    onClick={handleCommunityToggle}
                  >
                    <Image
                      src={openCommunity ? remove : add}
                      alt={openCommunity ? 'remove' : 'add'}
                      className={styles.Navbar_mobile_menu_more_img}
                    />
                  </div>
                </div>
                <ul
                  className={`${styles.Navbar_mobile_subMenu_list} ${
                    openCommunity ? 'm-show' : 'm-hidden'
                  }`}
                >
                  <li className={styles.Navbar_mobile_subMenu_item}>
                    <a href="" className={styles.Navbar_mobile_subMenu_link}>
                      Hỏi đáp
                    </a>
                  </li>
                  <li className={styles.Navbar_mobile_subMenu_item}>
                    <a href="" className={styles.Navbar_mobile_subMenu_link}>
                      Chia sẻ
                    </a>
                  </li>
                  <li className={styles.Navbar_mobile_subMenu_item}>
                    <a
                      target="_blank"
                      href="youtube.com/@khuongviettai"
                      className={styles.Navbar_mobile_subMenu_link}
                    >
                      Youtube
                    </a>
                  </li>
                  <li className={styles.Navbar_mobile_subMenu_item}>
                    <a
                      target="_blank"
                      href="https://twitter.com/khuongviettai"
                      className={styles.Navbar_mobile_subMenu_link}
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.Navbar_mobile_menu_list_item}>
                <div className={styles.Navbar_mobile_menu_more_wrap}>
                  <a href="#" className={styles.Navbar_mobile_menu_link}>
                    Nhật ký giao dịch
                  </a>
                </div>
              </li>
              <li className={styles.Navbar_mobile_menu_list_item}>
                <div className={styles.Navbar_mobile_menu_more_wrap}>
                  <a href="/contact" className={styles.Navbar_mobile_menu_link}>
                    Liên hệ
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
