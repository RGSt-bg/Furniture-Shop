import { createContext, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showModal, hideModal } from "../../app/store.js"

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
import AuthRoutes from "../common/AuthRoutes.jsx";
import NoAuthRoutes from "../common/NoAuthRoutes.jsx";
import NotificationForm from "../common/NotificationForm.jsx";
import PageNotFound404 from "../common/PageNotFound404.jsx";

export const UserIdContext = createContext('');
export const CalledFromContext = createContext('');
export const CategoryContext = createContext('');

export default function Main() {

  const [userId, setUserId] = useState('');
  const [calledFrom, setCalledFrom] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);
  
  useEffect(() => {
    if (userId) {
      localStorage.setItem('userId', userId);
    }
  }, [userId]);

  const handleShowModal = () => {
    if (!isModalOpen) {
      dispatch(showModal());
    }
  };

  const handleCloseModal = () => {
    if (isModalOpen) {
      dispatch(hideModal());
    }
  };

  return(
    <div id="main">
      <div id="site_content">
        <CalledFromContext.Provider value={{calledFrom, setCalledFrom}}>
        <Sidebar />
        <FurnitureIdContext.Provider value={null}>
        <UserIdContext.Provider value={{userId, setUserId}}>
        <CategoryContext.Provider value={{category, setCategory}}>
          <Routes>
            <Route path="/" element={<SiteContent />} />
            <Route path="/furniture/categories" element={<Categories />} />
            <Route path="/furniture/furnitures" element={<FurnitureList />} />
            <Route path="/furniture/furnitures/:category" element={<FurnitureList />} />
            <Route path="/furniture/furnitures/:calledFrom" element={<FurnitureList />} />
            <Route path="/search/*" element={<FurnitureList />} />
            <Route path="/furniture/details/:id" element={<FurnitureDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/notification" element={<NotificationForm />} />
            <Route element={<NoAuthRoutes />}>
              <Route path="/auth/register" element={<Register />} />
              <Route path="/auth/login" element={<Login />} />
            </Route>
            <Route element={<AuthRoutes />}>
              <Route path="/furniture/createCategory" element={<CreateCategory />} />
              <Route path="/furniture/editCreate" element={<EditCreate />} />
              <Route path="/furniture/editCreate/:id" element={<EditCreate />} />
              <Route path="/auth/logout" element={<Logout />} />
            </Route>
            <Route path="*" element={<PageNotFound404 onShow={handleShowModal} onClose={handleCloseModal} />} />
          </Routes>
        </CategoryContext.Provider>
        </UserIdContext.Provider>
        </FurnitureIdContext.Provider>
        </CalledFromContext.Provider>
    </div>
    </div>
   );
};