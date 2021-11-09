import React, {useState} from 'react';
import Button from '../UI/Button';
import Form from '../UI/Form';
import './Movie.css';
//import "./NewPets.css";

const Movie = (props) => {
    const [movieName, setMovieName]= useState("");
    const [movieYear, setMovieYear]= useState("");
    const [directName, setDirectName]= useState("");
    const [price, setPrice]= useState("");

    const movieNameHandler=(event)=>{
        setMovieName(event.target.value);
    }
    const yearHandler=(event)=>{
        setMovieYear(event.target.value);
    }
    const directorHandler=(event)=>{
        setDirectName(event.target.value);
    }
    const priceHandler=(event)=>{
        setPrice(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        props.onNewMovie(movieName, movieYear, directName, price);
        setMovieName("");
        setMovieYear("");
        setDirectName("");
        setPrice("");   
    };
    return (
        <React.Fragment>
        <Form>
            <form onSubmit={submitHandler}>
              <label>Movie Name</label>
              <input type="text" onChange={movieNameHandler} value={movieName}></input>
              <label>Release year</label>
              <input type="date" onChange={yearHandler} value={movieYear}></input>
              <label>Director</label>
              <input type="text" onChange={directorHandler} value={directName}></input>
              <label>Price</label>
              <input type="number" onChange={priceHandler} value={price}></input>
              <Button type="submit">CREAR</Button>
            </form>
        </Form>
        </React.Fragment>
    );
};

export default Movie;
