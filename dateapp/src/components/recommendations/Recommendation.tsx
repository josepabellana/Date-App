import React,{ useEffect } from 'react'
import './recommendation.css'


const Recommendations = ({recommendations}:{
        recommendations:any
    }) => {
    
    useEffect(()=>{console.log(recommendations)},[recommendations]);
    return (
        <section className="recommendation__container section">
            
            {recommendations.map((movie:any)=>
                    <div className="recommendation__box">
                        <p className="recommendation__title">{movie.id}</p>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" className="recommendation__logo" />
                    </div>
            )}
        </section>
        )
}


export default Recommendations;