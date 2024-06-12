const Education = ({ edu, setEdu, isOpen, handleToggle, handleAddSch }) => {
  return (
    <fieldset>
      <legend>
        <div>
          <p>Education</p>
          <img
            src={isOpen ? "/chevron-up.svg" : "/chevron-down.svg"}
            alt="toggle-button"
            className="toggle"
            onClick={handleToggle}
          />
        </div>
      </legend>
      {isOpen && (
        <>
          <label>
            School
            <input
              type="text"
              name="school"
              required
              placeholder="School name"
              value={edu.school}
              onChange={(e) => setEdu({ ...edu, school: e.target.value })}
            />
          </label>
          <label>
            Location
            <input
              type="text"
              name="location"
              required
              placeholder="School location"
              value={edu.city}
              onChange={(e) => setEdu({ ...edu, city: e.target.value })}
            />
          </label>

          <label>
            Degree
            <input
              type="text"
              name="degree"
              required
              placeholder="B.Eng, B.Sc, etc."
              value={edu.degree}
              onChange={(e) => setEdu({ ...edu, degree: e.target.value })}
            />
          </label>

          <label>
            Title of study
            <input
              type="text"
              name="job-description"
              required
              placeholder="Computer Engineering"
              value={edu.course}
              onChange={(e) => setEdu({ ...edu, degree: e.target.value })}
            />
          </label>

          <div className="btn">
            <button onClick={handleAddSch}>Add</button>
          </div>
        </>
      )}
    </fieldset>
  );
};

export default Education;
