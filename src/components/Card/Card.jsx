import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function Card({ showAll }) {
  const [foods, setFoods] = useState([]);
  const { category } = useParams();

  async function getData() {
    let url = '';
    if (showAll) {
      url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    } else {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    }

    const rs = await fetch(url);
    const jsonRs = await rs.json();
    const dataRs = jsonRs.meals?.map(meal => ({
      id: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb
    })) || [];

    setFoods(dataRs);
  }

  useEffect(() => {
    getData();
  }, [category, showAll]);
  return (

    <div className="foods-grid">
      {foods.map((food, index) => (
        <Link to={`/meal/${food.id}`} key={food.id}>
          <div  className='card'>
            <div className="card-img">
              <img src={food.strMealThumb} className="img-food" alt={food.strMeal} />
            </div>
            <div className="card-body">
              <h2 className="card-title">{food.strMeal}</h2>
            </div >
          </div>
        </Link>
      ))}
    </div>

  );
}