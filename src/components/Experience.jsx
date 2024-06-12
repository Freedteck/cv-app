const Experience = ({ experiences }) => {
  return (
    <section>
      <h2>Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={`${exp.title[0]}${index}${exp.title[1]}`}>
            <div className="title">
              <h3>{exp.title}</h3>
              <p>{exp.date}</p>
            </div>
            <div>
              <p>
                <span>{exp.company}</span>
              </p>
              <ul className="responsibility">
                {exp.responsibility.map((resp) => (
                  <li key={resp}>{resp}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
