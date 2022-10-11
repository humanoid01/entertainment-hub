import React from 'react';
import { img_300, img_500, unavailable } from '../../config/config';
import '../../scss/singleTrendingItem/trendingItem.css';

export const SingleTrendingItem = ({
  id,
  poster_path,
  title,
  first_air_date,
  release_date,
  media_type,
  vote_average,
  date,
  overview,
}) => {
  return (
    <article className='trending' key={id}>
      <div className='trending__score'> {vote_average.toFixed(1)} </div>
      <img
        src={poster_path ? `${img_300}/${poster_path}` : unavailable}
        alt=''
        width={300}
        height={450}
      />
      <h2 className='trending__title'> {title} </h2>
      <div className='trending__sub'>
        <div className='trending__sub--type'>
          {media_type === 'tv' ? 'Series' : 'Movie'}
        </div>
        <div className=' trending__sub--date'> {date} </div>
      </div>
    </article>
  );
};
