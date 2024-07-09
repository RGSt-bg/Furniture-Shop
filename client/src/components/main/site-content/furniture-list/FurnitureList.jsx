import FurnitureListItem from "./furniture-list-item/FurnitureListItem.jsx";
import { BASE_URL } from "../../../../variables.jsx";
import { useEffect, useState } from "react";

export default function FurnitureList() {

    const [furnitures, setFurnitures] = useState([]);

    useEffect(() => {
        (async function getLatestFurnitures() {
            try {
                const response = await fetch(`${BASE_URL}/furniture/furnitureList`);
                const data = await response.json();
                const furnitures = Object.values(data);
                setFurnitures(furnitures);
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    return(
    <div id="content">
        <h1>
          <b><i>New Products</i></b>
        </h1>
        <p>Here you can find our latest products - elegant, comfortable, functional ...</p>

        <section id="newProducts">
          <ul className="card-wrapper">
            {furnitures.length > 0 && furnitures.map((furniture) => (<FurnitureListItem key={furniture._id} furniture={furniture} />))}
          </ul>
          {/* //Display a message if there are no furnitures */}
          <div id="no-post">
              {!furnitures.length && <h2>Sorry, there are no new Furnitures!</h2>}
          </div>
        </section>
    </div>
   );
};  