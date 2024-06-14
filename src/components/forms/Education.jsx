const Education = ({
  edu,
  setEdu,
  isOpen,
  handleToggle,
  handleAddSch,
  handleEdit,
}) => {
  return (
    <fieldset>
      <legend>
        <div>
          <p>Education</p>
          <div className="icons">
            {isOpen && (
              <img
                src="/pencil.svg"
                alt="toggle-button"
                className="edit edu"
                onClick={handleEdit}
              />
            )}
            <img
              src={isOpen ? "/chevron-up.svg" : "/chevron-down.svg"}
              alt="toggle-button"
              className="toggle"
              onClick={handleToggle}
            />
          </div>
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
              onChange={(e) => setEdu({ ...edu, course: e.target.value })}
            />
          </label>
          <div className="dates">
            <label>
              From
              <input
                type="date"
                name="from"
                required
                value={edu.from}
                onChange={(e) => setEdu({ ...edu, from: e.target.value })}
              />
            </label>
            <label>
              To
              <input
                type="date"
                name="to"
                required
                value={edu.to}
                onChange={(e) => setEdu({ ...edu, to: e.target.value })}
              />
            </label>
          </div>
          <div className="btn">
            <button onClick={handleAddSch}>Add</button>
          </div>
        </>
      )}
    </fieldset>
  );
};

export default Education;
