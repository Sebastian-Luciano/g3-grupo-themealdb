import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MealDetails() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null); // Inicializar como null

    async function getData() {
        const rs = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const rsJson = await rs.json();

        if (rsJson.meals && rsJson.meals.length > 0) {
            const mealData = rsJson.meals[0];
            const meal = {
                id: mealData.idMeal || '',
                img: mealData.strMealThumb || '',
                area: mealData.strArea || '',
                categoria: mealData.strCategory || '',
                name: mealData.strMeal || '',
                instrucciones: mealData.strInstructions || '',
                ingredientes: mapearIngredientes(mealData),
                video: mealData.strYoutube || '',
            };
            setMeal(meal);
        }
    }

    const mapearIngredientes = (mealData) => {
        const ingredientes = {};
        for (let i = 1; i < 20; i++) {
            const ingrediente = mealData[`strIngredient${i}`];
            const medida = mealData[`strMeasure${i}`];
            if (ingrediente && medida) {
                ingredientes[ingrediente] = medida;
            } else if (ingrediente && !medida) {
                ingredientes[ingrediente] = '';
            } else {
                break;
            }
        }
        return ingredientes;
    }

    useEffect(() => {
        getData();
    }, [id]);


    return (
        <div className='meal-container'>
            {meal ? (
                <div className='meal-details-container'>
                    <div className='img-titulo'>
                        <div className='titulo'>
                            <h1>{meal.name}</h1>
                            <div className='hashtags'>
                                <p>#{meal.area}</p>
                                <p>#{meal.categoria}</p>
                            </div>
                        </div>
                        <div className='meal-img'>
                            <img src={meal.img} alt={meal.name} />
                        </div>
                    </div>


                    <div className='conteiner-instrucciones'>
                        <div className='mail-instruction'>
                            <h2>Instruction</h2>
                            <p className='instrucciones'>{meal.instrucciones}</p>
                        </div>
                        <div className='mail-receta'>
                        <ul className='ingredientes'>
                            <h3>Ingredients</h3>
                            {Object.entries(meal.ingredientes).map(([ingrediente, medida], index) => (
                                <li key={index}>{ingrediente} {medida && `- ${medida}`}</li>
                            ))}
                        </ul>
                        </div>
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
            ) : (
                <div>Cargando...</div>
            )}
        </div>
    );
}