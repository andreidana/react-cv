import moment from 'moment';

const hireDate = moment('2011-03-02');
const currentDate = moment();

const positions = {
  teamLeader: `I work with a team of passionate devs and come from a background of software development myself. I'll always be a facilitator of new and bold ideas for anyone in the team, encouraging them to take initiative, and come up with solutions to any problems that might arise.

  I'm an avid consumer of anything related to technology, always reading and deep-diving into new tech trends. Though sometimes lack of time is a factor, I am always taking it as a challenge to keep pushing myself forward, acquiring new skills every day. 
  
  My motto in life is: "Do it once, do it right!". `,
  fullStackDeveloper: `Experienced Full Stack Developer with ${currentDate.diff(hireDate, 'years')} years in the industry and high-level proficiency in the following programs: Javascript, Angular 2+, SQL, C#, React, Java, expertise with HTML and CSS. I am very familiar and experienced with Web Application Architecture and have worked with a good number of successful development teams.`,
};

export default positions;
