import { useEffect, useState } from "react";
import { getFurnitures } from "../../../../utils/furnitureUtils.jsx";
import CategoryListItem from "./category-list-item/CategoryListItem.jsx";

export default function Furnitures() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getFurnitures('/furniture/categories', setCategories);
    }, []);

    return(
    <div id="content">
      <h1>
        <b><i>Trending Categories</i></b>
      </h1>

      {categories.length > 0 && categories.map((category) => (
        <CategoryListItem key={category._id} category={category} />
      ))}
    </div>
   );
};