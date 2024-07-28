export default function EditCreate() {
   return(
    <div id="content">
    <h1><b><i>Create/Edit Furniture</i></b></h1>
    <form action="" method="post">
      <div className="form_settings">
        <p>
          <span>Name*</span><input className="contact" type="text" name="name" required defaultValue="" />
        </p>
        <p>
          {/* <span>Category*</span><input className="contact" type="" name="category" defaultValue="" /> */}
          <span>Category*</span>
          <select className="contact" required name="category">
            <option defaultValue="{{category}}">..........</option>
            <option defaultValue="Bed">Bed</option>
            <option defaultValue="Chair">Chair</option>
            <option defaultValue="Sofa">Sofa</option>
            <option defaultValue="Table">Table</option>
            <option defaultValue="Wardrobe">Wardrobe</option>
          </select>
        </p>
        <p>
          <span>Image*</span><input className="contact" type="text" name="imageUrl" required defaultValue="" />
        </p>
        <p>
          <span>Color</span><input className="contact" type="text" name="color" defaultValue="" />
        </p>
        <p>
          <span>Material</span><input className="contact" type="text" name="material" defaultValue="" />
        </p>
        <p>
          <span>Price*</span><input className="contact" type="number" name="price" required min={0.01} defaultValue="" />
        </p>
        <p>
          <span>Description*</span>
          <textarea
            className="contact textarea"
            rows="8"
            cols="50"
            name="description"
            required
            minLength={20}
            placeholder="The description must be at least 20 characters"
          >   
          </textarea>
        </p>
        <p className="editCreate">
          <span>&nbsp;</span><input className="submit" type="submit" name="contact_submitted" value="Edit" />
        </p>
        <p>* - required field</p>
      </div>
    </form>
  </div>
   );
};