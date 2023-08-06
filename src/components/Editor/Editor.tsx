'use client';
import React, { Component } from 'react';
import styles from './Editor.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import arrow_left from '../../assets/icons/arrow_left_alt.png';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './ck_content_config.css';

class Editor extends Component {
  render() {
    return (
      <div className={styles.Editor}>
        <div className="container">
          <div className={styles.Editor_box}>
            <div className={styles.Editor_header}>
              <div className={styles.Editor_box_back}>
                <Link href="" className={styles.Editor_box_back_link}>
                  <Image
                    src={arrow_left}
                    alt="back"
                    className={styles.Editor_box_back_link_img}
                  />
                  Quay lại
                </Link>
              </div>
              <div className={styles.Editor_box_done}>
                <button className={styles.Editor_box_done_btn}>Đăng bài</button>
              </div>
            </div>

            <div className={styles.Editor_body}>
              <div className={styles.Editor_box_title}>
                <input className={styles.Editor_title} placeholder="Tiêu đề" />
              </div>
              <div className={styles.Editor_box_content}>
                <CKEditor editor={ClassicEditor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
