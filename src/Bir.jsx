import React from 'react';
import { useState, useEffect } from 'react';


function Bir() {

    const [data, setData] = useState([])

    const Api = () => {


        fetch('https://themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(res => setData(res.meals))
    }
   console.log(data);
    useEffect(() => {
        Api()

    }, []);

    return (
        <>
            {data.map(db=>(
                <div className='cards'>
                    <img className='cards-img' src={db.strMealThumb} alt="" />
                    <h1 className='cards-title'>{db.strMeal}</h1>
                    <p className='cards-dec'>{db.strInstructions}</p><br />
                    <a className='cards-links' href={db.strYoutube}>YouTube</a>
                </div>
            ))}
        </>
    );
};

export default Bir;