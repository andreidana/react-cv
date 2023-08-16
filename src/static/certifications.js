import psm from '../Assets/Certifications/psmi.png';
import az900 from '../Assets/Certifications/az-900.png';

const certificationsList = [
  {
    idx: 1,
    logo: psm,
    name: 'Oracle Certified Java Associate',
    dateAchieved: '2013-11-01',
    emitent: 'Oracle',
    description: 'Certification atests that the candidate can use the basic structures of the Java language',
  }, {
    idx: 2,
    logo: psm,
    name: 'Oracle Certified Java Programmer',
    dateAchieved: '2013-11-01',
    emitent: 'Oracle',
    description: 'Certification atests that the candidate can use the advanced structures of the Java language',
  }, {
    idx: 3,
    logo: psm,
    name: 'Scrum Master I',
    dateAchieved: '2018-09-10',
    emitent: 'Scrum.org',
    description: 'The first level of certification for Scrum Masters',
  }, {
    idx: 4,
    logo: az900,
    name: 'AZ-900: Azure Foundation',
    dateAchieved: '2022-05-16',
    emitent: 'Microsoft',
    description: 'Foundation certification for Microsoft Azure',
  },
];

export default certificationsList;
