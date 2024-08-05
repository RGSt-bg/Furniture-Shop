import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { CalledFromContext } from "../../../Main.jsx";

export default function CategoryListItem(props) {

    const category = props.category;
    const {setCalledFrom} = useContext(CalledFromContext);
    
    useEffect(() => {
        setCalledFrom("category");
    }, []);

    return(
    <div className={`categories ${category.location}`}>
        <Link className="category" to="/furniture/furnitures"><img src={category.imageCategory} alt={category.category} /></Link>
        <Link className="category" to={`/furniture/categories?calledFrom=category&category=${category.category}`}><h2>{category.category}</h2></Link>
    </div>
   );
};