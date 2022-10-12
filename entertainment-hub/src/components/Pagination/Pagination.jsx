import React from 'react';
import '../../scss/pagination/pagination.css';
import {
  BiArrowToLeft,
  BiArrowToRight,
  BiChevronLeft,
  BiChevronRight,
} from 'react-icons/bi';

export const Pagination = ({
  itemsPerPage,
  displayIndexes,
  total_results,
  page = 1,
  setPage,
}) => {
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
        <div onClick={() => changePage(1)}>
          <BiArrowToLeft className='pagination__nav' />
        </div>
        <div onClick={() => changePage(page - 1)}>
          <BiChevronLeft className='pagination__nav' />
        </div>

        {pageIndexes.map(number => {
          if (number > 500) return '';
          if (
            number >= page - displayIndexes &&
            number <= page + displayIndexes
          ) {
            return (
              <div
                key={number}
                className={page === number ? 'page__item active' : 'page__item'}
                onClick={() => changePage(number)}>
                <p>{number}</p>
              </div>
            );
          }
          return '';
        })}
        <div onClick={() => changePage(page + 1)}>
          <BiChevronRight className='pagination__nav' />
        </div>
        <div onClick={() => changePage(500)}>
          <BiArrowToRight className='pagination__nav' />
        </div>
      </div>
    </section>
  );
};
