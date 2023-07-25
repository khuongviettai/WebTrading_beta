import React from "react";
import Style from "./SignUp.module.scss";

const SignUp: React.FC = () => {
  return (
    <div className={Style.SignUp}>
      <div className={Style.SignUp_box}>
        <h3 className={Style.SignUp_title}>Đăng ký</h3>
        <form action="" className={Style.SignUp_form}>
          <div className={Style.SignUp_form_box}>
            <label htmlFor="" className={Style.SignUp_form_label_username}>
              Họ và tên
            </label>
            <input type="text" className={Style.SignUp_form_input_username} />
          </div>
          <div className={Style.SignUp_form_box}>
            <label htmlFor="" className={Style.SignUp_form_label_email}>
              Email
            </label>
            <input type="text" className={Style.SignUp_form_input_email} />
          </div>
          <div className={Style.SignUp_form_box}>
            <label htmlFor="" className={Style.SignUp_form_label_password}>
              Mật khẩu
            </label>
            <input type="text" className={Style.SignUp_form_input_password} />
          </div>
          <div className={Style.SignUp_form_box_confirm}>
            <label
              htmlFor=""
              className={Style.SignUp_form_label_confirm_password}
            >
              Nhập lại mật khẩu
            </label>
            <input
              type="text"
              className={Style.SignUp_form_input_confirm_password}
            />
          </div>
          <div className={Style.SignUp_box_sign_in}>
            <a href="" className={Style.SignUp_link_sign_in}>
              Đăng nhập
            </a>
          </div>
          <div className={Style.SignUp_box_btn}>
            <button className={Style.SignUp_btn}>Đăng ký</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
