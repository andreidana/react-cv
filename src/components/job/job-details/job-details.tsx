import Image from '../../image';

type JobDetailsProps = {
  logo: string;
  jobTitle: string;
  company: string;
  location: string;
}

const JobDetails = (props: JobDetailsProps) => (
  <>
    <Image path={props.logo} height={50} />
    <h6>{props.jobTitle}</h6>
    <div>{props.company}</div>
    <div>{props.location}</div>
  </>
);

export default JobDetails;
