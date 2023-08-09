'use client';
import React, { useState } from 'react';
import styles from './SignIn.module.scss';
import Image from 'next/image';
import google from '../../assets/icons/google.png';
import facebook from '../../assets/icons/facebook.png';
import { signIn, useSession } from 'next-auth/react';
import visibility from '../../assets/icons/visibility.png';
import visibility_off from '../../assets/icons/visibility_off.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export interface ISignIn {}

const SignIn: React.FunctionComponent<ISignIn> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    router.push('/');
  }

  const handleGoogleSignIn = async () => {
    // Use try-catch block to handle errors
    try {
      const result = await signIn('google'); // Perform Google sign-in
      if (result?.error) {
        console.error('Google sign-in error:', result.error);
      } else if (result?.ok) {
        router.push('/'); // Redirect to home on successful sign-in
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', {
      email,
      password,
    });
  };

  return (
    <div className={styles.SignIn}>
      <div className={styles.SignIn_wrap}>
        <h3 className={styles.SignIn_title}>Đăng nhập</h3>
        <form action="" className={styles.SignIn_form} onSubmit={handleSubmit}>
          <div className={styles.SignIn_box}>
            <label htmlFor="" className={styles.SignIn_box_label}>
              Email
            </label>
            <input
              type="email"
              name=""
              className={styles.SignIn_input}
              required
            />
          </div>
          <div className={styles.SignIn_box}>
            <label htmlFor="" className={styles.SignIn_box_label}>
              Mậu khẩu
            </label>
            <div className={styles.SignIn_input_box}>
              <input
                type={showPassword ? 'text' : 'password'}
                name=""
                className={styles.SignIn_input}
                required
              />
              <Image
                src={showPassword ? visibility_off : visibility}
                alt="visibility"
                className={styles.SignIn_img_visibility}
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          <div className={styles.SignIn_box_btn}>
            <button className={styles.SignIn_btn}>Đăng nhập</button>
          </div>

          <div className={styles.SignIn_box_account}>
            <div className={styles.SignIn_box_account_sign_up}>
              Bạn chưa có tài khoản{' '}
              <Link
                href="/auth/sign-up"
                className={styles.SignIn_box_account_link}
              >
                {' '}
                Đăng ký
              </Link>
            </div>
            <div className={styles.SignIn_box_account_forgot_password}>
              <a
                href="/auth/forgot-password"
                className={styles.SignIn_box_account_link}
              >
                Quên mật khẩu?
              </a>
            </div>
          </div>
          <div className={styles.SignIn_box_other_sign_in}>
            <hr className={styles.SignIn_box_other_sign_in_line}></hr>
            <p className={styles.SignIn_box_other_sign_in_text}>
              Đăng nhập với
            </p>
            <hr className={styles.SignIn_box_other_sign_in_line}></hr>
          </div>
          <div className={styles.SignIn_box_other}>
            <div
              className={styles.SignIn_box_other_google}
              onClick={handleGoogleSignIn}
            >
              <Image
                src={google}
                alt="google"
                className={styles.SignIn_box_other_google_img}
              />
            </div>
            <div className={styles.SignIn_box_other_facebook}>
              <Image
                src={facebook}
                alt="facebook"
                className={styles.SignIn_box_other_facebook_img}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
