import pdf from '../../../Assets/pdf-icon.jpg';
import Attachment from '../Attachment';
import Image from '../Image';

import styles from './certification.module.scss';

type CertificationProps = {
  logo: string;
  name: string;
  emitent: string;
  dateAchieved: string;
  description: string;
}

const Certification = (props: CertificationProps) => (
  <div className="mt-2 mb-2">
    <div className="row">
      <div className="col-md-2">
        <Image path={props.logo} height={50} />
      </div>
      <div className="col-md-8">
        <div className="row">{props.name}</div>
        <div className="row">{props.emitent}</div>
      </div>
      <div className="col-md-2 mt-3">{props.dateAchieved}</div>
    </div>
    <br />
    <div className="container"><p>{props.description}</p></div>
    <div className="container mb-2"><ul className={styles.ListStyle}><Attachment image={pdf} title={props.name} /></ul></div>
    <hr />
  </div>
);

export default Certification;
