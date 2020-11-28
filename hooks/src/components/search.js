import React, { useImperativeHandle, useState } from 'react'
import Rating from './Rating'


export default function Search({rate , changeRate , handleSearch}) {

    
    return (
        <div className="container">
            <input  className="search" onChange={(e) => handleSearch(e.target.value)} type="text" placeholder="  Search.." />
            <div className="rate">
            <Rating rate={rate} changeRate={changeRate}/>
            </div>
        </div>
    )
}
