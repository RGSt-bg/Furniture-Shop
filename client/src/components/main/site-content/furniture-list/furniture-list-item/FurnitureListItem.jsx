import { Link } from "react-router-dom";

export default function FurnitureListItem({furniture}) {
   return(
    <li className="card">
        <img src={furniture.imageFurniture} alt={furniture.name} />
        <p><strong>Name: </strong><span className="name">{furniture.name}</span></p>
        <p><strong>Category: </strong><span className="category">{furniture.category}</span></p>
        <p><strong>Price: </strong><span className="formula">{furniture.price}€</span></p>
        <Link to={`/furniture/details/${furniture._id}`} className="details-btn">Details</Link>
    </li>
   );
};