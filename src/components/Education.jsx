import { format } from "date-fns";

const Education = ({ education }) => {
  return (
    <section>
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={`${edu[0]}${index}${edu[1]}`}>
            <div>
              <h3>{edu.degree} in</h3>
              <h3>{edu.course}</h3>
            </div>
            <div>
              <p className="details">
                <span>{edu.school}</span> | {edu.city}
              </p>
              <p className="details">
                {format(edu.from, "MMMM yyyy")} - {format(edu.to, "MMMM yyyy")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
