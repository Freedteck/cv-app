const Skills = ({
  handleAddSkill,
  skill,
  setSkill,
  isOpen,
  handleToggle,
  handleEdit,
}) => {
  return (
    <fieldset>
      <legend>
        <div>
          <p>Skills</p>
          <div className="icons">
            {isOpen && (
              <img
                src="/pencil.svg"
                alt="toggle-button"
                className="edit sks"
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
        <label>
          Skills
          <input
            type="text"
            name="skill"
            id=""
            required
            placeholder="Javascript, content writing, etc."
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
        </label>
      )}
      {isOpen && (
        <div className="btn">
          <button onClick={handleAddSkill}>Add</button>
        </div>
      )}
    </fieldset>
  );
};

export default Skills;
