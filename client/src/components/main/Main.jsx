import Sidebar from "./sidebar/Sidebar.jsx";
import SiteContent from "./site-content/SiteContent.jsx";
import FurnitureList from "./site-content/furniture-list/FurnitureList.jsx";
import Categories from "./site-content/categories/Categories.jsx";

export default function Main() {
   return(
    <div id="main">
      <div id="site_content">
        <Sidebar />
        <SiteContent />
        <FurnitureList />
        <Categories />
      </div>
    </div>
   );
};