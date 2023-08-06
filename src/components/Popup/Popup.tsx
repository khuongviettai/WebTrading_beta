'use client';
import React, { useState, useEffect } from 'react';
import styles from './Popup.module.scss';
import close from '../../assets/icons/close.png';
import Image from 'next/image';
import Link from 'next/link';
import popup from '../../assets/images/Popup/Popup1.png';

export interface IPopup {}

const Popup: React.FunctionComponent<IPopup> = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const storedState = window.localStorage.getItem('popupOpen');
    setOpen(storedState !== null ? JSON.parse(storedState) : true);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('popupOpen', JSON.stringify(open));
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1800000);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <div className={`${open ? styles.Popup : styles.Popup_none}`}>
      <Image
        src={close}
        alt="close"
        className={styles.Popup_close}
        onClick={handleClose}
      />
      <div className={styles.Popup_box}>
        <Link href="#" className={styles.Popup_link}>
          <Image src={popup} alt="content" className={styles.Popup_content} />
        </Link>
      </div>
    </div>
  );
};

export default Popup;
