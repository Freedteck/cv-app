import { useState } from "react";
import { FormCard } from "./FormCard";
import Output from "./Output";
import General from "./forms/General";
import "../styles/cv.css";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";

const CV = () => {
  // const [showOutput, setShowOutput] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
  });
  const [experience, setExperience] = useState({
    company: "",
    location: "",
    title: "",
    responsibility: [],
  });

  const [education, setEducation] = useState([]);
  const [edu, setEdu] = useState({
    school: "",
    city: "",
    course: "",
    degree: "",
  });
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");

  const [experiences, setExperiences] = useState([]);

  const handleAddExp = (e) => {
    e.preventDefault();

    const newExp = experience;
    setExperiences([...experiences, newExp]);
    setExperience({ company: "", location: "", title: "", responsibility: [] });
  };

  const handleAddSch = (e) => {
    e.preventDefault();
    const newSch = edu;
    setEducation([...education, newSch]);
    setEdu({ school: "", city: "", course: "", degree: "" });
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    const newSkill = skill;
    setSkills([...skills, newSkill]);
    setSkill("");
  };

  const handleToggle = (e, index) => {
    e.preventDefault();
    openIndex === index ? setOpenIndex(null) : setOpenIndex(index);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowOutput(true);
  // };
  return (
    <div className="contents">
      <FormCard>
        <General
          personal={personal}
          setPersonal={setPersonal}
          isOpen={openIndex === 0}
          handleToggle={(e) => handleToggle(e, 0)}
        />
        <Experience
          experience={experience}
          setExperience={setExperience}
          handleAddExp={handleAddExp}
          isOpen={openIndex === 1}
          handleToggle={(e) => handleToggle(e, 1)}
        />
        <Education
          edu={edu}
          setEdu={setEdu}
          isOpen={openIndex === 2}
          handleToggle={(e) => handleToggle(e, 2)}
          handleAddSch={handleAddSch}
        />
        <Skills
          handleAddSkill={handleAddSkill}
          skill={skill}
          isOpen={openIndex === 3}
          handleToggle={(e) => handleToggle(e, 3)}
          setSkill={setSkill}
        />
      </FormCard>

      <Output
        personal={personal}
        experiences={experiences}
        education={education}
        skills={skills}
      />
    </div>
  );
};

export default CV;
