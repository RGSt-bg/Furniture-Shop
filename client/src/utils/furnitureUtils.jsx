import { BASE_URL } from "./variables.jsx";

// export default function calledFromWhere(calledFrom, category) {
//   let isNewTitle = "";
//   let isNew = "";
//   let noFurnitures = "";

//   if (calledFrom === "newProducts") {
//     isNew = "Here you can find our NEW furnitures - elegant, comfortable, functional ...";
//     noFurnitures = "Sorry, there are no new furnitures!";
//     isNewTitle = "New Furnitures";
//   } else if (calledFrom === "search") {
//     isNew = "The furniture that meets your criteria ...";
//     noFurnitures = "Sorry, there are no furnitures that meets your criteria!";
//     isNewTitle = "Found Furnitures";
//   } else if (calledFrom === "category") {
//     isNew = "The furnitures by category ...";
//     noFurnitures = "Sorry, there are no furnitures in this category yet!";
//     isNewTitle = `${category}`;
//   } else {
//     isNew = "Here you can find our furnitures - elegant, comfortable, functional ...";
//     noFurnitures = "Sorry, there are no furnitures!";
//     isNewTitle = "Our Furnitures";
//   }

//   return [isNew, noFurnitures, isNewTitle];
// }

// export default excludeCategory(categoryName, category) {
//   return category.filter((furniture) => furniture.category != categoryName);
// }

export const getFurnitures = async function (path, setFurnitures) {
  try {
      const response = await fetch(`${BASE_URL}${path}`);
      const data = await response.json();
      const furnitures = Object.values(data);

      return setFurnitures(furnitures);
  } catch (error) {
      alert(error.message);
  }
};

// module.exports = {
  // calledFromWhere,
  // excludeCategory,
// }