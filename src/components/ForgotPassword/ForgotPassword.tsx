import React from "react";
import Style from "./ForgotPassword.module.scss";

export interface IForgotPassword {}

const ForgotPassword: React.FunctionComponent<IForgotPassword> = () => {
  return (
    <div className={Style.ForgotPassword}>
      <div className={Style.ForgotPassword_box}>
        <h3 className={Style.ForgotPassword_title}>Quên mật khẩu</h3>
        <form action="" className={Style.ForgotPassword_form}>
          <div className={Style.ForgotPassword_box_form}>
            <label htmlFor="" className={Style.ForgotPassword_box_form_label}>
              Email
            </label>
            <input
              type="email"
              className={Style.ForgotPassword_box_form_email_input}
              placeholder="Email"
            />
          </div>
          <div className={Style.ForgotPassword_sign_in}>
            <a href="/sign-up" className={Style.ForgotPassword_link_sign_in}>
              Đăng nhập
            </a>
          </div>
          <div className={Style.ForgotPassword_box_btn}>
            <button className={Style.ForgotPassword_btn}>
              Khôi phục mật khẩu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
