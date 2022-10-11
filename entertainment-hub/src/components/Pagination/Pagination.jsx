import React from 'react';
import '../../scss/pagination/pagination.css';
import { useEffect, useState } from 'react';
export const Pagination = ({
  content,
  itemsPerPage,
  handleCurrent,
  displayIndexes,
}) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(content.length / itemsPerPage);
  const pageIndexes = Array.from({ length: totalPages }, (v, i) => i + 1);

  const changePage = value => {
    if (value >= 1 && value <= Math.ceil(content.length / itemsPerPage)) {
      setPage(value);
      handleCurrent(current(value));
      window.scroll(0, 0);
    }
  };

  const current = newPage => {
    const currentMovies = [...content].slice(
      (newPage || page) * itemsPerPage - itemsPerPage,
      (newPage || page) * itemsPerPage
    );
    return currentMovies;
  };

  useEffect(() => {
    handleCurrent(current());
    setPage(1);
  }, [content]);

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
