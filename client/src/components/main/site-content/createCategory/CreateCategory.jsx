export default function CreateCategory() {
   return(
    <div id="content">
    <h1><b><i>Create Category</i></b></h1>
    <form action="" method="post">
      <div className="form_settings">
        <p>
          <span>Category*</span>
          <input className="contact" type="text" name="category" required minLength="3"defaultValue="" />
        </p>
        <p>
          <span>Image*</span>
          <input className="contact" type="text" name="imageCategory" required placeholder="Valid image url ..." defaultValue="" />
        </p>
        <p className="createCategory">
          <span>&nbsp;</span>
          <input className="submit" type="submit" name="contact_submitted" value="Create" />
        </p>
        <p>* - required field</p>
      </div>
    </form>
  </div>
   );
};