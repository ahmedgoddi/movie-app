import React from 'react'
import MovieCard from './MovieCard'
import "../App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default function MovieList({movies}) {
    return (
        
        <div className="cards">
        {movies.map((el , i) => 
        <MovieCard key={i} el={el}  />
        )}
    
        </div>
    )
}
