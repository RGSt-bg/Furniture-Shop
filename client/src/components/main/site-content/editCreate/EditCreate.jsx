import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { UserIdContext, CalledFromContext } from "../../Main.jsx";

import { useForm } from "../../../../hooks/useForm.js";

import NotificationForm from "../../../common/NotificationForm.jsx";

import { getFurnitures, getFurnitureDetails, createFurnitures, editFurnitures } from "../../../../utils/furnitureApi.js";

export default function EditCreate() {

  const navigate = useNavigate();
  const {userId} = useContext(UserIdContext);
  const {setCalledFrom} = useContext(CalledFromContext);
  const {id: furnitureId} = useParams();
  const [isCreate] = useState(!furnitureId);
  const [validData, setValidData] = useState(true);
  const [furnitureCategory, setFurnitureCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [furnitureDetails, setFurnitureDetails] = useState({});
  let [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
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

    if (!values.name || !values.category || !values.imageFurniture || 
        !values.price || !values.description) {
      setMessage("Please fill in all required fields!");
      setValidData(false);
      setShowModal(true);
      return;
    }

    try {
      values.owner = userId;
      let result = "";
      if (isCreate) {
        result = await createFurnitures(`/furniture/createFurniture`, values);
      } else {
        result = await editFurnitures(`/furniture/edit/${furnitureId}`, values);
      }
      setMessage(result.message);
      setShowModal(true);

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
        } = useForm(initialValues, submitHandler, setFurnitureDetails);

  useEffect(() => {
    setCalledFrom("category");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFurnitures('/furniture/categories');
      setCategories(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (furnitureId) {
        const data = await getFurnitureDetails(`/furniture/details/${furnitureId}`);
        setFurnitureDetails(data);
      }
    }

    fetchData();
  }, [furnitureId]);

  useEffect(() => {
    const updateFormValues = async () => {
      if (furnitureDetails) {
        const furnitureData = await setFormValues({
          name: furnitureDetails.name || '',
          category: furnitureDetails.category || '',
          imageFurniture: furnitureDetails.imageFurniture || '',
          color: furnitureDetails.color || '',
          material: furnitureDetails.material || '',
          price: furnitureDetails.price || '',
          description: furnitureDetails.description || '',
          owner: furnitureDetails.owner || '',
        });
        if (furnitureDetails.category) {
          setFurnitureCategory(furnitureDetails.category);
        }
        setFurnitureDetails(furnitureData);
      }
    };

    updateFormValues();
  }, [furnitureDetails]);

  const handleCloseModal = () => {
    if (!validData) {
      setValidData(true);
      setShowModal(!showModal);
      return;
    }
    navigate(isCreate ? `/furniture/furnitures/${furnitureCategory}` : `/furniture/details/${furnitureId}`);
  };

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
          <input className="contact" type="text" name="name" value={values.name} onChange={changeHandler} />
        </p>
        <p>
          <span>Category*</span>
          <select className="contact" name="category" value={values.category} onChange={changeHandler}>
            <option value="">Select a category</option>
            {categories.length > 0 && categories.map((category) => (
              <option key={category._id} value={category.category}>{category.category}</option>
            ))}
          </select>
        </p>
        <p>
          <span>Image*</span>
          <input className="contact" type="text" name="imageFurniture" value={values.imageFurniture} onChange={changeHandler} />
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
          <input className="contact" type="number" name="price" min={1.00} value={values.price} onChange={changeHandler} />
        </p>
        <p>
          <span>Description*</span>
          <textarea
            className="contact textarea"
            rows={8}
            cols={50}
            name="description"
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
    {showModal && (
      <NotificationForm
          notices={{ title: "Furniture", message}}
          onClose={handleCloseModal}
      />
    )}
  </div>
   );
};