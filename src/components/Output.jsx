import Header from "./sections/Header";
import Main from "./sections/Main";
import "../styles/output.css";
import Summary from "./sections/Summary";

const Output = ({ personal, experiences, education, skills }) => {
  return (
    <div className="output">
      {personal.name && <Header personal={personal} />}
      {personal.bio && <Summary bio={personal.bio} />}
      <Main experiences={experiences} education={education} skills={skills} />
    </div>
  );
};

export default Output;
