import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../../../utils/authUtils.js";

export default function Login() {
  
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

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
      alert(response.message);
      setFormValues({ email: "", password: "" });
      navigate("/");
    } catch (err) {
      setMessage("An error occurred while logging!");
      alert(message);
    };
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
  </div>
   );
};