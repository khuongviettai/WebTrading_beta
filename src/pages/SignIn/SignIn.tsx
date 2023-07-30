import React from "react";
import styles from "./SignIn.module.scss";

export interface ISignIn {}

const SignIn: React.FunctionComponent<ISignIn> = () => {
  return (
    <div className={styles.SignIn}>
      <div className={styles.SignIn_wrap}>
        <h3 className={styles.SignIn_title}>Đăng nhập</h3>
        <form action="" className={styles.SignIn_form}>
          <div className={styles.SignIn_box}>
            <label htmlFor="" className={styles.SignIn_box_label}>
              Email
            </label>
            <input type="email" name="" className={styles.SignIn_input} />
          </div>
          <div className={styles.SignIn_box}>
            <label htmlFor="" className={styles.SignIn_box_label}>
              Mậu khẩu
            </label>
            <input type="password" name="" className={styles.SignIn_input} />
          </div>

          <div className={styles.SignIn_box_btn}>
            <button className={styles.SignIn_btn}>Đăng nhập</button>
          </div>

          <div className={styles.SignIn_box_account}>
            <div className={styles.SignIn_box_account_sign_up}>
              Bạn chưa có tài khoản{" "}
              <a href="/sign-up" className={styles.SignIn_box_account_link}>
                {" "}
                Đăng ký
              </a>
            </div>
            <div className={styles.SignIn_box_account_forgot_password}>
              <a href="#" className={styles.SignIn_box_account_link}>
                Quên mật khẩu?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
