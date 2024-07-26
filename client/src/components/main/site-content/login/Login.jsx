import { Link } from "react-router-dom";

export default function Login() {
   return(
    <div id="content">
    <h1><b><i>Login Form</i></b></h1>
    <form action="./index.html" method="post">
      <div className="form_settings">
        <p>
          <span>Email address</span>
          <input className="contact" type="text" name="your_email" value="" />
        </p>
        <p>
          <span>Password</span>
          <input className="contact" type="password" name="password" value="" />
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