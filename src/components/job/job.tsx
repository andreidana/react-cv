import Paragraph from '../../atoms/paragraph';
import WorkedYears from '../../atoms/worked-years';
import JobDetails from './job-details/job-details';

import styles from './Job.module.scss';

type JobsProps = {
  experienceList: Experience[];
}

type Experience = {
  idx: number;
  workingYears: string;
  logo: string;
  jobTitle: string;
  company: string;
  location: string;
  description: string;
}

const Jobs = (props: JobsProps) => (
  <>
    {
      props.experienceList.map((exp: Experience) => (
        <>
          <div className={`row m-4 ${styles.JobStyle}`}>
            <WorkedYears years={+exp.workingYears} />
            <div className="col-md-9">
              <JobDetails {...exp} />
              <Paragraph innerText={exp.description} />
            </div>
          </div>
        </>
      ))
    }

  </>
);

export default Jobs;
