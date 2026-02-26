import {useParams} from 'react-router-dom'
import moviesData from '../data/movies'

export default function MovieDetail(){
    const {id}=useParams()
    const movie=moviesData.find((e)=>
    e.id==id)

    return(
        <h1>{movie.title}</h1>
    )

}