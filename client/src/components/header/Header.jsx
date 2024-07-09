export default function Header() {
  return (
    <div id="header">
      <div id="logo">
        <div id="logo_text">
          <h1>
            <a href="index.html">
              Furniture <span className="logo_colour">Shop</span>
            </a>
          </h1>
          <h2>Simple. Comfortable. At affordable prices.</h2>
        </div>
      </div>
      <div id="menubar">
        <ul id="menu">
          {/* <!-- put class/className="selected" in the "li" tag for the selected page - to highlight which page you're on --> */}
          <li className="selected">
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="furnitures.html">Furnitures</a>
          </li>
          <li>
            <a href="furnitureList.html">New Products</a>
          </li>
          <li>
            <a href="editCreate.html">Create Furniture</a>
          </li>
          <li>
            <a href="createCategory.html">Create Category</a>
          </li>
          <li>
            <a href="contact.html">Contacts</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="register.html">Register</a>
          </li>
          <li>
            <a href="login.html">Login</a>
          </li>
          <li>
            <a href="login.html">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
