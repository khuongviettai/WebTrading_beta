import React from "react";
import styles from "./SignUp.module.scss";

export interface ISignUp {}

const SignUp: React.FunctionComponent<ISignUp> = () => {
  return (
    <div className={styles.SignUp}>
      <div className={styles.SignUp_wrap}>
        <h3 className={styles.SignUp_title}>Đăng ký</h3>
        <form action="" className={styles.SignUp_form}>
          <div className={styles.SignUp_box}>
            <label htmlFor="" className={styles.SignUp_label}>
              Họ và tên
            </label>
            <input type="text" className={styles.SignUp_input} />
          </div>
          <div className={styles.SignUp_box}>
            <label htmlFor="" className={styles.SignUp_label}>
              Email
            </label>
            <input type="email" className={styles.SignUp_input} />
          </div>
          <div className={styles.SignUp_box}>
            <label htmlFor="" className={styles.SignUp_label}>
              Mật khẩu
            </label>
            <input type="password" className={styles.SignUp_input} />
          </div>
          <div className={styles.SignUp_box}>
            <label htmlFor="" className={styles.SignUp_label}>
              Xác nhân mật khẩu
            </label>
            <input type="password" className={styles.SignUp_input} />
          </div>
          <div className={styles.SignUp_box_btn}>
            <button className={styles.SignUp_btn}>Đăng ký</button>
          </div>
          <div className={styles.SignUp_box_account}>
            <div className={styles.SignIn_box_account_sign_up}>
              Bạn đã có tài khoản{" "}
              <a href="/sign-in" className={styles.SignUp_box_account_link}>
                Đăng nhập
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
