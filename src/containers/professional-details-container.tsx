import StringTitle from '../components/string-title';
import ProfilePicture from '../components/profile-picture';
import PersonalData from '../components/personal-data';
import AttachmentsContainer from './attachments-container';

import styles from './ProfessionalDetailsContainer.module.scss';

const ProfessionalDetailsContainer = () => {
  const professionalDetailsTitle = 'PROFESSIONAL DETAILS';
  const attachmentsTitle = 'ATTACHMENTS';

  return (
    <div className={styles.container}>
      <StringTitle title={professionalDetailsTitle} />
      <ProfilePicture />
      <PersonalData />
      <StringTitle title={attachmentsTitle} />
      <AttachmentsContainer />
    </div>
  );
};

export default ProfessionalDetailsContainer;
