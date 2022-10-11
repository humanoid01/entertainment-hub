import React, { useState, useEffect } from 'react';
import { Pagination } from '../../components/Pagination/Pagination';
import { SingleTrendingItem } from '../../components/SingleTrendingItem/SingleTrendingItem';
import { useGenre } from '../../hooks/useGenre';
import { REACT__APP__API_KEY } from '../../api';
import { Genres } from '../../components/Genres/Genres';

export const Series = () => {
  const [movies, setMovies] = useState('');
  const [currentMovies, setCurrentMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreForURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${REACT__APP__API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${genreForURL}`
    );
    const data = await request.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, [genreForURL]);

  return (
    <div>
      <Genres
        type='tv'
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
      />
      <div className='fresh'>
        {currentMovies?.map(
          ({
            id,
            poster_path,
            title,
            first_air_date,
            release_date,
            media_type,
            vote_average,
            date,
            original_name,
            overwiev,
            name,
          }) => (
            <SingleTrendingItem
              key={id}
              id={id}
              poster_path={poster_path}
              title={name || title}
              date={release_date || first_air_date}
              media_type='tv'
              vote_average={vote_average}
              overwiev={overwiev}
            />
          )
        )}
      </div>
      {movies && (
        <Pagination
          itemsPerPage={3}
          content={movies}
          handleCurrent={setCurrentMovies}
          displayIndexes={2}
        />
      )}
    </div>
  );
};
