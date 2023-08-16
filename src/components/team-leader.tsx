import positions from '../static/positions';

import styles from './team-leader.module.scss';

const Teamleader = () => (
  <>
    <div className={styles.TeamLeaderStyle}>
      <p>{positions.teamLeader}</p>
    </div>
  </>
);

export default Teamleader;
