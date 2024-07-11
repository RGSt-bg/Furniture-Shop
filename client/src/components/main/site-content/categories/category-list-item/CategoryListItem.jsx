export default function CategoryListItem(props) {
    const category = props.category;
    return(
    <div className={category.location}>
        <a className="category" href="furnitureList.html"><img src={category.imageCategory} alt={category.category} /></a>
        <a className="category" href="furnitureList.html"><h2>{category.category}</h2></a>
    </div>
   );
};