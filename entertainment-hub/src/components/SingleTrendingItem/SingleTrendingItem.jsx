import React, { useState } from 'react';
import { img_500, unavailable } from '../../config/config';
import '../../scss/singleTrendingItem/trendingItem.css';
import { Modal } from '../Modal/Modal';
export const SingleTrendingItem = ({
  id,
  poster_path,
  title,
  media_type,
  vote_average,
  date,
  overview,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = val => {
    setShowModal(val);
  };

  return (
    <article
      key={id}
      onClick={() => {
        setShowModal(true);
      }}>
      {showModal && (
        <Modal
          media_type={media_type}
          id={id}
          title={title}
          date={date}
          handleModal={handleModal}
        />
      )}
      {
        <div className='trending'>
          <div className='trending__score'>
            {vote_average ? vote_average.toFixed(1) : '0.0'}
          </div>
          <img
            src={poster_path ? `${img_500}/${poster_path}` : unavailable}
            alt={title}
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
        </div>
      }
    </article>
  );
};
