import { useEffect, useState } from "react";

import { getFurnitureDetails } from "../../../../../utils/furnitureUtils.jsx";

export default function FurnitureDetails() {

    const [furnitureDetails, setFurnitureDetails] = useState([]);

    useEffect(() => {
        getFurnitureDetails(`/furniture/details/${furniture._id}`, setFurnitureDetails);
    }, []);

  return (
    <div id="content">
      <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Name: { furnitureDetails.name }</p>
          <div id="img-wrapper">
            <img src={ furnitureDetails.imageFurniture } />
          </div>
          <div id="info-wrapper">
            <table>
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
                    Dimensions (L/H/D): <span id="details-dimensions">{ furnitureDetails.dimensions }</span>
                  </p>
                </td>
                <td>
                  <p>
                    Price: <span id="details-price">{ furnitureDetails.price }€</span>
                  </p>
                </td>
              </tr>
            </table>
            <p>
              Description: <span id="details-description">{ furnitureDetails.description }</span>
            </p>
          </div>
          {/* Edit and Delete are only for creator
              <div id="action-buttons">
                   {#if user}
                  {#if owner}
                  <a href="/edit/{creator._id}" class="details-btn">Edit</a> 
                  <a href="editCreate.html" class="details-btn">Edit</a>
                  <a href="/delete/{creator._id}" class="details-btn">Delete</a>
                   {else}
                  {#if amISignedUp}
                  <p id="already-liked">You already liked this stone!</p>
                  {else} 
                  <a href="/like/{creator._id}" class="details-btn">Buy</a>
                   {/if}
                  {/if}
                  {/if} 
              </div> */}
        </div>
      </section>
    </div>
  );
}
