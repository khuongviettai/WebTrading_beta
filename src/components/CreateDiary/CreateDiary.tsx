'use client';
import React, { useEffect, useState } from 'react';
import styles from './CreateDiary.module.scss';
import Image from 'next/image';
import icons from '@/utils/icons';

export interface ICreateDiary {
  onClose: () => void;
}

const CreateDiary: React.FunctionComponent<ICreateDiary> = ({ onClose }) => {
  const [defaultDate, setDefaultDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDefaultDate(today);
  }, []);
  const [showCreateDiary, setShowCreateDiary] = useState(true);
  const handleCancelClick = () => {
    onClose();
  };

  return (
    <>
      {showCreateDiary && (
        <div className={styles.CreateDiary}>
          <Image
            src={icons.closes}
            alt="close"
            className={styles.CreateDiary_img_close}
            onClick={handleCancelClick}
          />

          <div className={styles.Create_box}>
            <h2 className={styles.CreateDiary_title}>Thêm nhật ký</h2>
            <form className={styles.Create_form}>
              <div className={styles.CreateDiary_box_input}>
                <input
                  type="date"
                  className={styles.CreateDiary_input}
                  placeholder="Ngày"
                  defaultValue={defaultDate}
                />
              </div>
              <div className={styles.CreateDiary_box_input}>
                <input
                  type="text"
                  className={styles.CreateDiary_input}
                  placeholder="Mã giao dịch"
                  onInput={(event) => {
                    event.currentTarget.value =
                      event.currentTarget.value.toUpperCase();
                  }}
                />
              </div>
              <div className={styles.CreateDiary_box_input}>
                <input
                  type="text"
                  className={styles.CreateDiary_input}
                  placeholder="Trạng thái"
                />
              </div>
              <div className={styles.CreateDiary_box_input}>
                <input
                  type="double"
                  className={styles.CreateDiary_input}
                  placeholder="Khối lượng"
                />
              </div>
              <div className={styles.CreateDiary_box_input}>
                <input
                  type="double"
                  className={styles.CreateDiary_input}
                  placeholder="Điểm vào"
                />
              </div>
              <div className={styles.CreateDiary_box_input}>
                <input
                  type="double"
                  className={styles.CreateDiary_input}
                  placeholder="Dừng lỗ"
                />
              </div>
              <div className={styles.CreateDiary_box_input}>
                <input
                  type="double"
                  className={styles.CreateDiary_input}
                  placeholder="Chốt lời"
                />
              </div>
              <div className={styles.CreateDiary_box_input}>
                <input
                  type="double"
                  className={styles.CreateDiary_input}
                  placeholder="Lợi nhuận"
                />
              </div>
              <div className={styles.CreateDiary_box_input}>
                <textarea
                  className={styles.CreateDiary_textarea}
                  placeholder="Ghi chú"
                />
              </div>
              <div className={styles.CreateDiary_btn_box}>
                <div className={styles.CreateDiary_wrap_btn}>
                  <button className={styles.CreateDiary_btn_save}>Lưu</button>
                </div>
                <div className={styles.CreateDiary_wrap_btn}>
                  <button
                    className={styles.CreateDiary_btn_cancel}
                    onClick={handleCancelClick}
                  >
                    Huỷ
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateDiary;
