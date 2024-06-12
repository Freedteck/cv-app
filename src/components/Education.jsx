const Education = ({ education }) => {
  return (
    <section>
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={`${edu[0]}${index}${edu[1]}`}>
            <div>
              <h3>{edu.degree} + in</h3>
              <h3>{edu.course}</h3>
            </div>
            <div>
              <span>{edu.school}</span>
              <p>{edu.city}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
