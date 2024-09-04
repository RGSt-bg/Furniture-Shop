import { useEffect, useState, createContext, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { UserIdContext, CalledFromContext } from "../../../Main.jsx";

import ConfirmationForm from "../../../../common/ConfirmationForm.jsx";
import NotificationForm from "../../../../common/NotificationForm.jsx";

import { getFurnitureDetails, deleteFurniture } from "../../../../../utils/furnitureApi.js";

let furnitureId = null;

export default function FurnitureDetails() {

  const [furnitureDetails, setFurnitureDetails] = useState({});
  let { calledFrom } = useContext(CalledFromContext);
  let {id: furnitureId} = useParams();
  const {userId} = useContext(UserIdContext);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFurnitureDetails(`/furniture/details/${furnitureId}`);
      setFurnitureDetails(data);
    }
    fetchData();
  }, [furnitureId]);

  const isOwner = userId === furnitureDetails?.owner?._id;
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function furnitureDeleteHandler() {
    setShowConfirmation(true);
  }

  async function furnitureDeleteModal() {
    try {
      const response = await deleteFurniture("/furniture/delete", furnitureId);
      if (response.status === "success") {
        setMessage(`Furniture ${furnitureDetails.name} deleted successfully!`);
        setShowConfirmation(false);
        setShowNotification(true);
      }
    } catch (err) {
      setMessage("An error occurred while deleting the furniture.");
      setShowNotification(true);
    };
  }
        
  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };
    
  const handleCloseNotification = () => {
    setShowNotification(false);
    if (calledFrom === "category") {
      navigate(`/furniture/furnitures/${furnitureDetails.category}`);
    } else if (calledFrom === "newProducts") {
      navigate(`/furniture/furnitures`);
    } else if (calledFrom === "search") {
      navigate(`/furniture/furnitures`);
    }
  };
      
  return (
    <div>
      { furnitureId ? (
        <div id="content">
          <section id="details">
            <div id="details-wrapper">
              <p id="details-title">Name: { furnitureDetails.name }</p>
              <div id="img-wrapper">
                <img src={ furnitureDetails.imageFurniture } alt={furnitureDetails.name} />
              </div>
              <div id="info-wrapper">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          Category: <span id="details-category">{ furnitureDetails.category }</span>
                        </p>
                      </td>
                      <td>
                        <p>
                          Color: <span id="details-color">{ furnitureDetails.color }</span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Material: <span id="details-material">{ furnitureDetails.material }</span>
                        </p>
                      </td>
                      <td>
                        <p>
                          Price: <span id="details-price">{ furnitureDetails.price }€</span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  Description: <span id="details-description">{ furnitureDetails.description }</span>
                </p>
              </div>
              {isOwner ? (
                <div id="action-buttons">
                    <Link to={`/furniture/editCreate/${furnitureId}`} className="details-btn">Edit</Link>
                    <button onClick={() => furnitureDeleteHandler()} className="details-btn">Delete</button>
                </div>
              ) : null}
            </div>
          </section>
        </div>
      ) : (
        <div className="loader"></div>
      )}

      {showConfirmation && (
        <ConfirmationForm
          notices={{ title: "Delete Furniture", message: `Are you sure you want to delete ${furnitureDetails.name} furniture?` }}
          onConfirm={furnitureDeleteModal}
          onClose={handleCloseConfirmation}
        />
      )}

      {showNotification && (
        <NotificationForm
          notices={{ title: "Delete Furniture", message }}
          onClose={handleCloseNotification}
        />
      )}

    </div>
  );
}

export const FurnitureIdContext = createContext(furnitureId);