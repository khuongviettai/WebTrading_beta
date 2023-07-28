import React from "react";
import Style from "./NotFound.module.scss";

export interface INotFound {}

const NotFound: React.FunctionComponent<INotFound> = () => {
  return (
    <div className={Style.NotFound}>
      <div className="container">
        <div className={Style.NotFound_box}>
          <h1 className={Style.NotFound_title}>404</h1>
          <span className={Style.NotFound_subTitle}>Oops! Page not found.</span>
          <div>
            <span className={Style.NotFound_content}>
              Xin lỗi! Nhưng trang bạn đang tìm kiếm không được tìm thấy. Vui
              lòng đảm bảo rằng bạn đã nhập đúng URL.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
