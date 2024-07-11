export default function FurnitureListItem({furniture}) {
   return(
    <li className="card">
{console.log(`furniture: `, furniture)}
        <img src={furniture.imageFurniture} alt={furniture.name} />
        <p><strong>Name: </strong><span className="name">{furniture.name}</span></p>
        <p><strong>Category: </strong><span className="category">{furniture.category}</span></p>
        <p><strong>Price: </strong><span className="formula">{furniture.price}€</span></p>
        <a className="details-btn" href="details.html">Details</a>
    </li>
   );
};