import React, { useEffect } from 'react';
import { useState } from 'react';
import { REACT__APP__API_KEY } from '../../api';
import { Pagination } from '../../components/Pagination/Pagination';
import { SingleTrendingItem } from '../../components/SingleTrendingItem/SingleTrendingItem';
import '../../scss/trending/trending.css';

export const Trending = () => {
  const [trending, setTrending] = useState('');
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    const trendingRequest = await fetch(
      `  https://api.themoviedb.org/3/trending/all/day?api_key=${REACT__APP__API_KEY}&page=${page}`
    );
    const resolved = await trendingRequest.json();
    setTrending(resolved.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  const itemsPerPage = 3;
  const currentTrending = [...trending].slice(
    page * itemsPerPage - itemsPerPage,
    page * itemsPerPage
  );

  const changePage = value => {
    if (value >= 1 && value <= Math.ceil(trending.length / itemsPerPage)) {
      setPage(value);
      window.scroll(0, 0);
    }
  };

  return (
    <div>
      <div className='fresh'>
        {currentTrending &&
          currentTrending.map(
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
                media_type={media_type}
                vote_average={vote_average}
                overwiev={overwiev}
              />
            )
          )}
      </div>
      <Pagination
        pages={Math.ceil(trending.length / itemsPerPage)}
        currentPage={page}
        changePage={changePage}
      />
    </div>
  );
};
