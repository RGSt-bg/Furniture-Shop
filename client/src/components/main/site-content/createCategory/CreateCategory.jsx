import { useState } from "react";

import { createCategory } from "../../../../utils/furnitureUtils.js";

export default function CreateCategory() {

  const [formValues, setFormValues] = useState({
    category: "",
    imageCategory: "",
  });

  const [message, setMessage] = useState("");
  
  const formValuesHandler = (e) => {
    e.preventDefault();
    setFormValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }));
  };
  
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await createCategory("/furniture/createCategory", formValues);
      setMessage(response.message);
      alert(response.message);
      setFormValues({ category: "", imageCategory: "" });
    } catch (err) {
      setMessage("An error occurred while creating the category.");
      alert(message);
    };
  };
  
   return(
    <div id="content">
    <h1><b><i>Create Category</i></b></h1>
    <form onSubmit={formSubmitHandler}>
      <div className="form_settings">
        <p>
          <span>Category*</span>
          <input className="contact" type="text" name="category" required minLength="3" value={formValues.category} onChange={formValuesHandler} />
        </p>
        <p>
          <span>Image*</span>
          <input className="contact" type="text" name="imageCategory" required value={formValues.imageCategory} onChange={formValuesHandler}/>
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