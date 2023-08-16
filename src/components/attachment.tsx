import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './attachment.module.scss';

type AttachmentProps = {
  image: string;
  title: string;
}

const Attachment = (props: AttachmentProps) => (
  <>
    <li className={styles.AttachmentStyle}>
      <p>
        <img src={props.image} alt="" />
        {props.title}
        <a href="{props.downloadWord}"><FontAwesomeIcon icon={faCloudDownloadAlt} /></a>
        <a href="{props.downloadPdf}"><FontAwesomeIcon icon={faEye} /></a>
      </p>
    </li>
  </>
);

export default Attachment;
