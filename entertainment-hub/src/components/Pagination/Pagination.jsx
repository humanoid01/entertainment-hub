import React from 'react';
import '../../scss/pagination/pagination.css';
import { useEffect } from 'react';
export const Pagination = ({
  itemsPerPage,
  displayIndexes,
  total_results,
  page = 1,
  setPage,
}) => {
  console.log(total_results);
  const totalPages = Math.ceil(total_results / itemsPerPage);

  const pageIndexes = Array.from({ length: totalPages }, (v, i) => i + 1);

  const changePage = value => {
    if (value >= 1 && value <= Math.ceil(total_results / itemsPerPage)) {
      setPage(value);
      window.scroll(0, 0);
    }
  };

  return (
    <section id='pagination'>
      <div className='page__box'>
        <div onClick={() => changePage(1)}>first</div>
        <div onClick={() => changePage(page - 1)}>Previous</div>

        {pageIndexes.map((number, i) => {
          if (
            number >= page - displayIndexes &&
            number <= page + displayIndexes
          ) {
            return (
              <div
                key={number}
                className='page__item'
                onClick={() => changePage(number)}>
                <p className={page === number ? 'active' : ''}>{number}</p>
              </div>
            );
          }
        })}

        <div onClick={() => changePage(page + 1)}>Next</div>
        <div onClick={() => changePage(totalPages)}>last</div>
      </div>
    </section>
  );
};
