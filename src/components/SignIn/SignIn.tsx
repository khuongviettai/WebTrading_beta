import React from "react";
import Style from "./SignIn.module.scss";

const SignIn: React.FC = () => {
  return (
    <div className={Style.SignIn}>
      <div className={Style.SignIn_box}>
        <h3 className={Style.SignIn_title}>Đăng nhập</h3>
        <form action="" className={Style.SignIn_box_form}>
          <div className={Style.SignIn__box_block_email}>
            <label htmlFor="" className={Style.SignIn__input_email_label}>
              Email
            </label>
            <input type="text" className={Style.SignIn__input_email} />
          </div>
          <div className={Style.SignIn__box_block_password}>
            <label htmlFor="" className={Style.SignIn__input_password_label}>
              Mật khẩu
            </label>
            <input type="password" className={Style.SignIn__input_password} />
          </div>
          <div className={Style.SignIn_box_account}>
            <div className={Style.SignIn_box_sign_up}>
              <a href="/sign-up" className={Style.SignIn_link_sign_up}>
                Đăng ký
              </a>
            </div>
            <div className={Style.SignIn_box_forgot_password}>
              <a href="" className={Style.SignIn_link_forgot_password}>
                Quên mật khẩu?
              </a>
            </div>
          </div>
          <div className={Style.SignIn_box_btn}>
            <button className={Style.SignIn_btn_sign_in}>Đăng nhập</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
