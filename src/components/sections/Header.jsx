const Header = ({ personal }) => {
  return (
    <header>
      <div>
        <h1>{personal.name}</h1>
      </div>
      <div>
        <p>{personal.email}</p>
        <p>{personal.phone}</p>
      </div>
    </header>
  );
};

export default Header;
