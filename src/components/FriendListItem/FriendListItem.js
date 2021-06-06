import React from 'react';
import styles from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={styles.FriendListItem} key={id}>
    <span className={isOnline ? styles.Online : styles.Offline}></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>
);

export default FriendListItem;
