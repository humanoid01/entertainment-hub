import React, { useState, useEffect } from 'react';
import '../../scss/modal/modal.css';
import { REACT__APP__API_KEY } from '../../api.js';
import { img_1280 } from '../../config/config';
import { GrYoutube } from 'react-icons/gr';
import { AiFillCloseCircle } from 'react-icons/ai';

export const Modal = ({ media_type, id, title, date, handleModal }) => {
  const [data, setData] = useState('');
  const [video, setVideo] = useState('');

  useEffect(() => {
    (async () => {
      const request = await fetch(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${REACT__APP__API_KEY}&language=en-US`
      );
      const response = await request.json();
      setData(response);
    })();

    (async () => {
      const request = await fetch(
        `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${REACT__APP__API_KEY}&language=en-US`
      );
      const response = await request.json();
      setVideo(response);
      console.log(response);
    })();
  }, [id, media_type]);

  const getTrailer = vidInfo => {
    const trailerOrTeaser = [];
    vidInfo.forEach(({ name, key }) => {
      if (name.toLowerCase().includes('official' || 'trailer')) {
        trailerOrTeaser.push(key);
      }
    });
    if (!trailerOrTeaser.length) return vidInfo[0].key;
    return trailerOrTeaser[0];
  };

  return (
    <section
      className='modal'
      key={id}
      onClick={e => {
        e.stopPropagation();
        handleModal(false);
      }}>
      <div
        className='modal__window'
        onClick={e => {
          e.stopPropagation();
          handleModal(true);
        }}>
        <button
          className='modal__window--close'
          onClick={e => {
            e.stopPropagation();
            handleModal(false);
          }}>
          {' '}
          <AiFillCloseCircle />{' '}
        </button>
        <img
          src={`${img_1280}/${data.backdrop_path}`}
          alt={title}
          className='modal__window--landscape'
        />

        <h2 className='modal__window--title'>
          {title} ({date ? date.slice(0, 4) : 'Unknown'})
        </h2>
        <p>
          Genre:{' '}
          {data.genres &&
            data.genres.map(({ name }, i) => (
              <span key={i} style={{ marginLeft: 5, marginRight: 5 }}>
                {' '}
                {name}{' '}
              </span>
            ))}
        </p>
        <p className='modal__window--tagline'>
          {' '}
          {data.tagline || 'No description.'}{' '}
        </p>
        <div className='modal__window--overwiev'>
          <p>{data.overview || 'No description.'}</p>
        </div>
        <div className='modal__window--trailer'>
          {video.results && video.results.length ? (
            <div className='modal__window--watch'>
              <a
                href={`http://www.youtube.com/watch?v=${getTrailer(
                  video.results
                )}`}
                target='_blank'
                rel='noreferrer'>
                <GrYoutube /> WATCH THE TRAILER
              </a>
            </div>
          ) : (
            'No link avaliable.'
          )}
        </div>
      </div>
    </section>
  );
};
