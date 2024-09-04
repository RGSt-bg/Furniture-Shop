import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createCategory } from "../../../../utils/furnitureApi.js";

import NotificationForm from "../../../common/NotificationForm.jsx";

export default function CreateCategory() {

  const [formValues, setFormValues] = useState({
    category: "",
    imageCategory: "",
  });

  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  const navigate = useNavigate();
  
  const formValuesHandler = (e) => {
    e.preventDefault();
    setFormValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }));
  };
  
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (!formValues.category || !formValues.imageCategory) {
      setMessage("Please fill in all fields!");
      setShowModal(!showModal);
      return;
    }

    try {
      const response = await createCategory("/furniture/createCategory", formValues);
      setMessage(response.message);
      setShowModal(!showModal);
      if (response.message === "The category was created successfully!") 
        setFormValues({ category: "", imageCategory: "" });
      } catch (err) {
      setMessage("An error occurred while creating the category.");
      setShowModal(!showModal);
    };
  };
  
  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

   return(
    <div id="content">
    <h1><b><i>Create Category</i></b></h1>
    <form onSubmit={formSubmitHandler}>
      <div className="form_settings">
        <p>
          <span>Category</span>
          <input className="contact" type="text" name="category" minLength="3" value={formValues.category} onChange={formValuesHandler} />
        </p>
        <p>
          <span>Image</span>
          <input className="contact" type="text" name="imageCategory" value={formValues.imageCategory} onChange={formValuesHandler}/>
        </p>
        <p className="createCategory">
          <span>&nbsp;</span>
          <input className="submit" type="submit" name="contact_submitted" value="Create" />
        </p>
        {/* <p>* - required field</p> */}
      </div>
    </form>
    {showModal && (
      <NotificationForm
          notices={{ title: "Category", message}}
          onClose={handleCloseModal}
      />
    )}
  </div>
   );
};