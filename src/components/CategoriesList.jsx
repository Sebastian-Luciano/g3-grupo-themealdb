import React, { useEffect, useState } from 'react'
import CateogoriesItem from './CateogoriesItem';

export default function categories() {
    const [data, setData] = useState([])
    const [search, setSearh] = useState({categoria: ''})


    const [comidas, setComida] = useState([])

    async function getData() {
        const rs = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        const rsJson = await rs.json()

        console.log(rsJson.categories);
        const dataRs = rsJson.categories.map(comida =>
            ({
                id: comida?.idCategory,
                category: comida?.strCategory,
                img: comida?.strCategoryThumb
            })
        )

        setComida(dataRs)

        setData(dataRs)
    }

    function search_categories(){

        if (search.categoria !== '') {
            const filtro = data.filter(comida => comida.category.toLowerCase().includes(search.categoria.toLocaleLowerCase()))
            setComida(filtro)
            return
        }

        setComida(data)
    }

    useEffect(()=> {
        getData()
    }, [])

  return (
    <>
    <div className='contenedor-categorias'>
        <h2>Meals</h2>
        <input type="text" placeholder='Search Category' value={search.categoria}
        onChange={(e) => setSearh({ ...search, categoria: e.target.value})}/>
        <button className='lupa' onClick={search_categories}>🔍</button>
        <div>
            {comidas &&
                comidas.map((comida, index) => 
                <CateogoriesItem
                    key={index}
                    comida={comida}
                />
                )}
        </div>
    </div>
    </>
  )
}
