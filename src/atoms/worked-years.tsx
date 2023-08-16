import PropTypes from 'prop-types';

import styles from './worked-years.module.scss';

type WorkedYearsProps = {
  years: number;
}

const WorkedYears = (props: WorkedYearsProps) => (
  <div className="col-md-3">
    <span className={styles.WorkedYearsStyle}>{props.years}</span>
  </div>
);

WorkedYears.propTypes = {
  years: PropTypes.string.isRequired,
};

export default WorkedYears;
