import React from 'react'

export default function Rating({rate , changeRate}) {
    let star = []
    for( let i=0 ;i< 5 ; i++ ) {
        if(i < rate) {
            star.push(<span  onClick={() => changeRate(i + 1)}  className="star">★</span>)
        }
        else{
            star.push(<span  onClick={() => changeRate(i + 1)} >☆</span>)
        }
    }
    return star 
    
}
