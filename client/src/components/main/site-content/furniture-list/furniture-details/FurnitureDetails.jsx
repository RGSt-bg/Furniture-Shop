import { useEffect, useState, createContext, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { getFurnitureDetails } from "../../../../../utils/furnitureApi.js";
import { UserIdContext } from "../../../Main.jsx";

let furnitureId = null;

export default function FurnitureDetails() {

    const [furnitureDetails, setFurnitureDetails] = useState({});
    const {id: furnitureId} = useParams();
    const {userId} = useContext(UserIdContext);

    useEffect(() => {
        getFurnitureDetails(`/furniture/details/${furnitureId}`, setFurnitureDetails);
    }, [furnitureId]);

    const isOwner = userId === furnitureDetails?.owner?._id;

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
                    <Link to={`/furniture/delete/${furnitureId}`} className="details-btn">Delete</Link>
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