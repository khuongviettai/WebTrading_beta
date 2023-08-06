"use client";
import React, { useRef } from "react";
import styles from "./KhuongVietTai.module.scss";

export interface IKhuongVietTai {}

const KhuongVietTai: React.FunctionComponent<IKhuongVietTai> = () => {
  const scrollDownRef = useRef<HTMLDivElement>(null);

  const scrollToscrollDown = () => {
    window.scrollBy({
      top: 650,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.KhuongVietTai}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.KhuongVietTai_left}>
              <h4 className={styles.KhuongVietTai_left_title}>
                Let&apos;s get know about me
              </h4>
              <span className={styles.KhuongVietTai_left_subTitle}>
                Xin chào mình là Tài. Mình là một sinh viên của trường Đại học
                công nghệ thông tin - Đại học quốc gia thành phố Hồ Chí Minh.
                Mình tạo ra trang web này là muốn giúp các bạn có cái nhìn tổng
                quát hơn về tài chính.
              </span>
              <div
                className={styles.KhuongVietTai_left_box_btn}
                onClick={scrollToscrollDown}
              >
                <span className={styles.KhuongVietTai_left_btn}>
                  Khám phá thêm về tôi
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.KhuongVietTai_right}>
              <div className={styles.KhuongVietTai_right_box_border}>
                <div className={styles.KhuongVietTai_right_box}>
                  <div className={styles.KhuongVietTai_right_box_img} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* info */}

        <div className={styles.KhuongVietTai_info} ref={scrollDownRef}>
          <h3 className={styles.KhuongVietTai_info_title}>Giới thiệu</h3>
          <div className={styles.KhuongVietTai_info_box}>
            <p className={styles.KhuongVietTai_info_box_content}>
              Xin chào mọi người! Mình là Khương Viết Tài, một người đam mê Công
              nghệ thông tin và cũng rất hứng thú với thị trường tài chính và
              forex. Mình vô cùng may mắn khi đã được biết đến thế giới tài
              chính từ khi mới bước chân vào năm nhất đại học.
            </p>
            <p className={styles.KhuongVietTai_info_box_content}>
              Lĩnh vực Công nghệ thông tin luôn thu hút mình bởi tính đa dạng và
              tiềm năng vô tận. mình đã có cơ hội tiếp cận với các thiết bị điện
              tử và máy tính. Từ đó, mình quyết định theo đuổi việc học Công
              nghệ thông tin để có thể đóng góp vào việc tạo ra những sản phẩm
              và giải pháp sáng tạo cho thế giới kỹ thuật số ngày càng phát
              triển.
            </p>
            <p className={styles.KhuongVietTai_info_box_content}>
              Tuy nhiên, ngay từ những ngày đầu học đại học, mình cũng dành thời
              gian tìm hiểu về thị trường tài chính và forex. Điều này bắt nguồn
              từ niềm đam mê và tò mò muốn hiểu rõ hơn về cơ hội đầu tư và các
              yếu tố ảnh hưởng đến thị trường tài chính. Với sự tư duy phân tích
              và kiên nhẫn, mình đã dần tiến xa hơn trong việc giao dịch forex
              và tích lũy được kinh nghiệm quý báu sau 4 năm hoạt động trong
              lĩnh vực này.
            </p>
            <p className={styles.KhuongVietTai_info_box_content}>
              Trải qua những thị trường biến động, mình đã học được cách đối mặt
              với những rủi ro và thách thức trong giao dịch. Từ những thất bại
              đầu tiên, mình đã học cách rút ra bài học và cải thiện chiến lược
              giao dịch của mình. Đam mê không chỉ giúp mình kiên nhẫn vượt qua
              những khó khăn mà còn thúc đẩy mình không ngừng nỗ lực học hỏi để
              trở nên thành công hơn trong thị trường tài chính.
            </p>
            <p className={styles.KhuongVietTai_info_box_content}>
              Năm tháng trong lĩnh vực forex đã giúp Mình hiểu rõ hơn về sự phức
              tạp và tính chất biến đổi của thị trường tài chính. Mình không chỉ
              đơn thuần là một nhà giao dịch, mà còn coi đây như một cơ hội để
              thăng tiến và định hướng cho tương lai. Mình tin rằng việc kết hợp
              kiến thức về Công nghệ thông tin và tài chính sẽ giúp mình tận
              dụng tối đa các cơ hội đầu tư và mang lại giá trị bền vững trong
              cuộc sống.
            </p>
            <p className={styles.KhuongVietTai_info_box_content}>
              Với niềm đam mê không ngừng cháy bỏng với Công nghệ thông tin và
              tài chính, mình luôn sẵn lòng chia sẻ kiến thức và kinh nghiệm của
              mình với mọi người. mình hy vọng rằng, thông qua những hoạt động
              và góc nhìn cá nhân, mình có thể cùng mọi người đồng hành trên
              hành trình khám phá và thành công trong thế giới đầy hứa hẹn của
              Công nghệ thông tin và tài chính.
            </p>
          </div>
        </div>
        {/* Hành trình */}
        <div className={styles.KhuongVietTai_trip}>
          <h3 className={styles.KhuongVietTai_trip_title}>
            Hành trình biết đến thị trường Tài chính - Forex
          </h3>
          <div className={styles.KhuongVietTai_trip_box_content}>
            <p className={styles.KhuongVietTai_trip_content}>
              Hành trình của mình trong thị trường Tài chính - Forex bắt đầu từ
              năm nhất khi mình được giới thiệu qua những người bạn. Khi đó,
              mình còn chưa có nhiều kiến thức về thị trường này, chỉ biết đến
              qua lời kể và những câu chuyện từ bạn bè. Tuy nhiên, sự hứng thú
              và tò mò đã thúc đẩy mình nghiên cứu thêm về nó.
            </p>
            <p className={styles.KhuongVietTai_trip_content}>
              Để có cái nhìn rõ hơn, mình quyết định lên Youtube tìm hiểu thêm
              về thị trường Forex. Những video hướng dẫn cơ bản đã giúp mình
              hiểu hơn về cách hoạt động của thị trường này, từ cơ bản như cách
              đọc biểu đồ, hiểu các cặp tiền tệ, đến các chiến lược giao dịch.
              Sau đó, mình quyết định mở một tài khoản thử nghiệm để thực hành
              những kiến thức vừa học được.
            </p>
            <p className={styles.KhuongVietTai_trip_content}>
              Lần đầu tiên chơi Forex, mình quyết định nạp vào tài khoản 500.000
              VND để thử sức. Thành công đầu tiên khi mình kiếm được 800.000 VND
              trong một buổi tối đã khiến mình cảm thấy tự tin và phấn khích
              hơn. Tuy nhiên, thị trường Forex không phải là một bộ môn dễ dàng.
              Ngay sau đó, mình đã gặp những khó khăn, và một vài lệnh mua bán
              không thành công dẫn đến việc mất mát lớn.
            </p>
            <p className={styles.KhuongVietTai_trip_content}>
              Những kinh nghiệm tiêu cực không chỉ dạy cho mình bài học quý báu
              mà còn giúp mình nhận ra rằng, để thành công trong thị trường này,
              cần phải có sự kiên nhẫn, kiến thức vững chắc và chiến lược xác
              đáng. Mình đã nhận thấy rằng việc đầu tư vào việc học và rèn luyện
              bản thân là điều vô cùng quan trọng nếu muốn trở thành một nhà
              giao dịch thành công.
            </p>
            <p className={styles.KhuongVietTai_trip_content}>
              Từ đó, mình quyết định tìm hiểu thêm về các chiến lược giao dịch,
              phân tích kỹ thuật và phân tích cơ bản để hiểu rõ hơn về thị
              trường và các yếu tố ảnh hưởng đến giá cả. Mình cũng tìm hiểu về
              quản lý rủi ro, giới hạn số tiền đầu tư trong mỗi lệnh, và tìm
              cách kiểm soát cảm xúc khi giao dịch. Điều này giúp mình tạo ra
              một kế hoạch giao dịch cụ thể và kiên định với nó.
            </p>
            <p className={styles.KhuongVietTai_trip_content}>
              Ngoài việc tìm hiểu thông qua các nguồn tài liệu trực tuyến, mình
              cũng tìm đến các khóa học chuyên sâu và các diễn đàn để học hỏi và
              trao đổi kinh nghiệm với cộng đồng giao dịch Forex.
            </p>
            <p className={styles.KhuongVietTai_trip_content}>
              Hành trình biết đến thị trường Tài chính - Forex không chỉ giúp
              mình có cái nhìn rõ hơn về ngành nghề này mà còn đánh giá lại bản
              thân và những kỹ năng cần thiết để phát triển trong lĩnh vực này.
              Dù có những thất bại ban đầu, mình không từ bỏ mà tiếp tục rèn
              luyện và cải thiện mỗi ngày.
            </p>
            <p className={styles.KhuongVietTai_trip_content}>
              Từ kinh nghiệm thực tế, mình đã hiểu rằng Forex không phải là con
              đường dễ dàng để làm giàu, nhưng nó có tiềm năng mang đến thu nhập
              ổn định và lợi nhuận hấp dẫn nếu có kiến thức, kỹ năng và quyết
              tâm. Hành trình chinh phục thị trường này vẫn còn tiếp diễn, và
              mình sẽ không ngừng học hỏi và đối mặt với mọi thử thách để trở
              thành một nhà giao dịch thành công.
            </p>
          </div>
        </div>
        {/* Định hướng tương lai */}
        <div className={styles.KhuongVietTai_future}>
          <h3 className={styles.KhuongVietTai_future_title}>
            Định hướng cho tương lai
          </h3>
          <div className={styles.KhuongVietTai_future_box_content}>
            <p className={styles.KhuongVietTai_future_content}>
              Tương lai của mình đang hướng tới xây dựng một cộng đồng với mục
              tiêu giúp mọi người có thể kiếm được tiền và học hỏi thêm về thị
              trường Forex.
            </p>
            <p className={styles.KhuongVietTai_future_content}>
              Trong cộng đồng này, tôi muốn đem đến những kiến thức cơ bản và
              chuyên sâu về thị trường Forex, giúp mọi người hiểu rõ hơn về cách
              hoạt động và các yếu tố ảnh hưởng đến giá cả. Tôi sẽ chia sẻ những
              chiến lược giao dịch hiệu quả và phương pháp quản lý rủi ro để
              giúp thành viên trong cộng đồng giao dịch một cách thông minh và
              bền vững.
            </p>
            <p className={styles.KhuongVietTai_future_content}>
              Ngoài kiến thức về giao dịch, tôi cũng muốn đẩy mạnh việc học hỏi
              và phát triển bản thân trong lĩnh vực này. Chúng ta sẽ cùng nhau
              tham gia vào các khóa học, buổi hội thảo và nhóm nghiên cứu để
              nâng cao kỹ năng và hiểu sâu hơn về thị trường tài chính.
            </p>
            <p className={styles.KhuongVietTai_future_content}>
              Quan trọng nhất, cộng đồng này sẽ là một nơi thân thiện và chia
              sẻ, nơi mọi người có thể trao đổi kinh nghiệm, hỗ trợ lẫn nhau và
              cùng nhau phát triển. Tôi muốn tạo ra một môi trường đoàn kết, nơi
              mỗi thành viên đều có cơ hội thể hiện ý kiến và đóng góp ý tưởng.
            </p>
            <p className={styles.KhuongVietTai_future_content}>
              Đồng thời, tôi cũng hy vọng cộng đồng này sẽ giúp mọi người rèn
              luyện tư duy tự tin và kiên định. Thị trường Forex có thể biến đổi
              liên tục và đòi hỏi sự định kiến và quyết đoán. Tôi tin rằng chúng
              ta có thể cùng nhau vượt qua những khó khăn và tận dụng những cơ
              hội để đạt được thành công.
            </p>
            <p className={styles.KhuongVietTai_future_content}>
              Cuối cùng, tôi mong rằng cộng đồng này sẽ là nơi mọi người cảm
              thấy an toàn và tin tưởng để khám phá và phát triển tiềm năng của
              bản thân. Tôi sẽ luôn lắng nghe và hỗ trợ thành viên trong cộng
              đồng để chúng ta cùng nhau vươn lên và thành công trong thị trường
              Forex.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KhuongVietTai;
