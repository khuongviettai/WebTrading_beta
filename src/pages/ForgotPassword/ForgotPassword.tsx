import React from 'react';
import styles from './ForgotPassword.module.scss';

export interface IForgotPassword {}

const ForgotPassword: React.FunctionComponent<IForgotPassword> = () => {
  return (
    <div className={styles.ForgotPassword}>
      <div className={styles.ForgotPassword_box}>
        <h3 className={styles.ForgotPassword_title}>Quên mật khẩu</h3>
        <form action="" className={styles.ForgotPassword_form}>
          <div className={styles.ForgotPassword_box_form}>
            <label htmlFor="" className={styles.ForgotPassword_box_form_label}>
              Email
            </label>
            <input
              type="email"
              className={styles.ForgotPassword_box_form_email_input}
              placeholder="Email"
            />
          </div>
          <div className={styles.ForgotPassword_sign_in}>
            Có tài khoản
            <a
              href="/auth/sign-in"
              className={styles.ForgotPassword_link_sign_in}
            >
              Đăng nhập
            </a>
          </div>
          <div className={styles.ForgotPassword_box_btn}>
            <button className={styles.ForgotPassword_btn}>
              Khôi phục mật khẩu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
