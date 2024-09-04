import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../../App.jsx";
import { UserIdContext } from "../../Main.jsx";

import { register } from "../../../../utils/authUtils";
import NotificationForm from "../../../common/NotificationForm.jsx";

export default function Register() {
  
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  let [message, setMessage] = useState("");
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

    if (!formValues.username || !formValues.email || 
        !formValues.password || !formValues.rePassword) {
      setMessage("Please fill in all fields!");
      setShowModal(!showModal);
      return;
    }

    if (formValues.password !== formValues.rePassword) {
      // message = "Passwords do not match!";
      setMessage("Passwords do not match!");
      setShowModal(!showModal);
      // navigate("/auth/register");
      setIsAuth(false);
      return;
    }

    try {
      const response = await register("/auth/register", formValues);
      if (response.success) {
        setFormValues({ username: "", email: "", password: "", rePassword: "" });
        userId = response._id;
        setUserId(userId);
      }
      setMessage(response.message);
      setShowModal(!showModal);
    } catch (error) {
      setMessage(error.message);
      setShowModal(!showModal);
    };
  };
  
  const handleCloseModal = () => {
    setShowModal(!showModal);
    if (localStorage.getItem('auth')) {
      navigate("/");
      setIsAuth(true);
    }
  };

   return(
    <div id="content">
    <h1><b><i>Registration Form</i></b></h1>
    <form onSubmit={formSubmitHandler}>
      <div className="form_settings">
        <p>
          <span>Username</span>
          <input className="contact" type="text" name="username" value={formValues.username} onChange={formValuesHandler} />
        </p>
        <p>
          <span>Email Address</span>
          <input className="contact" type="email" name="email" value={formValues.email} onChange={formValuesHandler} />
        </p>
        <p>
          <span>Password</span>
          <input className="contact" type="password" name="password" value={formValues.password} onChange={formValuesHandler} />
        </p>
        <p>
          <span>Repeat password</span>
          <input className="contact" type="password" name="rePassword" value={formValues.rePassword} onChange={formValuesHandler} />
        </p>
        <p className="register">
          <span>&nbsp;</span>
          <input className="submit" type="submit" name="contact_submitted" value="Register" />
        </p>
        <p align="center">
          Already registered? <Link to="/auth/login">Login</Link>
        </p>
      </div>
    </form>
    {showModal && (
      <NotificationForm
          notices={{ title: "Registration", message}}
          onClose={handleCloseModal}
      />
    )}
  </div>
   );
};