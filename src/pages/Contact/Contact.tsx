'use client';
import React from 'react';
import styles from './Contact.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export interface IContact {}

const Contact: React.FunctionComponent<IContact> = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      content: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required('')
        .min(5, 'Họ và tên phải nhiều hơn 5 ký tự'),
      phoneNumber: Yup.string()
        .required('')
        .matches(
          /([\+84|84|0|0084]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/, //eslint-disable-line
          'Số điện thoại không hợp lệ',
        ),
      email: Yup.string()
        .required('')
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Email không hợp lệ',
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={styles.Contact}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className={styles.Contact_left}>
              <h3 className={styles.Contact_left_title}>Thông tin liên hệ</h3>
              <span className={styles.Contact_left_subtitle}>
                {' '}
                Mọi thắc mắc các bạn vui lòng liên hệ theo thông tin bên dưới
                hoặc có thể gửi vào hòm thư của mình.
              </span>
              <p className={styles.Contact_left_name}>
                Khương Viết Tài:
                <a href="/khuongviettai" className={styles.Contact_left_link}>
                  Xem thêm
                </a>
              </p>
              <div className={styles.Contact_left_zalo}>
                Zalo:
                <a href="#" className={styles.Contact_left_link}>
                  0945034118
                </a>
              </div>
              <div className={styles.Contact_left_facebook}>
                Facebook:
                <a href="#" className={styles.Contact_left_link}>
                  https://www.facebook.com/khuongviettai
                </a>
              </div>
              <div className={styles.Contact_left_gmail}>
                Gmail:
                <a href="#" className={styles.Contact_left_link}>
                  khuongtai789@gmail.com
                </a>
              </div>
              <div className={styles.Contact_left_telegram}>
                Telegram:
                <a href="#" className={styles.Contact_left_link}>
                  0945034118
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className={styles.Contact_right}>
              <h3 className={styles.Contact_right_title}>Hòm thư liên hệ</h3>
              <form
                action=""
                className={styles.Contact_right_form}
                onSubmit={formik.handleSubmit}
              >
                <div className={styles.Contact_right_form_box}>
                  <input
                    type="text"
                    className={styles.Contact_right_form_input}
                    placeholder="Họ và tên*"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.fullName && (
                    <p className="error_msg">{formik.errors.fullName}</p>
                  )}
                </div>
                <div className={styles.Contact_right_form_box}>
                  <input
                    type="number"
                    className={styles.Contact_right_form_input}
                    placeholder="Số điện thoại*"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phoneNumber && (
                    <p className="error_msg">{formik.errors.phoneNumber}</p>
                  )}
                </div>
                <div className={styles.Contact_right_form_box}>
                  <input
                    type="email"
                    className={styles.Contact_right_form_input}
                    placeholder="Email*"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && (
                    <p className="error_msg">{formik.errors.email}</p>
                  )}
                </div>
                <div className={styles.Contact_right_form_box}>
                  <textarea
                    className={styles.Contact_right_form_area}
                    placeholder="Nội dung*"
                  />
                </div>

                <div className={styles.Contact_right_form_box}>
                  <button className={styles.Contact_right_form_btn}>Gửi</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
