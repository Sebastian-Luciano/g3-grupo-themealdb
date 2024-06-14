import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Card({ strMeal, img }) {
  const [foods, setFoods] = useState([]);
  const {category} = useParams();
  async function getData() {
    const rs = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
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
  }, [category]);
  return (
    <>
      <div className="foods-grid">
        {foods.map((food, index) => (
              <div key={food.id + index}className='card'>
                <div className="card-img">
                  <img src={food.strMealThumb} className="img-food" alt={food.strMeal} />
                </div>
                <div className="card-body">
                <h2 className="card-title">{food.strMeal}</h2>
                </div >
              </div>   
        ))}
      </div>









      </>

  );
}