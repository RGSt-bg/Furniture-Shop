import { useEffect, useState } from "react";

import FurnitureListItem from "./furniture-list-item/FurnitureListItem.jsx";
import { getFurnitures } from "../../../../utils/furnitureUtils.jsx";

export default function FurnitureList() {

    const [furnitures, setFurnitures] = useState([]);

    useEffect(() => {
        getFurnitures('/furniture/furnitureList', setFurnitures);
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

        <div id="no-post">
            {!furnitures.length && <h2>Sorry, there are no new Furnitures!</h2>}
        </div>
        
        </section>
    </div>
   );
};  