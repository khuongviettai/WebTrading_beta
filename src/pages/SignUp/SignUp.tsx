'use client';
import React, { useState } from 'react';
import styles from './SignUp.module.scss';
import Image from 'next/image';
import google from '../../assets/icons/google.png';
import facebook from '../../assets/icons/facebook.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import visibility from '../../assets/icons/visibility.png';
import visibility_off from '../../assets/icons/visibility_off.png';
import Link from 'next/link';

export interface ISignUp {}

const SignUp: React.FunctionComponent<ISignUp> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required('')
        .min(5, 'Họ và tên phải nhiều hơn 5 ký tự'),
      email: Yup.string()
        .required('')
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Email không hợp lệ',
        ),
      // eslint-disable-next-line
      password: Yup.string()
        .required('')
        .matches(/^.{5,}$/, 'Mật khẩu cần ít nhất 5 ký tự'),
      confirmPassword: Yup.string()
        .required('')
        .oneOf([Yup.ref('password')], 'Mật khẩu không chính xác'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={styles.SignUp}>
      <div className={styles.SignUp_wrap}>
        <h3 className={styles.SignUp_title}>Đăng ký</h3>
        <form
          action=""
          className={styles.SignUp_form}
          onSubmit={formik.handleSubmit}
        >
          <div className={styles.SignUp_box}>
            <label htmlFor="" className={styles.SignUp_label}>
              Họ và tên
            </label>
            <input
              type="text"
              className={styles.SignUp_input}
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
            {formik.errors.fullName && (
              <p className="error_msg">{formik.errors.fullName}</p>
            )}
          </div>
          <div className={styles.SignUp_box}>
            <label htmlFor="" className={styles.SignUp_label}>
              Email
            </label>
            <input
              type="email"
              className={styles.SignUp_input}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <p className="error_msg">{formik.errors.email}</p>
            )}
          </div>
          <div className={styles.SignUp_box}>
            <label htmlFor="" className={styles.SignUp_label}>
              Mật khẩu
            </label>
            <div className={styles.SignUp_input_box}>
              <input
                type={showPassword ? 'text' : 'password'}
                className={styles.SignUp_input}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <Image
                src={showPassword ? visibility_off : visibility}
                alt="visibility"
                className={styles.SignUp_img_visibility}
                onClick={togglePasswordVisibility}
              />
            </div>
            {formik.errors.password && (
              <p className="error_msg">{formik.errors.password}</p>
            )}
          </div>
          <div className={styles.SignUp_box}>
            <label htmlFor="" className={styles.SignUp_label}>
              Xác nhân mật khẩu
            </label>
            <div className={styles.SignUp_input_box}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className={styles.SignUp_input}
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              <Image
                src={showConfirmPassword ? visibility_off : visibility}
                alt="visibility"
                className={styles.SignUp_img_visibility}
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
            {formik.errors.confirmPassword && (
              <p className="error_msg">{formik.errors.confirmPassword}</p>
            )}
          </div>
          <div className={styles.SignUp_box_btn}>
            <button className={styles.SignUp_btn}>Đăng ký</button>
          </div>
          <div className={styles.SignUp_box_account}>
            <div className={styles.SignIn_box_account_sign_up}>
              Bạn đã có tài khoản{' '}
              <Link
                href="/auth/sign-in"
                className={styles.SignUp_box_account_link}
              >
                Đăng nhập
              </Link>
            </div>
          </div>
          <div className={styles.SignUp_box_other_sign_up}>
            <hr className={styles.SignUp_box_other_sign_in_line}></hr>
            <p className={styles.SignUp_box_other_sign_up_text}>Đăng ký với</p>
            <hr className={styles.SignUp_box_other_sign_in_line}></hr>
          </div>
          <div className={styles.SignUp_box_other}>
            <div className={styles.SignUp_box_other_google}>
              <Image
                src={google}
                alt="google"
                className={styles.SignUp_box_other_google_img}
              />
            </div>
            <div className={styles.SignUp_box_other_facebook}>
              <Image
                src={facebook}
                alt="facebook"
                className={styles.SignUp_box_other_facebook_img}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
