import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../../App.jsx";
import { UserIdContext } from "../../Main.jsx";

import { login } from "../../../../utils/authUtils.js";
import NotificationForm from "../../../common/NotificationForm.jsx";

export default function Login() {
  
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  let [message, setMessage] = useState("");
  let [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const {setIsAuth} = useContext(AuthContext);
  let {userId, setUserId} = useContext(UserIdContext);
  
  const navigate = useNavigate();

  const formValuesHandler = (e) => {
    e.preventDefault();
    setFormValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }));
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await login("/auth/login", formValues);
      setMessage(response.message);
      setShowModal(!showModal);
      if (response.success) {
        setSuccess(true);
        setFormValues({ email: "", password: "" });
        userId = response._id;
        setUserId(userId);
      }
    } catch (err) {
        setMessage(message);
        setSuccess(false);
        setShowModal(!showModal);
      };
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
    if (success) {
      setIsAuth(true);
      navigate("/");
    }
  };

   return(
    <div id="content">
    <h1><b><i>Login Form</i></b></h1>
    <form onSubmit={formSubmitHandler}>
      <div className="form_settings">
        <p>
          <span>Email address</span>
          <input className="contact" type="email" name="email" required value={formValues.email} onChange={formValuesHandler} />
        </p>
        <p>
          <span>Password</span>
          <input className="contact" type="password" name="password" required value={formValues.password} onChange={formValuesHandler} />
        </p>
        <p className="login">
          <span>&nbsp;</span>
          <input className="submit" type="submit" name="contact_submitted" value="Login" />
        </p>
        <p align="center">
          Not registered? <Link to="/auth/register">Register</Link>
        </p>
      </div>
    </form>
    {showModal && (
      <NotificationForm
          notices={{ title: "Login", message}}
          onClose={handleCloseModal}
      />
    )}
  </div>
   );
};