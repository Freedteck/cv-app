import Education from "../Education";
import Experience from "../Experience";
import Skills from "../Skills";

const Main = ({ experiences, education, skills }) => {
  return (
    <main>
      {experiences.length > 0 && <Experience experiences={experiences} />}
      {education.length > 0 && <Education education={education} />}
      {skills.length > 0 && <Skills skills={skills} />}
    </main>
  );
};

export default Main;
