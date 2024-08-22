import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../../App.jsx";
import { UserIdContext } from "../../Main.jsx";

import { logout } from "../../../../utils/authUtils.js";
import NotificationForm from "../../../common/NotificationForm.jsx";

export default function Logout() {
  const [message, setMessage] = useState("");
  const {setIsAuth} = useContext(AuthContext);
  const {setUserId} = useContext(UserIdContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
        const response = await logout("/auth/logout");
        try {
          if (response === "Failed to fetch")
            setMessage("An error occurred in server while logging out!");
          else
            setMessage(response.message);
          setUserId('');
          setShowModal(!showModal);

        } catch (err) {
          setMessage(message);
          setShowModal(!showModal);
          return (showModal && <NotificationForm
            notices={{ title: "Logout", message}}
            onClose={handleCloseModal}
          />);
        }
    };

    handleLogout();
  }, [navigate]);

  const handleCloseModal = () => {
    setShowModal(!showModal);
    navigate("/");
    if (!localStorage.getItem('auth')) setIsAuth(false);
    if (localStorage.getItem('userId')) localStorage.removeItem('userId');
  };
  return (showModal && <NotificationForm
    notices={{ title: "Logout", message}}
    onClose={handleCloseModal}
  />);
}
