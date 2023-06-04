
import React, { useEffect, useState } from "react"
import axios from "../axios"
import './Movie.css'

// url image

const image_uri = 'https://image.tmdb.org/t/p/w500'

function Movie(props) {
    // console.log(props);

    const [movies, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.url)
            setMovie(request.data.results)
        }
        fetchData()
    }, [props.url])

    console.log(movies);

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="row_poster">

                {
                    movies.map(movie => {
                        return (
                            <img src={`${image_uri}${movie.poster_path}`} className="img_poster" 
                            alt={movie.name} key={movie.id} />
                        )
                    })

                }

                

            </div>
        </div>
    )
}

export default Movie