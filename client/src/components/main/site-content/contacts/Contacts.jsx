export default function Contacts() {
  return (
    <div id="content">
      <h1>
        <b>
          <i>Contact Us</i>
        </b>
      </h1>
      <form action="" method="post">
        <div className="form_settings">
          <p>
            <span>Name*</span>
            <input className="contact" type="text" name="username" defaultValue="" />
          </p>
          <p>
            <span>Email address*</span>
            <input className="contact" type="email" name="email" defaultValue="" />
          </p>
          <p>
            <span>Message*</span>
            <textarea
              className="contact textarea"
              rows="8"
              cols="50"
              name="message"
            ></textarea>
          </p>
          <p>
            <span>&nbsp;</span>
            <input
              className="submit"
              type="submit"
              name="submit"
              defaultValue="Submit"
            />
          </p>
          <p>* - required field</p>
        </div>
      </form>
    </div>
  );
}
