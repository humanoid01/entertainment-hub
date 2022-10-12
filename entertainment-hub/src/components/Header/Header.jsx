import React from 'react';
import '../../scss/header/header.css';

export const Header = () => {
  return (
    <div>
      <header onClick={() => window.scroll(0, 0)} id='home'>
        ENTERTAIN IO
      </header>
      <div className='fake'>''</div>
    </div>
  );
};
