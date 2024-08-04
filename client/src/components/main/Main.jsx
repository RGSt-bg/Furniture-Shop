import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import {FurnitureIdContext} from "./site-content/furniture-list/furniture-details/FurnitureDetails.jsx";

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
import Logout from "./site-content/logout/Logout.jsx";

export const UserIdContext = createContext('');

export default function Main() {

  const [userId, setUserId] = useState('');

  return(
    <div id="main">
      <div id="site_content">
        <Sidebar />
        <FurnitureIdContext.Provider value={null}>
        <UserIdContext.Provider value={{userId, setUserId}}>
          <Routes>
            <Route path="/" element={<SiteContent />} />
            <Route path="/furniture/categories" element={<Categories />} />
            <Route path="/furniture/furnitures" element={<FurnitureList />} />
            <Route path="/furniture/details/:id" element={<FurnitureDetails />} />
            <Route path="/furniture/createCategory" element={<CreateCategory />} />
            <Route path="/furniture/editCreate" element={<EditCreate />} />
            <Route path="/furniture/editCreate/:id" element={<EditCreate />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/logout" element={<Logout />} />
          </Routes>
        </UserIdContext.Provider>
        </FurnitureIdContext.Provider>
    </div>
    </div>
   );
};