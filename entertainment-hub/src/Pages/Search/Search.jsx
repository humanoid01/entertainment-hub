import React, { useEffect, useState } from 'react';
import { REACT__APP__API_KEY } from '../../api';
import { SingleTrendingItem } from '../../components/SingleTrendingItem/SingleTrendingItem';
import '../../scss/search/search.css';

export const Search = () => {
  const [type, setType] = useState(1);
  const [searchMovies, setSearchMovies] = useState('');
  const [searchSeries, setSearchSeries] = useState('');
  const [content, setContent] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(0);
  const fetchSearch = async () => {
    const request = await fetch(`
https://api.themoviedb.org/3/search/${
      type ? 'tv' : 'movie'
    }?api_key=${REACT__APP__API_KEY}&language=en-US&query=${
      searchMovies ? searchMovies : searchSeries
    }`);
    const data = await request.json();
    setContent(data.results);
  };

  useEffect(() => {
    fetchSearch();
  }, [searchMovies, searchSeries]);

  return (
    <section id='search' style={{ marginTop: 150 }}>
      <input
        type='text'
        placeholder='Search'
        value={searchSeries}
        style={{ display: showSearchBar ? 'none' : '' }}
        onChange={e => {
          setType(1);
          setSearchSeries(e.target.value);
          setSearchMovies('');
        }}
      />
      <input
        type='text'
        placeholder='Search'
        value={searchMovies}
        style={{ display: showSearchBar ? '' : 'none' }}
        onChange={e => {
          setType(0);
          setSearchMovies(e.target.value);
          setSearchSeries('');
        }}
      />
      <div className='search__option'>
        <div
          className='search__option--item'
          onClick={() => setShowSearchBar(0)}>
          <p className={showSearchBar ? '' : 'active'}>Search TV Series</p>
        </div>
        <div
          className='search__option--item'
          onClick={() => setShowSearchBar(1)}>
          <p className={showSearchBar ? 'active' : ''}>Search Movies</p>
        </div>
      </div>
      <div className='fresh'>
        {content?.map(
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
              media_type={type ? 'tv' : 'movie'}
              vote_average={vote_average}
              overwiev={overwiev}
            />
          )
        )}
      </div>
    </section>
  );
};
