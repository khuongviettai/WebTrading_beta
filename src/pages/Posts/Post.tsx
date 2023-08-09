import React from 'react';
import styles from './Post.module.scss';
import PostItem from '@/components/PostItem/PostItem';

export interface IPost {}

const Post: React.FunctionComponent<IPost> = () => {
  return (
    <div className={styles.Post}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8">
            <div className={styles.Post_left}>
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">sdf</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
