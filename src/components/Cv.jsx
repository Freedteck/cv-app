import { useState } from "react";
import { FormCard } from "./FormCard";
import Output from "./Output";
import General from "./forms/General";
import "../styles/cv.css";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";

const CV = () => {
  const [edited, setEdited] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
  });
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
  });
  const [prevDeets, setPrevDeets] = useState({
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
    from: "",
    to: "",
  });
  const [prevExperience, setPrevExperience] = useState({
    company: "",
    location: "",
    title: "",
    responsibility: [],
    from: "",
    to: "",
  });
  const [education, setEducation] = useState([]);
  const [edu, setEdu] = useState({
    school: "",
    city: "",
    course: "",
    degree: "",
    from: "",
    to: "",
  });
  const [prevEdu, setPrevEdu] = useState({
    school: "",
    city: "",
    course: "",
    degree: "",
    from: "",
    to: "",
  });
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const [prevSkill, setPrevSkill] = useState("");

  const [experiences, setExperiences] = useState([]);

  const handleAddPersonal = (e) => {
    e.preventDefault();
    if (edited) {
      setPersonalDetails({ ...personal });
    } else {
      setPersonalDetails({ ...personal });
    }

    setEdited(false);
    setPersonal({
      name: "",
      email: "",
      phone: "",
      bio: "",
    });
    setPrevDeets({ ...personal });
  };
  const handleAddExp = (e) => {
    e.preventDefault();
    const newExp = experience;
    if (edited) {
      experiences.pop();
      setExperiences([...experiences, newExp]);
    } else {
      setExperiences([...experiences, newExp]);
    }
    setExperience({
      company: "",
      location: "",
      title: "",
      responsibility: [],
      from: "",
      to: "",
    });
    setPrevExperience({ ...experience });
    setEdited(false);
  };

  const handleAddSch = (e) => {
    e.preventDefault();
    const newSch = edu;
    if (edited) {
      education.pop();
      setEducation([...education, newSch]);
    } else {
      setEducation([...education, newSch]);
    }
    setEdu({ school: "", city: "", course: "", degree: "", from: "", to: "" });
    setPrevEdu({ ...edu });
    setEdited(false);
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    const newSkill = skill;
    if (edited) {
      skills.pop();
      setSkills([...skills, newSkill]);
    } else {
      setSkills([...skills, newSkill]);
    }
    setSkill("");
    setPrevSkill(skill);
    setEdited(false);
  };

  const handleToggle = (index) => {
    openIndex === index ? setOpenIndex(null) : setOpenIndex(index);
  };

  const handleEdit = (e) => {
    setEdited(true);
    if (e.target.classList.contains("exp")) {
      setExperience(prevExperience);
    } else if (e.target.classList.contains("edu")) {
      setEdu(prevEdu);
    } else if (e.target.classList.contains("sks")) {
      setSkill(prevSkill);
    } else if (e.target.classList.contains("gen")) {
      setPersonal(prevDeets);
    }
  };
  return (
    <div className="contents">
      <FormCard>
        <General
          personal={personal}
          setPersonal={setPersonal}
          isOpen={openIndex === 0}
          handleToggle={(e) => handleToggle(0)}
          handleEdit={handleEdit}
          handleAddPersonal={handleAddPersonal}
        />
        <Experience
          experience={experience}
          setExperience={setExperience}
          handleAddExp={handleAddExp}
          isOpen={openIndex === 1}
          handleToggle={() => handleToggle(1)}
          handleEdit={handleEdit}
        />
        <Education
          edu={edu}
          setEdu={setEdu}
          isOpen={openIndex === 2}
          handleToggle={(e) => handleToggle(2)}
          handleAddSch={handleAddSch}
          handleEdit={handleEdit}
        />
        <Skills
          handleAddSkill={handleAddSkill}
          skill={skill}
          isOpen={openIndex === 3}
          handleToggle={(e) => handleToggle(3)}
          setSkill={setSkill}
          handleEdit={handleEdit}
        />
      </FormCard>

      <Output
        personal={personalDetails}
        experiences={experiences}
        education={education}
        skills={skills}
      />
    </div>
  );
};

export default CV;
