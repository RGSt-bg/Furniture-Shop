import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "../../../../utils/authUtils.js";

export default function Logout() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      if (!localStorage.getItem("auth")) {
        setMessage("You are not logged in!");
        alert("You are not logged in!");
        navigate("/auth/login");
      } else {
        try {
          const response = await logout("/auth/logout");
          setMessage(response.message);
          navigate("/");
          alert(response.message);
        } catch (err) {
          const errorMessage = "An error occurred while logging out!";
          setMessage(errorMessage);
          alert(errorMessage);
        }
      }
    };

    handleLogout();
  }, [navigate]);

  return null;
}
