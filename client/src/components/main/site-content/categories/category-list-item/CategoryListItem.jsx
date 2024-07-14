import { Link } from "react-router-dom";

export default function CategoryListItem(props) {
    const category = props.category;
    return(
    <div className={category.location}>
        <Link className="category" to="/furniture/categories"><img src={category.imageCategory} alt={category.category} /></Link>
        <Link className="category" to="/furniture/categories"><h2>{category.category}</h2></Link>
    </div>
   );
};