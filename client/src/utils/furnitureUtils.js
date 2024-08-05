import { BASE_URL } from "./variables.js";

export default function calledFromWhere(calledFrom, category) {
  let isNewTitle = "";
  let isNew = "";
  let noFurnitures = "";

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

  return [isNew, noFurnitures, isNewTitle];
}

// export default excludeCategory(categoryName, category) {
//   return category.filter((furniture) => furniture.category != categoryName);
// }

export const getFurnitures = async function (path, getFurnitures) {
  try {
      const response = await fetch(`${BASE_URL}${path}`);
      const data = await response.json();
      const furnitures = Object.values(data);

      return getFurnitures(furnitures);
  } catch (error) {
      alert(error.message);
  }
};

export const getFurnitureDetails = async function (path, setFurnitureDetails) {

  try {
      const response = await fetch(`${BASE_URL}${path}`);
      const furnitureDetails = await response.json();

      return setFurnitureDetails(furnitureDetails);
  } catch (error) {
      alert(error.message);
  }
};

export const createCategory = async function (path, categoryData) {
  try {
      const response = await fetch(`${BASE_URL}${path}`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(categoryData),
      });

      if (!response.ok) {
        throw new Error("Network response is not OK!");
      }
      const data = await response.json();
      return data;
      
  } catch (error) {
      alert(error.message);
  }
};

export const createFurnitures = async function (path, furnitureData) {
  try {
      const response = await fetch(`${BASE_URL}${path}`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(furnitureData),
      });

      if (!response.ok) {
        throw new Error("Network response is not OK!");
      }
      const data = await response.json();
      return data;
      
  } catch (error) {
      alert(error.message);
  }
};

export const editFurnitures = async function (path, furnitureData) {
  try {
      const response = await fetch(`${BASE_URL}${path}`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(furnitureData),
      });

      if (!response.ok) {
        throw new Error("Network response is not OK!");
      }
      const data = await response.json();
      return data;
      
  } catch (error) {
      alert(error.message);
  }
};

// module.exports = {
  // calledFromWhere,
  // excludeCategory,
// }