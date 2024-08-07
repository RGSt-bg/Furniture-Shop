import { BASE_URL } from "./variables.js";

export const getFurnitures = async function (path, getFurnitures) {
  try {
      const response = await fetch(`${BASE_URL}${path}`);
      const data = await response.json();
      const furnitures = Object.values(data);

      return furnitures;

    } catch (error) {
      alert(error.message);
  }
};

export const getFurnitureDetails = async function (path) {
  try {
      const response = await fetch(`${BASE_URL}${path}`);
      if (!response.ok) {
        throw new Error("Network response is not OK!");
      }
      const furnitureDetails = await response.json();
      return furnitureDetails;
  } catch (error) {
      alert(error.message);
      return {};
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
      return null;
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
      return null;
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
      return null;
  }
};

export const deleteFurniture = async function (path, furnitureId) {

  try {
    const response = await fetch(`${BASE_URL}${path}/${furnitureId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
      throw new Error("Network response is not OK!");
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
      alert(error.message);
      return null;
  }
};

export const searchFurnitures = async function (path) {
  try {
      const response = await fetch(`${BASE_URL}${path}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
      });
      if (!response.ok) {
        throw new Error("Network response is not OK!");
      }
      const data = await response.json();
      return data;
      
  } catch (error) {
      alert(error.message);
      return null;
  }
};
