import React from 'react'
import MovieCard from './MovieCard'
import "../App.css"


export default function MovieList({movies}) {
    return (
        <div className="cards">
        {movies.map((el , i) => 
        <MovieCard key={i} el={el}  />
        )}
        </div>
    )
}
