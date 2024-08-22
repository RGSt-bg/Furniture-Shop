import { useState, useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { CalledFromContext } from "../Main.jsx";

export default function Sidebar() {
    
  const navigate = useNavigate();
  let [message, setMessage] = useState("");
  const [formValue, setFormValue] = useState({
    search_field: "",
  });
  const {setCalledFrom} = useContext(CalledFromContext);

  useEffect(() => {
    setCalledFrom("search");
  }, []);

  const formValueHandler = (e) => {
    e.preventDefault();
    setFormValue(oldValue => ({ ...oldValue, [e.target.name]: e.target.value }));
  };
    
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
        setFormValue(formValue);
        navigate(`/search?searchString=${formValue.search_field}`);
        setFormValue({ search_field: "" });
    } catch (err) {
      message = "An error occurred while searching the furnitures!";
      setMessage(message);
      alert(message);
    };
  };

  return (
    <div id="sidebar_container">
      <div className="sidebar">
        <div className="sidebar_item">
          <h3 className="searchTitle">Search Furniture</h3>
          <p><i>(by name and category)</i></p>
          <form onSubmit={formSubmitHandler}>
            <p>
              <input
                className="search"
                type="text"
                name="search_field"
                value={formValue.search_field}
                onChange={formValueHandler}
                placeholder="Enter part of keyword..."
              />
              <input
                name="search"
                type="image"
                src="../../images/search.png"
                alt="Search"
                title="Search"
              />
            </p>
          </form>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar_item">
          <h3>Latest News from Furniture's World</h3>
          <h4>Home Furniture Design Trends</h4>
          <h5>March 2024</h5>
          <p>
            2024 is all about furniture that doesn't just look good......
            <a
              target="_blank"
              href="https://www.modernfurnishings.com/blogs/news/2024-home-furniture-design-trends-elevate-your-space-with-modern-furnishings"
            >
              read more
            </a>
          </p>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar_item">
          <h3>World Featured Brands</h3>
          <ul>
            <li>
              <a target="_blank" href="https://www.ikea.com/">
                IKEA
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.la-z-boy.com/">
                La-Z-Boy Furniture Galleries
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.americansignaturefurniture.com/"
              >
                American Signature
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.kartell.com/">
                Kartell
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.roche-bobois.com/">
                Roche Bobois
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
