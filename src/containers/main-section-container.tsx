import ProfessionalDetailsContainer from './professional-details-container';
import DetailsContainer from './details-container';
import Title from '../components/title';

const MainSectionContainer = () => {
  const headingText = 'RESUME';

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Title text={headingText} />
        </div>
        <div className="col-md-4">
          <ProfessionalDetailsContainer />
        </div>
        <div className="col-md-8">
          <DetailsContainer />
        </div>
      </div>
    </div>
  );
};

export default MainSectionContainer;
