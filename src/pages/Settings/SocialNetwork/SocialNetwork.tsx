'use client';
import React, { useState } from 'react';
import styles from './SocialNetwork.module.scss';

export interface ISocialNetwork {}

const SocialNetwork: React.FunctionComponent<ISocialNetwork> = () => {
  const [editFacebook, setEditFacebook] = useState(false);
  const [facebook, setFacebook] = useState('Facebook');
  const [editTwitter, setEditTwitter] = useState(false);
  const [twitter, setTwitter] = useState('Twitter');
  const [editTelegram, setEditTelegram] = useState(false);
  const [telegram, setTelegram] = useState('Telegram');
  const [editInstagram, setEditInstagram] = useState(false);
  const [instagram, setInstagram] = useState('Instagram');
  const [editLinkedin, setEditLinkedin] = useState(false);
  const [linkedin, setLinkedin] = useState('Linkin');

  // facebook
  const handleEditFacebook = () => {
    setEditFacebook(true);
  };
  const handleSaveFacebookClick = () => {
    setEditFacebook(false);
  };

  const handleCancelFacebookClick = () => {
    setEditFacebook(false);
  };

  const handleChangeFacebook = (event: any) => {
    setFacebook(event.target.value);
  };

  // Twitter

  const handleEditTwitter = () => {
    setEditTwitter(true);
  };
  const handleSaveTwitterClick = () => {
    setEditTwitter(false);
  };

  const handleCancelTwitterClick = () => {
    setEditTwitter(false);
  };

  const handleChangeTwitter = (event: any) => {
    setTwitter(event.target.value);
  };

  //   Telegram

  const handleEditTelegram = () => {
    setEditTelegram(true);
  };
  const handleSaveTelegramClick = () => {
    setEditTelegram(false);
  };

  const handleCancelTelegramClick = () => {
    setEditTelegram(false);
  };

  const handleChangeTelegram = (event: any) => {
    setTelegram(event.target.value);
  };

  //     Instagram

  const handleEditInstagram = () => {
    setEditInstagram(true);
  };
  const handleSaveInstagramClick = () => {
    setEditInstagram(false);
  };

  const handleCancelInstagramClick = () => {
    setEditInstagram(false);
  };

  const handleChangeInstagram = (event: any) => {
    setInstagram(event.target.value);
  };

  //     Linkedin

  const handleEditLinkedin = () => {
    setEditLinkedin(true);
  };
  const handleSaveLinkedinClick = () => {
    setEditLinkedin(false);
  };

  const handleCancelLinkedinClick = () => {
    setEditLinkedin(false);
  };

  const handleChangeLinkedin = (event: any) => {
    setLinkedin(event.target.value);
  };

  return (
    <div className={styles.SocialNetwork}>
      <div className="container">
        <div className={styles.SocialNetwork_box}>
          <div className={styles.SocialNetwork_box_info}>
            <div className={styles.SocialNetwork_wrapper}>
              <div className={styles.SocialNetwork_box_input}>
                <h4 className={styles.SocialNetwork_input_title}>Facebook</h4>
                <div className={styles.SocialNetwork_body}>
                  <input
                    className={styles.SocialNetwork_input}
                    disabled={!editFacebook}
                    value={facebook}
                    onChange={handleChangeFacebook}
                  />
                </div>
              </div>
              <div className={styles.SocialNetwork_box_edit}>
                {!editFacebook ? (
                  <button
                    className={styles.SocialNetwork_btn_edit}
                    onClick={handleEditFacebook}
                  >
                    Chỉnh sửa
                  </button>
                ) : (
                  <div className={styles.SocialNetwork_btn_editMode}>
                    <button
                      className={styles.SocialNetwork_btn_save}
                      onClick={handleSaveFacebookClick}
                    >
                      Lưu
                    </button>
                    <button
                      className={styles.SocialNetwork_btn_cancel}
                      onClick={handleCancelFacebookClick}
                    >
                      Huỷ
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.SocialNetwork_wrapper}>
              <div className={styles.SocialNetwork_box_input}>
                <h4 className={styles.SocialNetwork_input_title}>Twitter</h4>
                <div className={styles.SocialNetwork_input_box}>
                  <input
                    className={styles.SocialNetwork_input}
                    onChange={handleChangeTwitter}
                    disabled={!editTwitter}
                    value={twitter}
                  />
                </div>
              </div>
              <div className={styles.SocialNetwork_box_edit}>
                {!editTwitter ? (
                  <button
                    className={styles.SocialNetwork_btn_edit}
                    onClick={handleEditTwitter}
                  >
                    Chỉnh sửa
                  </button>
                ) : (
                  <div className={styles.SocialNetwork_btn_editMode}>
                    <button
                      className={styles.SocialNetwork_btn_save}
                      onClick={handleSaveTwitterClick}
                    >
                      Lưu
                    </button>
                    <button
                      className={styles.SocialNetwork_btn_cancel}
                      onClick={handleCancelTwitterClick}
                    >
                      Huỷ
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.SocialNetwork_wrapper}>
              <div className={styles.SocialNetwork_box_input}>
                <h4 className={styles.SocialNetwork_input_title}>Telegram</h4>
                <div className={styles.SocialNetwork_input_box}>
                  <input
                    className={styles.SocialNetwork_input}
                    onChange={handleChangeTelegram}
                    disabled={!editTelegram}
                    value={telegram}
                  />
                </div>
              </div>
              <div className={styles.SocialNetwork_box_edit}>
                {!editTelegram ? (
                  <button
                    className={styles.SocialNetwork_btn_edit}
                    onClick={handleEditTelegram}
                  >
                    Chỉnh sửa
                  </button>
                ) : (
                  <div className={styles.SocialNetwork_btn_editMode}>
                    <button
                      className={styles.SocialNetwork_btn_save}
                      onClick={handleSaveTelegramClick}
                    >
                      Lưu
                    </button>
                    <button
                      className={styles.SocialNetwork_btn_cancel}
                      onClick={handleCancelTelegramClick}
                    >
                      Huỷ
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.SocialNetwork_wrapper}>
              <div className={styles.SocialNetwork_box_input}>
                <h4 className={styles.SocialNetwork_input_title}>Instagram</h4>
                <div className={styles.SocialNetwork_input_box}>
                  <input
                    className={styles.SocialNetwork_input}
                    onChange={handleChangeInstagram}
                    disabled={!editInstagram}
                    value={instagram}
                  />
                </div>
              </div>
              <div className={styles.SocialNetwork_box_edit}>
                {!editInstagram ? (
                  <button
                    className={styles.SocialNetwork_btn_edit}
                    onClick={handleEditInstagram}
                  >
                    Chỉnh sửa
                  </button>
                ) : (
                  <div className={styles.SocialNetwork_btn_editMode}>
                    <button
                      className={styles.SocialNetwork_btn_save}
                      onClick={handleSaveInstagramClick}
                    >
                      Lưu
                    </button>
                    <button
                      className={styles.SocialNetwork_btn_cancel}
                      onClick={handleCancelInstagramClick}
                    >
                      Huỷ
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.SocialNetwork_wrapper}>
              <div className={styles.SocialNetwork_box_input}>
                <h4 className={styles.SocialNetwork_input_title}>Linkedin</h4>
                <div className={styles.SocialNetwork_input_box}>
                  <input
                    className={styles.SocialNetwork_input}
                    onChange={handleChangeLinkedin}
                    disabled={!editLinkedin}
                    value={linkedin}
                  />
                </div>
              </div>
              <div className={styles.SocialNetwork_box_edit}>
                {!editLinkedin ? (
                  <button
                    className={styles.SocialNetwork_btn_edit}
                    onClick={handleEditLinkedin}
                  >
                    Chỉnh sửa
                  </button>
                ) : (
                  <div className={styles.SocialNetwork_btn_editMode}>
                    <button
                      className={styles.SocialNetwork_btn_save}
                      onClick={handleSaveLinkedinClick}
                    >
                      Lưu
                    </button>
                    <button
                      className={styles.SocialNetwork_btn_cancel}
                      onClick={handleCancelLinkedinClick}
                    >
                      Huỷ
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialNetwork;
