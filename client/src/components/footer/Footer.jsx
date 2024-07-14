import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer">
      <p>
        <Link to="/">Home</Link> | <Link to="/furniture/categories">Furnitures</Link> | <Link to="/furniture/furnitures">New Products</Link> | <Link to="/about">About Us</Link> | <Link to="/contact">Contact Us</Link>
      </p>
      <p>
        Copyright &copy; simplestyle_3 | <Link to="http://validator.w3.org/check?uri=referer">HTML5</Link> | <Link to="http://jigsaw.w3.org/css-validator/check/referer">CSS</Link> | <Link to="http://www.html5webtemplates.co.uk">HTML5 Web Templates</Link>
      </p>
    </div>
  );
}