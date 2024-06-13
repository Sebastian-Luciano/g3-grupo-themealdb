import { useEffect, useState } from "react";
import Card from "./components/Card/Card";

export default function App() {
  const [foods, setFoods] = useState([]);

  async function getData() {
    const rs = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb');
    const jsonRs = await rs.json();
    const dataRs = jsonRs.meals.map(meal => ({
      id: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb
    }));

    setFoods(dataRs);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <main className="container">
        <div className="foods-grid">
          {foods.map((food, index) => (
            <Card
              key={food.id + index}
              strMeal={food.strMeal}
              img={food.strMealThumb}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
