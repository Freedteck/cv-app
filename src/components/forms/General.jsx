const General = ({ personal, setPersonal, isOpen, handleToggle }) => {
  return (
    <fieldset>
      <legend>
        <div>
          <p>General</p>
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
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              value={personal.name}
              onChange={(e) =>
                setPersonal({ ...personal, name: e.target.value })
              }
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              required
              value={personal.email}
              onChange={(e) =>
                setPersonal({ ...personal, email: e.target.value })
              }
            />
          </label>

          <label>
            Phone number
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
              value={personal.phone}
              onChange={(e) =>
                setPersonal({ ...personal, phone: e.target.value })
              }
            />
          </label>

          <label>
            Bio
            <textarea
              name="bio"
              cols="30"
              rows="5"
              required
              placeholder="Short description about you..."
              value={personal.bio}
              onChange={(e) =>
                setPersonal({ ...personal, bio: e.target.value })
              }
            ></textarea>
          </label>

          <div className="btn">
            <button>Add</button>
          </div>
        </>
      )}
    </fieldset>
  );
};

export default General;
