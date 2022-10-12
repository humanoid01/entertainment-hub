import React, { useEffect } from 'react';
import { REACT__APP__API_KEY } from '../../api';
import '../../scss/genres/genres.css';
import { GrFormClose } from 'react-icons/gr';
export const Genres = ({
  type,
  genres,
  setGenres,
  setSelectedGenres,
  selectedGenres,
}) => {
  useEffect(() => {
    (async () => {
      const request = await fetch(`
https://api.themoviedb.org/3/genre/${type}/list?api_key=${REACT__APP__API_KEY}&language=en-US`);
      const data = await request.json();
      setGenres(data.genres);
    })();
  }, [setGenres, type]);

  const handleAdd = genre => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter(g => g.id !== genre.id));
  };
  const handleRemove = genre => {
    setGenres([...genres, genre]);
    setSelectedGenres(selectedGenres.filter(({ id }) => id !== genre.id));
  };

  return (
    <section className='genres'>
      <div className='genres__item'>
        {selectedGenres.map(genre => (
          <div key={genre.id} className='genres__item--selected'>
            <div>{genre.name}</div>
            <div className='genres__item-close'>
              <GrFormClose onClick={() => handleRemove(genre)} />
            </div>
          </div>
        ))}
      </div>
      <div className='genres__item'>
        {genres.map(genre => (
          <div
            className='genres__item--not'
            onClick={() => handleAdd(genre)}
            key={genre.id}>
            {genre.name}
          </div>
        ))}
      </div>
    </section>
  );
};
