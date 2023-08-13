'use client';
import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export interface IContact {}

const Contact: React.FunctionComponent<IContact> = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  // validate the form
  const formik = useFormik({
    initialValues: {
      name: '',
      phone_number: '',
      email: '',
      content: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Vui lòng nhập họ tên'),
      phone_number: Yup.string()
        .required('Vui lòng nhập số điện thoại')
        .matches(
          /(|84|0[3|5|7|8|9])+([0-9]{8})\b/g,
          'Số điện thoại không hợp lệ',
        ),
      email: Yup.string()
        .required('Vui lòng nhập email')
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Email không hợp lệ',
        ),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post('http://localhost:8080/api/contacts', {
          name: values.name,
          phone_number: values.phone_number,
          email: values.email,
          content: values.content,
        });
        resetForm();
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      } catch (err: any) {
        console.log(err);
      }
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
                className={styles.Contact_right_form}
                onSubmit={formik.handleSubmit}
              >
                <div className={styles.Contact_right_form_box}>
                  <input
                    type="text"
                    className={styles.Contact_right_form_input}
                    placeholder="Họ và tên*"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="error_msg">{formik.errors.name}</p>
                  )}
                </div>
                <div className={styles.Contact_right_form_box}>
                  <input
                    type="number"
                    className={styles.Contact_right_form_input}
                    placeholder="Số điện thoại*"
                    name="phone_number"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone_number &&
                    formik.errors.phone_number && (
                      <p className="error_msg">{formik.errors.phone_number}</p>
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
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="error_msg">{formik.errors.email}</p>
                  )}
                </div>
                <div className={styles.Contact_right_form_box}>
                  <textarea
                    name="content"
                    value={formik.values.content}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={styles.Contact_right_form_area}
                    placeholder="Nội dung*"
                  />
                </div>

                <div className={styles.Contact_right_form_box}>
                  <button
                    className={styles.Contact_right_form_btn}
                    type="submit"
                  >
                    Gửi
                  </button>
                </div>
              </form>
              {submitSuccess && (
                <div className="success_msg">Gửi thành công!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
