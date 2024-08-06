import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { UserIdContext } from "../../Main.jsx";

import { useForm } from "../../../../hooks/useForm.js";

import { getFurnitures, getFurnitureDetails, createFurnitures, editFurnitures } from "../../../../utils/furnitureApi.js";

export default function EditCreate() {

  const navigate = useNavigate();
  const {userId, setUserId} = useContext(UserIdContext);
  const {id: furnitureId} = useParams();
  const isCreate = !furnitureId;
  const [categories, setCategories] = useState([]);
  const [furnitureDetails, setFurnitureDetails] = useState({});
  const initialValues = {
    name: '',
    category: '',
    imageFurniture: '',
    color: '',
    material: '',
    price: '',
    description: '',
    owner: userId,
  }

  const submitHandler = async (values) => {
    try {
      values.owner = userId;
      if (isCreate) {
        await createFurnitures(`/furniture/createFurniture`, values);
        navigate(`/furniture/furnitures`);
      } else {
        await editFurnitures(`/furniture/edit/${furnitureId}`, values);
        navigate(`/furniture/details/${furnitureId}`);
      }
      resetForm();
    } catch (err) {
      console.log(err.message);
    }
  }

  const { values, 
          changeHandler, 
          formSubmitHandler, 
          resetForm, 
          setFormValues, 
        } = useForm(initialValues, submitHandler);

  useEffect(() => {
      getFurnitures('/furniture/categories', setCategories);
  }, []);

  useEffect(() => {
    furnitureId && getFurnitureDetails(`/furniture/details/${furnitureId}`, setFurnitureDetails);
  }, [furnitureId]);

  useEffect(() => {
    if (furnitureDetails && furnitureDetails._id) {
      setFormValues({
        name: furnitureDetails.name || '',
        category: furnitureDetails.category || '',
        imageFurniture: furnitureDetails.imageFurniture || '',
        color: furnitureDetails.color || '',
        material: furnitureDetails.material || '',
        price: furnitureDetails.price || '',
        description: furnitureDetails.description || '',
        owner: furnitureDetails.owner || '',
      });
    }
  }, [furnitureDetails]);

   return(
    <div id="content">
    { isCreate ? (
      <h1><b><i>Create Furniture</i></b></h1>
    ) : (
      <h1><b><i>Edit Furniture</i></b></h1>
    )}
    <form onSubmit={formSubmitHandler}>
      <div className="form_settings">
        <p>
          <span>Name*</span>
          <input className="contact" type="text" name="name" required value={values.name} onChange={changeHandler} />
        </p>
        <p>
          <span>Category*</span>
          <select className="contact" required name="category" value={values.category} onChange={changeHandler}>
            <option value="">Select a category</option>
            {categories.length > 0 && categories.map((category) => (
              <option key={category._id} value={category.category}>{category.category}</option>
            ))}
          </select>
        </p>
        <p>
          <span>Image*</span>
          <input className="contact" type="text" name="imageFurniture" required value={values.imageFurniture} onChange={changeHandler} />
        </p>
        <p>
          <span>Color</span>
          <input className="contact" type="text" name="color" value={values.color} onChange={changeHandler} />
        </p>
        <p>
          <span>Material</span>
          <input className="contact" type="text" name="material" value={values.material} onChange={changeHandler} />
        </p>
        <p>
          <span>Price*</span>
          <input className="contact" type="number" name="price" required min={1.00} value={values.price} onChange={changeHandler} />
        </p>
        <p>
          <span>Description*</span>
          <textarea
            className="contact textarea"
            rows={8}
            cols={50}
            name="description"
            required
            minLength={20}
            value={values.description}
            onChange={changeHandler}
            placeholder="The description must be at least 20 characters"
          >   
          </textarea>
        </p>
        <p className="editCreate">
          <span>&nbsp;</span>
          { isCreate ? (
            <input className="submit" type="submit" name="contact_submitted" value="Create" />
          ) : (
            <input className="submit" type="submit" name="contact_submitted" value="Edit" />
          )}
        </p>
        <p>* - required field</p>
      </div>
    </form>
  </div>
   );
};