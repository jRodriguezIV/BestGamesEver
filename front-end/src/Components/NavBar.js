import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [logo, setLogo] = useState(false);
  const [newB, setNewB] = useState(false);

  const handleLogoEnter = () => {
    setLogo(true);
  };

  const handleLogoLeave = () => {
    setLogo(false);
  };

  const handleNewEnter = () => {
    setNewB(true);
  };
  const handleNewLeave = () => {
    setNewB(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
      style={{ backgroundColor: "#F24822" }}
    >
      <div className="container-fluid p-2">
        <Link
          className="navbar-brand"
          to="/"
          onMouseEnter={handleLogoEnter}
          onMouseLeave={handleLogoLeave}
          style={{ color: logo ? "#7D2815" : "black" }}
        >
          <strong>BestGamesEver</strong>
        </Link>
        <Link
          to="/new"
          className="nav-link active"
          onMouseEnter={handleNewEnter}
          onMouseLeave={handleNewLeave}
          style={{ color: newB ? "#7D2815" : "black", marginRight: "5%" }}
        >
          New Game Entry
        </Link>
      </div>
    </nav>
  );
}
