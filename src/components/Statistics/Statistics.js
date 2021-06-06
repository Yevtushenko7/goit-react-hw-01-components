import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

const Statistics = ({ stats }) => (
  <section className="statistics">
    <h2 className={styles.StatsTitle}>Upload stats</h2>

    <ul className={styles.StatList}>
      {stats.map(item => (
        <li className={styles.StatItem} key={item.id}>
          <span className="label">{item.label} </span>
          <span className="percentage">{item.percentage} %</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
