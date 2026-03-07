import "../styles/header.min.css";
const Header = ({ data }) => {
  // guard against missing data to avoid blank name
  const name = data && data.name ? data.name : "";

  return (
    <div className="header">
      <h1>
        Hello <br /> <span>{name}</span>
      </h1>
      <button className="button">Log Out</button>
    </div>
  );
};

export default Header;
