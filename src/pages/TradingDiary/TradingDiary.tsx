'use client';
import React, { useState } from 'react';
import styles from './TradingDiary.module.scss';
import CreateDiary from '@/components/CreateDiary/CreateDiary';

export interface ITradingDiary {}

const TradingDiary: React.FunctionComponent<ITradingDiary> = () => {
  const [showCreateDiary, setShowCreateDiary] = useState(false);

  const handleCreateDiaryClick = () => {
    setShowCreateDiary(true);
  };
  const handleCloseCreateDiary = () => {
    setShowCreateDiary(false);
  };
  return (
    <div className={styles.Diary}>
      <div className="container">
        <div className={styles.Diary_wrap}>
          <div className={styles.Diary_name_box}>
            <span className={styles.Diary_welcome}>
              Xin Chào
              <span className={styles.Diary_name}>Khuong Viet Tai</span>
            </span>
          </div>
          <div className={styles.Diary_box_wrap}>
            <div className={styles.Diary_box_option}>
              <select className={styles.Diary_select_box}>
                <option value="1" className={styles.Diary_option}>
                  Hôm nay
                </option>
                <option value="2" className={styles.Diary_option}>
                  Tuần này
                </option>
                <option value="3" className={styles.Diary_option}>
                  Tháng này
                </option>
                <option value="4" className={styles.Diary_option}>
                  Tháng trước
                </option>
                <option value="5" className={styles.Diary_option}>
                  Tất cả
                </option>
              </select>
            </div>
            <div className={styles.Diary_box_create}>
              <button
                className={styles.Diary_create_trading}
                onClick={handleCreateDiaryClick}
              >
                Ghi nhật ký
              </button>
            </div>
            {showCreateDiary && (
              <CreateDiary onClose={handleCloseCreateDiary} />
            )}
          </div>
          <div className={styles.Diary_table_box}>
            <table className={styles.Diary_table}>
              <thead className={styles.Diary_thead}>
                <tr className={styles.Diary_row}>
                  <th className={styles.Diary_header}>Ngày</th>
                  <th className={styles.Diary_header}>Mã giao dịch</th>
                  <th className={styles.Diary_header}>Trạng thái</th>
                  <th className={styles.Diary_header}>Khối lượng</th>
                  <th className={styles.Diary_header}>Điểm vào</th>
                  <th className={styles.Diary_header}>Dừng lỗ</th>
                  <th className={styles.Diary_header}>Chốt lời</th>
                  <th className={styles.Diary_header}>Lợi nhuận</th>
                  <th className={styles.Diary_header}>Ghi chú</th>
                </tr>
              </thead>
              <tbody className={styles.Diary_table_body}>
                <tr className={styles.Diary_row}>
                  <td className={styles.Diary_table_data}>sdhgh</td>
                  <td className={styles.Diary_table_data}>sdhgh</td>
                  <td className={styles.Diary_table_data}>sdhgh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingDiary;
