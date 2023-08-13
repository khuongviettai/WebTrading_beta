'use client';
import React, { useState } from 'react';
import styles from './Setting.module.scss';
import Profile from '@/pages/Settings/Profile/Profile';
import SocialNetwork from '@/pages/Settings/SocialNetwork/SocialNetwork';
import { useSession } from 'next-auth/react';
import WarningSignIn from '@/pages/WarningSignIn/WarningSignIn';

export interface ISetting {}

const Setting: React.FunctionComponent<ISetting> = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'social'>('profile');

  const handleTabChange = (tab: 'profile' | 'social') => {
    setActiveTab(tab);
  };

  // check sign in
  const { data: session } = useSession();
  if (!session) {
    return <WarningSignIn />;
  }

  return (
    <div className={styles.Setting}>
      <div className="container">
        <h4 className={styles.Setting_title}>Cài đặt</h4>
        <div className={styles.Setting_options}>
          <ul className={styles.Setting_options_list}>
            <li
              className={`${styles.Setting_options_list_item} ${
                activeTab === 'profile' ? styles.active : ''
              }`}
              onClick={() => handleTabChange('profile')}
            >
              <h4 className={styles.Setting_options_list_item_title}>
                Trang cá nhân
              </h4>
            </li>
            <li
              className={`${styles.Setting_options_list_item} ${
                activeTab === 'social' ? styles.active : ''
              }`}
              onClick={() => handleTabChange('social')}
            >
              <h4 className={styles.Setting_options_list_item_title}>
                Mạng xã hội
              </h4>
            </li>
          </ul>
        </div>
        {activeTab === 'profile' ? <Profile /> : <SocialNetwork />}
      </div>
    </div>
  );
};

export default Setting;
