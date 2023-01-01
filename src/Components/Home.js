import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import { Data } from './Data'
import '../styles/home.css';

export default function Home() {
    // initializing hooks
    const [movies, setMovies] = useState(Data);
    const [titleFilter, setTitleFilter] = useState('');
    const [newMovie, setNewMovie] = useState({ title: '', posterUrl: '', description: '', rating: '', trailer: '' });

    //filter by title (function)
    const handleFilterTitle = title => {
        setTitleFilter(title);
    };

    //Result of the filter by title or rating
    const filteredMovies = movies.filter(movie => {
        return (
            movie.title.toLowerCase().includes(titleFilter.toLowerCase())
        )
    });

    // function for adding a new movie 
    const handleNewMovieChange = event => {
        setNewMovie({
            ...newMovie,
            [event.target.name]: event.target.value,
        });
    };

    // function for submitting the movie
    const handleNewMovieSubmit = event => {
        event.preventDefault();
        setMovies([...movies, newMovie]);
        setNewMovie({ title: '', posterUrl: '', description: '', rating: '', trailer: '' });
        Data.push(newMovie)
    };

    return (
        <>
            <div className='filter'>
                <div className="head">
                    <h1>MOVIES</h1>
                    <Filter handleFilterTitle={handleFilterTitle} />
                </div>
                <MovieList movies={filteredMovies} />
            </div>
            <h1 className='title'>Complete this form to add a video</h1>
            <div className="addMovie">
                <form onSubmit={handleNewMovieSubmit}>
                    <label>
                        Title <br />
                        <input required type="text" name="title" value={newMovie.title} onChange={handleNewMovieChange} />
                    </label>
                    <label>
                        Poster <br />
                        <input required type="text" name="posterUrl" value={newMovie.posterUrl} onChange={handleNewMovieChange} />
                    </label>
                    <label>
                        Description <br />
                        <textarea required type="text" name="description" value={newMovie.description} onChange={handleNewMovieChange} />
                    </label>
                    <label>
                        Rating <br />
                        <input required type="number" name="rating" min="1" max="10" value={newMovie.rating} onChange={handleNewMovieChange} />
                    </label>
                    <label>
                        Trailer Url <br />
                        <input required type="text" name="trailer" value={newMovie.trailer} onChange={handleNewMovieChange} />
                    </label>
                    <button type="submit">Add movie</button>
                </form>
            </div>
        </>
    )
}
