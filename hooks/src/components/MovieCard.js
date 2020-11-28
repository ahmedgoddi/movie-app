import React from 'react'
import"../App.css"
import Rating from './Rating'





export default function MovieCard({el}) {
    return (
        
        <div className="card">
        <img src={el.image} alt=""/>
        <h2 className="h22">{el.name}</h2>
        <p className="p22"> {el.year}</p>
        <div className="movie-over">
        <p > {el.description} </p>
        </div >
        <div className="s2">
        <Rating rate={el.rating}/>
        </div>
        
        </div>
        
    )
}
