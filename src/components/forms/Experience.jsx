const Experience = ({
  experience,
  setExperience,
  isOpen,
  handleAddExp,
  handleToggle,
}) => {
  return (
    <fieldset>
      <legend>
        <div>
          <p>Experence</p>
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
            Company
            <input
              type="text"
              name="company"
              required
              placeholder="Company name"
              value={experience.company}
              onChange={(e) =>
                setExperience({ ...experience, company: e.target.value })
              }
            />
          </label>

          <label>
            Location
            <input
              type="text"
              name="location"
              required
              placeholder="Company location"
              value={experience.location}
              onChange={(e) =>
                setExperience({ ...experience, location: e.target.value })
              }
            />
          </label>

          <label>
            Job title
            <input
              type="text"
              name="job-title"
              required
              placeholder="Job title"
              value={experience.title}
              onChange={(e) =>
                setExperience({ ...experience, title: e.target.value })
              }
            />
          </label>

          <label>
            Responsibility
            <input
              type="text"
              name="job-description"
              required
              placeholder="Your main responsibilities of the job"
              value={experience.responsibility}
              onChange={(e) =>
                setExperience({
                  ...experience,
                  responsibility: e.target.value.split(","),
                })
              }
            />
          </label>

          <div className="btn">
            <button onClick={handleAddExp}>Add</button>
          </div>
        </>
      )}
    </fieldset>
  );
};

export default Experience;
