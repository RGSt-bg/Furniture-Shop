import { Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar.jsx";
import SiteContent from "./site-content/SiteContent.jsx";
import FurnitureList from "./site-content/furniture-list/FurnitureList.jsx";
import Categories from "./site-content/categories/Categories.jsx";
import About from "./site-content/about/About.jsx";
import Contacts from "./site-content/contacts/Contacts.jsx";

export default function Main() {
   return(
    <div id="main">
      <div id="site_content">
        <Sidebar />
        <Routes>
            <Route path="/" element={<SiteContent />} />
            <Route path="/furniture/categories" element={<Categories />} />
            <Route path="/furniture/furnitures" element={<FurnitureList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>
   );
};