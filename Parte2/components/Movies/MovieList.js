import React from 'react';
import './MovieList.css';

const MovieList = (props) => {
    return (
        <div>
            {props.movie.map((movie)=>{
                return (
                    <div className="blog-preview" 
                    key={movie.id}>
                        <h2>{movie.movieName}</h2>
                        <p>{movie.movieYear}</p>
                        <p>{movie.directName}</p>
                        <p>{movie.price}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default MovieList;
