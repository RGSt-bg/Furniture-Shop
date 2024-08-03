import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../../App.jsx";
import { UserIdContext } from "../../Main.jsx";

import { register } from "../../../../utils/authUtils";

export default function Register() {
  
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  let [message, setMessage] = useState("");
  const {setIsAuth} = useContext(AuthContext);
  const {setUserId} = useContext(UserIdContext);

  const navigate = useNavigate();
  
  const formValuesHandler = (e) => {
    e.preventDefault();
    setFormValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }));
  };
    
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (formValues.password !== formValues.rePassword) {
      message = "Passwords do not match!";
      setMessage(message);
      alert(message);
      return;
    }

    try {
      const response = await register("/auth/register", formValues);
      if (response.success) {
        setMessage(response.message);
        alert(response.message);
        setFormValues({ username: "", email: "", password: "", rePassword: "" });
        setIsAuth(true);
        setUserId(response.userId);
        navigate("/");
      }
    } catch (err) {
      setMessage(err.message);
      alert(err.message);
    };
  };
  
   return(
    <div id="content">
    <h1><b><i>Registration Form</i></b></h1>
    <form onSubmit={formSubmitHandler}>
      <div className="form_settings">
        <p>
          <span>Username</span>
          <input className="contact" type="text" name="username" required value={formValues.username} onChange={formValuesHandler} />
        </p>
        <p>
          <span>Email Address</span>
          <input className="contact" type="email" name="email" required value={formValues.email} onChange={formValuesHandler} />
        </p>
        <p>
          <span>Password</span>
          <input className="contact" type="password" name="password" required value={formValues.password} onChange={formValuesHandler} />
        </p>
        <p>
          <span>Repeat password</span>
          <input className="contact" type="password" name="rePassword" required value={formValues.rePassword} onChange={formValuesHandler} />
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
  </div>
   );
};