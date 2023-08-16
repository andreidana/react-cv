import pdf from '../assets/pdf-icon.jpg';
import word from '../assets/word-icon.jpg';
import Attachment from '../components/attachment';

import styles from './attachments-container.module.scss';

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
