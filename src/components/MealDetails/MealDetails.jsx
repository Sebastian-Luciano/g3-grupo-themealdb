import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MealDetails() {
    const {category} = useParams();
    const [meals, setMeals] = useState([]); // Inicializar como un array

    async function getData() {
        const rs = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
        const rsJson = await rs.json();

        // console.log(rsJson.meals);
        const dataRs = rsJson.meals.map(meal => ({
            id: meal?.idMeal,
            img: meal?.strMealThumb,
            area: meal?.strArea,
            categoria: meal?.strCategory,
            name: meal?.strMeal,
            instrucciones: meal?.strInstructions,
            ingredientes: {
                1: meal?.strIngredient1,
                2: meal?.strMeasure2,
                3: meal?.strMeasure3,
                4: meal?.strMeasure4,
                5: meal?.strMeasure5,
                6: meal?.strMeasure6,
                7: meal?.strMeasure7,
                8: meal?.strMeasure8,
            },
            video: meal?.strYoutube
        }));

        console.log(dataRs);

        setMeals(dataRs);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className='meal-details-container'>
            {meals.length > 0 && meals.map((meal, index) => (
                <div key={index}>
                    <img src={meal.img} alt={meal.name} />
                    <div className='titulo'>
                        <h1>{meal.name}</h1>
                        <div className='hashtags'>
                            <p>#{meal.area}</p>
                            <p>#{meal.categoria}</p>
                        </div>
                    </div>

                    <div className='conteiner-instrucciones'>

                    <p className='instrucciones'>{meal.instrucciones}</p>
                    <ul className='ingredientes'>
                        {Object.entries(meal.ingredientes).map(([key, value]) => (
                            <li key={key}>{value}</li>
                        ))}
                    </ul>
                    </div>
                    <div className='video'>
                        <iframe
                            width="600"
                            height="350"
                            src={meal.video.replace("watch?v=", "embed/")}
                            frameborder="0"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            ))}

            </div>
        </>
    );
}