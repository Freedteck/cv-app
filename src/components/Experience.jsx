import { format } from "date-fns";

const Experience = ({ experiences }) => {
  return (
    <section>
      <h2>Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={`${exp.title[0]}${index}${exp.title[1]}`}>
            <div className="title">
              <h3>{exp.title}</h3>
              <p className="details">
                {format(exp.from, "MMMM yyyy")} - {format(exp.to, "MMMM yyyy")}
              </p>
            </div>
            <div>
              <p className="details">
                <span>{exp.company}</span> | {exp.location}
              </p>
              <ul className="responsibility">
                {exp.responsibility.split("\n").map((resp) => (
                  <li className="details" key={resp}>
                    {resp}
                  </li>
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
