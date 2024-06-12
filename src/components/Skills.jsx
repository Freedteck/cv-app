const Skills = ({ skills }) => {
  return (
    <section>
      <h2>Skills</h2>
      <ul className="skills">
        {skills.map((skill, index) => (
          <li key={skill[0] + index + skill[1]}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
