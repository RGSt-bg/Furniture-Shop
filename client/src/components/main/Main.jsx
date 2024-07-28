import { Route, Routes } from "react-router-dom";

import Sidebar from "./sidebar/Sidebar.jsx";
import SiteContent from "./site-content/SiteContent.jsx";
import Categories from "./site-content/categories/Categories.jsx";
import FurnitureList from "./site-content/furniture-list/FurnitureList.jsx";
import FurnitureDetails from "./site-content/furniture-list/furniture-details/FurnitureDetails.jsx";
import CreateCategory from "./site-content/createCategory/CreateCategory.jsx";
import EditCreate from "./site-content/editCreate/EditCreate.jsx";
import About from "./site-content/about/About.jsx";
import Contacts from "./site-content/contacts/Contacts.jsx";
import Register from "./site-content/register/Register.jsx";
import Login from "./site-content/login/Login.jsx";

export default function Main() {
   return(
    <div id="main">
      <div id="site_content">
        <Sidebar />
        <Routes>
            <Route path="/" element={<SiteContent />} />
            <Route path="/furniture/categories" element={<Categories />} />
            <Route path="/furniture/furnitures" element={<FurnitureList />} />
            <Route path="/furniture/details/:id" element={<FurnitureDetails key={furniture._id} />} />
            <Route path="/furniture/createCategory" element={<CreateCategory />} />
            <Route path="/furniture/editCreate" element={<EditCreate />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<Login />} />
        </Routes>
      </div>
    </div>
   );
};