import StringTitle from '../components/StringTitle/StringTitle';
import ProfilePicture from '../components/ProfilePicture/ProfilePicture';
import PersonalData from '../components/PersonalData/PersonalData';
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
