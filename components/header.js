import { Link } from "react-router-dom";
import { useContext } from "react";
import loggedInUser from "./userContext";

const Header = () => {
  const data = useContext(loggedInUser);
  return (
    <div className="heading">
      <img
        className="main-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJKFwMs2GJkAD8JkaKnmcRAHet9b98QhBgbrRWoI-IYsVEN6YhImxgwu1nMEyr5B4VK0&usqp=CAU"
      />
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>{data.user}</li>
      </ul>
    </div>
  );
};

export default Header;
