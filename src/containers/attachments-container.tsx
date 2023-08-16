import pdf from '../../Assets/pdf-icon.jpg';
import word from '../../Assets/word-icon.jpg';
import Attachment from '../components/Attachment';

import styles from './AttachmentsContainer.module.scss';

const AttachmentsContainer = () => {
  const pdfTitle = 'Curriculum Vitae.pdf';
  const wordTitle = 'Curriculum Vitae.docx';

  return (
    <div className={styles.AttachmentsContainerStyle}>
      <ul>
        <Attachment image={pdf} title={pdfTitle} />
        <Attachment image={word} title={wordTitle} />
      </ul>
    </div>
  );
};

export default AttachmentsContainer;
