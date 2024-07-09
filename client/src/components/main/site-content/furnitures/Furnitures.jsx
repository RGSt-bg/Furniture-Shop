import { BASE_URL } from "../../../../variables.jsx";
import { useEffect, useState } from "react";

export default function Furnitures() {
   return(
    <div id="content">
    <h1>
      <b><i>Trending Categories</i></b>
    </h1>

    <div className="left">
      <a className="category" href="furnitureList.html"><img src="./style/Chair-Amaro.jpg" alt="Chair" /></a>
      <a className="category" href="furnitureList.html"><h2>Chairs</h2></a>
    </div>

    <div className="center">
      <a className="category" href="furnitureList.html"><img src="./style/Table-Atika.jpg" alt="Table" /></a>
      <a className="category" href="furnitureList.html"><h2>Tables</h2></a>
    </div>

    <div className="right">
      <a className="category" href="furnitureList.html"><img src="./style/Sofa-Antony.jpg" alt="Sofa" /></a>
      <a className="category" href="furnitureList.html"><h2>Sofas</h2></a>
    </div>

    <div className="center">
      <a className="category" href="furnitureList.html"><img src="./style/Bed-Memphis.jpg" alt="Bed"/></a>
      <a className="category" href="furnitureList.html"><h2>Beds</h2></a>
    </div>

    <div className="left">
      <a className="category" href="furnitureList.html"><img src="./style/Wardrobe-Alexa.jpg" alt="Wardrobe"/></a>
      <a className="category" href="furnitureList.html"><h2>Wardrobes</h2></a>
    </div>

  </div>
   );
};