import React from 'react';
import '../../scss/pagination/pagination.css';
import { useEffect } from 'react';
export const Pagination = ({ pages, currentPage, changePage }) => {
  const pageIndexes = Array.from({ length: pages }, (v, i) => i + 1);
  const displayIndexes = 2;

  return (
    <section id='pagination'>
      <div className='page__box'>
        <div onClick={() => changePage(1)}>first</div>
        <div onClick={() => changePage(currentPage - 1)}>Previous</div>

        {pageIndexes.map((number, i) => {
          if (
            number >= currentPage - displayIndexes &&
            number <= currentPage + displayIndexes
          ) {
            return (
              <div
                key={number}
                className='page__item'
                onClick={() => changePage(number)}>
                <p className={currentPage === number ? 'active' : ''}>
                  {number}
                </p>
              </div>
            );
          }
        })}

        <div onClick={() => changePage(currentPage + 1)}>Next</div>
        <div onClick={() => changePage(pages)}>last</div>
      </div>
    </section>
  );
};
