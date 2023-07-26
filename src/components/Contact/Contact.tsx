import React from "react";
import Style from "./Contact.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      content: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("")
        .min(5, "Họ và tên phải nhiều hơn 5 ký tự"),
      phoneNumber: Yup.string()
        .required("")
        .matches(
          /([\+84|84|0|0084]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/, //eslint-disable-line
          "Số điện thoại không hợp lệ"
        ),
      email: Yup.string()
        .required("")
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Email không hợp lệ"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={Style.Contact}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md 6 col-12">
            <div className={Style.Contact_left}>
              <h3 className={Style.Contact_left_title}>Thông tin</h3>
              <span className={Style.Contact_left_subTitle}>
                Mọi thắc mắc các bạn vui lòng liên hệ theo thông tin bên dưới
                hoặc có thể gửi vào hồm thư của mình.
              </span>
              <p className={Style.Contact_left_name}>Khuong Viet Tai</p>
              <p className={Style.Contact_left_info}>Zalo: 0945034118</p>
              <p className={Style.Contact_left_info}>
                Facebook: https://www.facebook.com/khuongviettai
              </p>
              <p className={Style.Contact_left_info}>
                Email: khuongviettai@outlook.com
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md 6 col-12">
            <div className={Style.Contact_right}>
              <h3 className={Style.Contact_right_title}>Liên hệ</h3>
              <form
                action=""
                className={Style.Contact_right_form}
                onSubmit={formik.handleSubmit}
              >
                <div className={Style.Contact_right_box}>
                  {formik.errors.fullName && (
                    <p className="footer__error-msg">
                      {formik.errors.fullName}
                    </p>
                  )}
                  <input
                    type="text"
                    className={Style.Contact_right_input}
                    placeholder="Họ và tên*"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className={Style.Contact_right_box}>
                  {formik.errors.phoneNumber && (
                    <p className="footer__error-msg">
                      {formik.errors.phoneNumber}
                    </p>
                  )}
                  <input
                    type="number"
                    className={Style.Contact_right_input}
                    placeholder="Số điện thoại*"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className={Style.Contact_right_box}>
                  {formik.errors.email && (
                    <p className="footer__error-msg">{formik.errors.email}</p>
                  )}
                  <input
                    type="email"
                    className={Style.Contact_right_input}
                    placeholder="Email*"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className={Style.Contact_right_box}>
                  <textarea
                    className={Style.Contact_right_input_text}
                    placeholder="nội dung"
                  />
                </div>
                <div className={Style.Contact_right_btn_box}>
                  <button className={Style.Contact_right_btn}>Gửi</button>
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
