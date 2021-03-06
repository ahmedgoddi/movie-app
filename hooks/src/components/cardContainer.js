import React ,   {useState} from "react";
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Search from './search';
import {  Link } from "react-router-dom";
import '../App.css';







const movie = [
{
    id : 0,
    name : "Titanic",
    image : "https://images-na.ssl-images-amazon.com/images/I/8129a7-9A7L._AC_SX466_.jpg",
    year : 1997,
    description : `The movie tells the dramatic story of the Titanic with Leonardo Di Caprio and 
    Kate Winslet as the main actors. 
    In the year 1912 a young poor guy, Leonardo, 
    travels by the gorgeous ship Titanic from London to New York with a big dream. 
    `,

    rating : 5,
    Trailer :"ZQ6klONCq4s"

},

{
    id : 1,
    name : "Prison Break",
    image : "https://images-na.ssl-images-amazon.com/images/I/41YKyZUo0KL._AC_SY445_.jpg",
    year : 2009,
    description : `Synopsis. Set two years after the original, 
    the film focuses on Peter Parker struggling to manage both his personal life and his duties as Spider-Man.
    The main villain in this film is Dr. `,
    rating : 4,
    Trailer :"MpnDkLGlhvk",
},

{
    id : 2,
    name : "Spiderman 2",
    image : "https://upload.wikimedia.org/wikipedia/en/0/02/Spider-Man_2_Poster.jpg",
    year : 2004,
    description : `It details the manipulated arrest and incarceration of Sara Tancredi
    (Sarah Wayne Callies) for the murder of Christina Scofield (Kathleen Quinlan), 
    the final escape plan which Michael devises for Sara. `,
    rating : 3 ,
    Trailer : "1s9Yln0YwCw"
},

]



export  class User extends React.Component {
    render() {
        const [movies] = movie.filter(el => el.id == this.props.match.params.id)

        return (
            <div>
                <h1> Page Description</h1>
            <h3>{movies.description}</h3>
            <div>
            <iframe src={"https://www.youtube.com/embed/" + movies.Trailer} width="560" height="315"></iframe>
            </div>

            <div className="go-back">
                <Link to={"/"}> Go Back </Link>
            </div>
            </div>
        )
    }
}




export default function CardContainer() {
    const [ListMovie , setListMovie] = useState(movie)



const Add = (newMovie) => setListMovie([...ListMovie, newMovie])

    const[Rate , setRate] = useState(0)
    const [search , setSearch] = useState("")

    const handleSearch = (searchedName) => setSearch(searchedName)
    
    const changeRate = (newRate) => setRate(newRate) 
    
    
    return (
        <div>
    <Search rate={Rate}  changeRate={changeRate} handleSearch={handleSearch} />
    <MovieList  movies={search? ListMovie.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
    : Rate > 0 ? ListMovie.filter((el)  =>  el.rating === Rate ) 
    : ListMovie } />
    <AddMovie Add={Add}/> 
    </div>
    )
}
