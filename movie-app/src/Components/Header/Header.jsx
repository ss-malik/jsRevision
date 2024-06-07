import React from "react";
import logo from "../../assests/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="app-logo" />
      </Link>

      <div>
        <Link to="/tvshows">Tv shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recentely">Recentely Added</Link>
        <Link to="/mylist">My List</Link>
      </div>

      <FaSearch />
    </nav>
  );
};

export default Header;
