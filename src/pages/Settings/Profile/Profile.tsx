'use client';
import React, { useState } from 'react';
import styles from './Profile.module.scss';
import Image from 'next/image';

export interface IProfile {}

const Profile: React.FunctionComponent<IProfile> = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState('Khuong Viet Tai');
  const handleEditClick = () => {
    setIsEditMode(true);
  };
  const handleSaveClick = () => {
    // Xử lý logic lưu dữ liệu ở đây

    setIsEditMode(false); // Sau khi lưu xong, thoát khỏi chế độ chỉnh sửa
  };
  const handleCancelClick = () => {
    setIsEditMode(false); // Hủy bỏ việc chỉnh sửa
  };
  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  return (
    <div className={styles.Profile}>
      <div className="container">
        <div className={styles.Profile_box}>
          <div className={styles.Profile_box_info}>
            <div className={styles.Profile_box_avatar}>
              <span className={styles.Profile_avatar_title}>Ảnh đại diện</span>
              <div className={styles.Profile_avatar}>
                <Image src="" alt="avatar" width={130} height={130} />
              </div>
            </div>
            <div className={styles.Profile_wrapper}>
              <div className={styles.Profile_box_input}>
                <h4 className={styles.Profile_box_input_title}>Họ tên</h4>
                <div className={styles.Profile_body}>
                  <input
                    className={styles.Profile_input}
                    disabled={!isEditMode}
                    value={name}
                    onChange={handleNameChange}
                  />
                  <div className={styles.Profile_disc_box}>
                    <p className={styles.Profile_disc}>
                      Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các
                      bình luận của bạn.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.Profile_box_edit}>
                {!isEditMode ? (
                  <button
                    className={styles.Profile_btn_edit}
                    onClick={handleEditClick}
                  >
                    Chỉnh sửa
                  </button>
                ) : (
                  <div className={styles.Profile_btn_editMode}>
                    <button
                      className={styles.Profile_btn_save}
                      onClick={handleSaveClick}
                    >
                      Lưu
                    </button>
                    <button
                      className={styles.Profile_btn_cancel}
                      onClick={handleCancelClick}
                    >
                      Huỷ
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.Profile_wrapper}>
              <div className={styles.Profile_box_input}>
                <h4 className={styles.Profile_box_input_title}>Email</h4>
                <div className={styles.Profile_body}>
                  <input
                    className={styles.Profile_input}
                    disabled={!isEditMode}
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
