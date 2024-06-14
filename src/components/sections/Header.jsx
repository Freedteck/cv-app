const Header = ({ personal }) => {
  return (
    <header>
      <div>
        <h1>{personal.name}</h1>
      </div>
      <div>
        <div className="contact">
          <img src="email.svg" alt="email" width={16} />
          <a
            href={`mailto: ${personal.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="details"
          >
            {personal.email}
          </a>
        </div>
        <div className="contact">
          <img src="/cellphone.svg" alt="cellphone" width={16} />
          <a
            href={`tel: ${personal.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="details"
          >
            {personal.phone}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
