import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../Profile/default-avatar.png';

import styles from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  statsfolow,
  statsviews,
  statslike,
}) => (
  <div className={styles.Profile}>
    <div className="description">
      <img src={avatar} alt={name} className="avatar" />
      <p className={styles.Name}>{name}</p>
      <p className={styles.UserInfo}>{tag}</p>
      <p className={styles.UserInfo}>{location}</p>
    </div>

    <ul className={styles.Statslist}>
      <li>
        <span>Followers: </span>
        <span className={styles.ProfileStats}>{statsfolow}</span>
      </li>
      <li>
        <span>Views: </span>
        <span className={styles.ProfileStats}>{statsviews} </span>
      </li>
      <li>
        <span>Likes: </span>
        <span className={styles.ProfileStats}>{statslike} </span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  statsfolow: PropTypes.number.isRequired,
  statsviews: PropTypes.number.isRequired,
  statslike: PropTypes.number.isRequired,
};

Profile.defaultProps = {
  avatar: defaultAvatar,
};

export default Profile;
