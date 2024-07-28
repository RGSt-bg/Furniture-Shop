import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      <div id="logo">
        <div id="logo_text">
          <h1>
          <Link to="/">Fu<span className="logo_colour">rni</span>ture <span className="logo_colour">Shop</span></Link>
          </h1>
          <h2>Simple. Comfortable. At affordable prices.</h2>
        </div>
      </div>
      <div id="menubar">
        <ul id="menu">
          <li className="selected"><Link to="/">Home</Link></li>
          <li><Link to="/furniture/categories">Furnitures</Link></li>
          <li><Link to="/furniture/furnitures">New Products</Link></li>
          <li><Link to="/furniture/createCategory">Create Category</Link></li>
          <li><Link to="/furniture/editCreate">Create Furniture</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/auth/register">Register</Link></li>
          <li><Link to="/auth/login">Login</Link></li>
          <li><Link to="/auth/login">Logout</Link></li>
        </ul>
      </div>
    </div>
  );
}
