import "../styles/header.min.css";
const Header = ({ data, handleLogout }) => {
  const name = data && data.name ? data.name : "Admin";

  return (
    <div className="header">
      <h1>
        Hello <br /> <span>{name}</span>
      </h1>
      <button onClick={handleLogout} className="button">Log Out</button>
    </div>
  );
};

export default Header;
