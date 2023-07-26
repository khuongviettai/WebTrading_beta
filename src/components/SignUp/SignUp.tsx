import React from "react";
import Style from "./SignUp.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("")
        .min(5, "Họ và tên phải nhiều hơn 5 ký tự"),
      email: Yup.string()
        .required("")
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Email không hợp lệ"
        ),
      // eslint-disable-next-line
      password: Yup.string()
        .required("")
        .matches(/^.{5,}$/, "Mật khẩu cần ít nhất 5 ký tự"),
      confirmPassword: Yup.string()
        .required("")
        .oneOf([Yup.ref("password")], "Mật khẩu không chính xác"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={Style.SignUp}>
      <div className={Style.SignUp_box}>
        <h3 className={Style.SignUp_title}>Đăng ký</h3>
        <form
          action=""
          className={Style.SignUp_form}
          onSubmit={formik.handleSubmit}
        >
          <div className={Style.SignUp_form_box}>
            <label htmlFor="" className={Style.SignUp_form_label_username}>
              Họ và tên
            </label>
            <input
              type="text"
              className={Style.SignUp_form_input_username}
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
            {formik.errors.fullName && (
              <p className="footer__error-msg">{formik.errors.fullName}</p>
            )}
          </div>
          <div className={Style.SignUp_form_box}>
            <label htmlFor="" className={Style.SignUp_form_label_email}>
              Email
            </label>
            <input
              type="text"
              className={Style.SignUp_form_input_email}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <p className="footer__error-msg">{formik.errors.email}</p>
            )}
          </div>
          <div className={Style.SignUp_form_box}>
            <label htmlFor="" className={Style.SignUp_form_label_password}>
              Mật khẩu
            </label>
            <input
              type="password"
              className={Style.SignUp_form_input_password}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && (
              <p className="footer__error-msg">{formik.errors.password}</p>
            )}
          </div>
          <div className={Style.SignUp_form_box_confirm}>
            <label
              htmlFor=""
              className={Style.SignUp_form_label_confirm_password}
            >
              Nhập lại mật khẩu
            </label>
            <input
              type="password"
              className={Style.SignUp_form_input_confirm_password}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {formik.errors.confirmPassword && (
              <p className="footer__error-msg">
                {formik.errors.confirmPassword}
              </p>
            )}
          </div>
          <div className={Style.SignUp_box_sign_in}>
            <a href="/sign-up" className={Style.SignUp_link_sign_in}>
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
