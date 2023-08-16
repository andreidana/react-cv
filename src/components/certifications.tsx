import StringTitle from './string-title';
import Certification from './certification/certification';
import certificationsList from '../static/certifications';

const Certifications = () => {
  const title = 'CERTIFICATIONS';

  return (
    <>
      <StringTitle title={title} />
      {
        certificationsList.map(
          certification => <Certification key={certification.idx} {...certification} />
        )
      }
    </>
  );
};

export default Certifications;
