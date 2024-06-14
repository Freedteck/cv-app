const Experience = ({
  experience,
  setExperience,
  isOpen,
  handleAddExp,
  handleToggle,
  handleEdit,
}) => {
  return (
    <fieldset>
      <legend>
        <div>
          <p>Experence</p>
          <div className="icons">
            {isOpen && (
              <img
                src="/pencil.svg"
                alt="toggle-button"
                className="edit exp"
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
            <textarea
              name="job-description"
              rows={2}
              cols={30}
              required
              placeholder="Your main responsibilities of the job"
              value={experience.responsibility}
              onChange={(e) =>
                setExperience({
                  ...experience,
                  responsibility: e.target.value,
                })
              }
            ></textarea>
          </label>
          <div className="dates">
            <label>
              From
              <input
                type="date"
                name="from"
                required
                value={experience.from}
                onChange={(e) =>
                  setExperience({ ...experience, from: e.target.value })
                }
              />
            </label>
            <label>
              To
              <input
                type="date"
                name="to"
                required
                value={experience.to}
                onChange={(e) =>
                  setExperience({ ...experience, to: e.target.value })
                }
              />
            </label>
          </div>
          <div className="btn">
            <button onClick={handleAddExp}>Add</button>
          </div>
        </>
      )}
    </fieldset>
  );
};

export default Experience;
