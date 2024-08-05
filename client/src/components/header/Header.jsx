import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../App.jsx";

export default function Header() {

  const {isAuth} = useContext(AuthContext);
  return (
    <div id="header">
      <div id="logo">
        <div id="logo_text">
          <h1>
          <NavLink to="/">Fu<span className="logo_colour">rni</span>ture <span className="logo_colour">Shop</span></NavLink>
          </h1>
          <h2>Simple. Comfortable. At affordable prices.</h2>
        </div>
      </div>
      <div id="menubar">
        <ul id="menu">
          <li><NavLink to="/" className={({ isActive }) => `${isActive ? "selected" : ''}`}>Home</NavLink></li>
          <li><NavLink to="/furniture/categories" className={({ isActive }) => `${isActive ? "selected" : ''}`}>Furnitures</NavLink></li>
          <li><NavLink to="/furniture/furnitures?calledFrom=newProducts" className={({ isActive }) => `${isActive ? "selected" : ''}`}>New Products</NavLink></li>
          {isAuth ? (
            <>
              <li><NavLink to="/furniture/createCategory" className={({ isActive }) => `${isActive ? "selected" : ''}`}>Create Category</NavLink></li>
              <li><NavLink to="/furniture/editCreate" className={({ isActive }) => `${isActive ? "selected" : ''}`}>Create Furniture</NavLink></li>
            </>
          ) : null}
          <li><NavLink to="/contacts" className={({ isActive }) => `${isActive ? "selected" : ''}`}>Contacts</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => `${isActive ? "selected" : ''}`}>About</NavLink></li>
          {!isAuth ? (
            <>
              <li><NavLink to="/auth/register" className={({ isActive }) => `${isActive ? "selected" : ''}`}>Register</NavLink></li>
              <li><NavLink to="/auth/login" className={({ isActive }) => `${isActive ? "selected" : ''}`}>Login</NavLink></li>
            </>
          ) : null}
          {isAuth ? (
            <>
              <li><NavLink to="/auth/logout" className={({ isActive }) => `${isActive ? "selected" : ''}`}>Logout</NavLink></li>
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
}
