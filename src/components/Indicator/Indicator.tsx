import React from "react";
import Style from "./Indicator.module.scss";

export interface IIndicator {}

const Indicator: React.FunctionComponent<IIndicator> = () => {
  return (
    <div className={Style.Indicator}>
      <div className="container">
        <header className={Style.Indicator_header}>
          <h1 className={Style.Indicator_title}>Indicator</h1>
          <span className={Style.Indicator_subTitle}>
            Trong thế giới của giao dịch tài chính, các chỉ báo (indicator) đóng
            vai trò quan trọng trong việc giúp nhà giao dịch hiểu và phân tích
            xu hướng thị trường, tăng cường quyết định đầu tư và đem lại lợi
            nhuận ổn định. Indicator là các công cụ phân tích kỹ thuật tinh vi,
            được tích hợp vào các nền tảng giao dịch phổ biến như MT4 và MT5,
            giúp tạo ra những đánh giá và tín hiệu chính xác về biến động giá,
            độ mạnh và đà của thị trường.
          </span>
          <div className={Style.Indicator_box_of_feature}>
            <h3 className={Style.Indicator_of_feature}>
              Tính năng của Indicator:
            </h3>
            <ul className={Style.Indicator_of_feature_list}>
              <li className={Style.Indicator_of_feature_item}>
                <span className={Style.Indicator_of_item_span}>
                  Xác định xu hướng:{" "}
                </span>
                <p>
                  Các chỉ báo giúp nhà giao dịch xác định xu hướng hiện tại của
                  thị trường. Nhờ sự phân tích dữ liệu lịch sử, chúng có thể
                  hiển thị xu hướng tăng, giảm hoặc đi ngang của giá cả.
                </p>
              </li>
              <li className={Style.Indicator_of_feature_item}>
                <span className={Style.Indicator_of_item_span}>
                  Xác định điểm mua/bán:
                </span>
                <p>
                  Indicator cung cấp tín hiệu mua hoặc bán khi xuất hiện các
                  điều kiện đặc biệt trên biểu đồ giá. Điều này giúp nhà giao
                  dịch xác định thời điểm hợp lý để mở hoặc đóng vị thế giao
                  dịch.
                </p>
              </li>
              <li className={Style.Indicator_of_feature_item}>
                <span className={Style.Indicator_of_item_span}>
                  Đo lường độ mạnh của xu hướng:{" "}
                </span>
                <p>
                  Các chỉ báo giúp đo lường sức mạnh của xu hướng hiện tại, cho
                  phép nhà giao dịch xác định xem xu hướng đang mạnh mẽ hay yếu
                  đuối.
                </p>
              </li>
              <li className={Style.Indicator_of_feature_item}>
                <span className={Style.Indicator_of_item_span}>
                  Định vị vùng giá quan trọng:{" "}
                </span>
                <p>
                  Indicator thường cung cấp các vùng giá tiềm năng như mức hỗ
                  trợ và kháng cự, giúp nhà giao dịch xác định các điểm quan
                  trọng trong việc đặt lệnh stop-loss và take-profit.
                </p>
              </li>
              <li className={Style.Indicator_of_feature_item}>
                <span className={Style.Indicator_of_item_span}>
                  Cảnh báo và thông báo:{" "}
                </span>
                <p>
                  Một số chỉ báo có tích hợp tính năng cảnh báo, cho phép nhà
                  giao dịch nhận thông báo ngay khi xuất hiện tín hiệu giao dịch
                  quan trọng.
                </p>
              </li>
            </ul>
          </div>
          <div className={Style.Indicator_box_of_use}>
            <h3 className={Style.Indicator_of_use}>
              Cách sử dụng Indicator một cách hiệu quả:
            </h3>
            <ul className={Style.Indicator_of_use_list}>
              <li className={Style.Indicator_of_feature_item}>
                <span className={Style.Indicator_of_item_span}>
                  Nắm vững kiến thức:{" "}
                </span>
                <p>
                  Để sử dụng indicator hiệu quả, nhà giao dịch cần hiểu rõ cơ
                  chế hoạt động và tính năng của từng chỉ báo. Có kiến thức vững
                  chắc sẽ giúp bạn áp dụng chúng một cách hợp lý và tự tin hơn
                  trong quyết định giao dịch.
                </p>
              </li>
              <li className={Style.Indicator_of_feature_item}>
                <span className={Style.Indicator_of_item_span}>
                  Kết hợp nhiều indicator:{" "}
                </span>
                <p>
                  Thay vì dựa chỉ vào một indicator duy nhất, kết hợp nhiều loại
                  chỉ báo khác nhau sẽ giúp xác định được tín hiệu giao dịch
                  chính xác hơn và giảm thiểu sai lệch.
                </p>
              </li>
              <li className={Style.Indicator_of_feature_item}>
                <span className={Style.Indicator_of_item_span}>
                  Thử nghiệm và điều chỉnh:{" "}
                </span>
                <p>
                  Mỗi thị trường và cặp tiền tệ có đặc thù riêng, vì vậy bạn nên
                  thử nghiệm và điều chỉnh các cài đặt của indicator để phù hợp
                  với điều kiện giao dịch cụ thể.
                </p>
              </li>
              <li className={Style.Indicator_of_feature_item}>
                <span className={Style.Indicator_of_item_span}>
                  Tin tưởng kỹ thuật và tâm lý:
                </span>
                <p>
                  Mặc dù indicator là công cụ hữu ích, nhưng không thể đảm bảo
                  100% thành công. Tin tưởng vào kỹ thuật và tâm lý giao dịch là
                  điều quan trọng để duy trì sự ổn định và lâu dài trong việc
                  đầu tư.
                </p>
              </li>
            </ul>
          </div>
          <h3 className={Style.Indicator_of_conclusion}>Kết luận</h3>
          <span className={Style.Indicator_subTitle}>
            Indicator là những công cụ quan trọng giúp nhà giao dịch phân tích
            thị trường và đưa ra quyết định giao dịch chính xác. Bằng cách hiểu
            và sử dụng chúng một cách hiệu quả, bạn có thể nâng cao khả năng dự
            đoán và tối ưu hóa lợi nhuận trong hoạt động giao dịch tài chính.
            Tuy nhiên, lưu ý rằng các chỉ báo chỉ là một phần trong hệ thống
            giao dịch tổng thể, và việc kết hợp với các yếu tố khác như quản lý
            rủi ro và tư duy giao dịch là cực kỳ quan trọng.
          </span>
        </header>
      </div>
    </div>
  );
};

export default Indicator;
