import { useEffect, useState, createContext, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { UserIdContext, CalledFromContext } from "../../../Main.jsx";

import { getFurnitureDetails, deleteFurniture } from "../../../../../utils/furnitureApi.js";

let furnitureId = null;

export default function FurnitureDetails() {

    const [furnitureDetails, setFurnitureDetails] = useState({});
    let { calledFrom } = useContext(CalledFromContext);
    let {id: furnitureId} = useParams();
    const {userId} = useContext(UserIdContext);

    useEffect(() => {
        getFurnitureDetails(`/furniture/details/${furnitureId}`, setFurnitureDetails);
    }, [furnitureId]);

    const isOwner = userId === furnitureDetails?.owner?._id;
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    async function furnitureDeleteHandler() {

      try {
        const response = await deleteFurniture("/furniture/delete", furnitureId);
        setMessage(response.message);
        alert(response.message);
console.log('Called From:', calledFrom);
        // furnitureId = '';
        if (calledFrom === "category") {
console.log('Navigating to category');
          navigate(`/furniture/furnitures/${furnitureDetails.category}`);
        } else if (calledFrom === "newProducts") {
console.log('Navigating to new products');
          navigate(`/furniture/furnitures`);
} else {
  console.log('Called From has unexpected value:', calledFrom); // Debugging
        }
      } catch (err) {
        setMessage("An error occurred while deleting the furniture.");
        alert(message);
      };

    }

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
                    {/* <Link to={`/furniture/editCreate/${furnitureId}`} className="details-btn">Edit</Link> */}
                    {/* <Link to="" onClick={() => furnitureDeleteHandler(`/furniture/delete/${furnitureId}`)} className="details-btn">Delete</Link> */}
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
    </div>
  );
}

export const FurnitureIdContext = createContext(furnitureId);