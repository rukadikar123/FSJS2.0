import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [mealName, setMealName] = useState("");
  const [mealData, setMealData] = useState(null);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
      );
      setMealData(response.data.meals ? response.data.meals[0] : null);
    } catch (error) {
      console.log("error occured ", error);
    }
  };

  return (
    <>
      <div className="mt-6 flex flex-col items-start h-[90vh] pl-[150px] gap-10 pt-20 bg-slate-400">
        <form onSubmit={handleClick} className="flex  gap-6">
          <input
            className="w-[30vw] outline-none focus:ring-1 rounded-md p-2 text-sm"
            type="text"
            placeholder="Search for a meal"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
          />

          <button
            className="bg-blue-400 px-4 py-2 rounded-lg text-white"
            type="submit"
          >
            Search
          </button>
        </form>
        <div>
          {mealData && (
            <div className="mt-10 flex flex-shrink-0 flex-col gap-4">
              <p>Meal : {mealData.idMeal}</p>
              <p>Category : {mealData.strCategory}</p>
              <p>Area: {mealData.strArea}</p>
              <p>Ingradient 1: {mealData.strIngredient1}</p>
              <p>Ingradient 2: {mealData.strIngredient2}</p>
              <p>Ingradient 3: {mealData.strIngredient3}</p>
              <p>Ingradient 4: {mealData.strIngredient4}</p>
              <p>Tags: {mealData.strTags}</p>
              <img
                className="h-[130px]"
                src={`${mealData.strMealThumb}`}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
