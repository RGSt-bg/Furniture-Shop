export const calledFromWhere = function (calledFrom, category) {
  let isNewTitle = "";
  let isNew = "";
  let noFurnitures = "";
  let path = `?calledFrom=${calledFrom}`;

  if (path && category)
    path = `${path}&category=${category}`;

  if (calledFrom === "newProducts") {
    isNew = "Here you can find our NEW furnitures - elegant, comfortable, functional ...";
    noFurnitures = "Sorry, there are no new furnitures!";
    isNewTitle = "New Furnitures";
  } else if (calledFrom === "search") {
    isNew = "The furniture that meets your criteria ...";
    noFurnitures = "Sorry, there are no furnitures that meets your criteria!";
    isNewTitle = "Found Furnitures";
  } else if (calledFrom === "category") {
    isNew = "The furnitures by category ...";
    noFurnitures = "Sorry, there are no furnitures in this category yet!";
    isNewTitle = `${category}`;
  } else {
    isNew = "Here you can find our furnitures - elegant, comfortable, functional ...";
    noFurnitures = "Sorry, there are no furnitures!";
    isNewTitle = "Our Furnitures";
  }

  return [isNew, noFurnitures, isNewTitle, path];
}