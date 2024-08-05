import { useEffect, useState, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";

import { CalledFromContext } from "../../Main.jsx";

import FurnitureListItem from "./furniture-list-item/FurnitureListItem.jsx";
import { getFurnitures } from "../../../../utils/furnitureApi.js";
import { calledFromWhere } from "../../../../utils/furnitureUtils.js";

export default function FurnitureList() {

    const { category } = useParams() || '';
    const location = useLocation();
    
    const {calledFrom, setCalledFrom} = useContext(CalledFromContext);
    const [furnitures, setFurnitures] = useState([]);
    const [isNew, noFurnitures, isNewTitle, path] = calledFromWhere(calledFrom, category);

    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const calledFromQueryParam = params.get('calledFrom') || '';
      if (calledFromQueryParam) {
        setCalledFrom(calledFromQueryParam);
      }
    }, [location.search, setCalledFrom]);

    useEffect(() => {
        getFurnitures(`/furniture/furnitureList${path}`, setFurnitures);
    }, [path]);

    return(
    <div id="content">
        <h1>
          <b><i>{isNewTitle}</i></b>
        </h1>
        <p>{isNew}</p>

        <section id="newProducts">
          <ul className="card-wrapper">
            {furnitures.length > 0 && furnitures.map((furniture) => (<FurnitureListItem key={furniture._id} furniture={furniture} />))}
          </ul>

        <div id="no-post">
            {!furnitures.length && <h2>{noFurnitures}</h2>}
        </div>
        
        </section>
    </div>
   );
};  