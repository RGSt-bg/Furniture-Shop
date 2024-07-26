import { Link } from "react-router-dom";

export default function Register() {
   return(
    <div id="content">
    <h1><b><i>Registration Form</i></b></h1>
    <form action="./index.html" method="post">
      <div className="form_settings">
        <p>
          <span>Username</span>
          <input className="contact" type="text" name="username" value="" />
        </p>
        <p>
          <span>Email Address</span>
          <input className="contact" type="email" name="email" value="" />
        </p>
        <p>
          <span>Password</span>
          <input className="contact" type="password" name="password" value="" />
        </p>
        <p>
          <span>Repeat password</span>
          <input className="contact" type="password" name="rePassword" value="" />
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