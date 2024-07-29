export default function Sidebar() {
  return (
    <div id="sidebar_container">
      <div className="sidebar">
        <div className="sidebar_item">
          <h3 className="searchTitle">Search Furniture</h3>
          <p><i>(by name and category)</i></p>
          <form method="post" action="#" id="search_form">
            <p>
              <input
                className="search"
                type="text"
                name="search_field"
                placeholder="Enter keywords....."
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
              <a target="_blank" href="https://rh.com">
                Restoration Hardware
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.williams-sonoma.com/">
                Williams Sonoma
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.la-z-boy.com/v">
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
