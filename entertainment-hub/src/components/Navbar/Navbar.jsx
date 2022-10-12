import '../../scss/navbar/navbar.css';
import { FiTrendingUp } from 'react-icons/fi';
import { BiMovie } from 'react-icons/bi';
import { MdMonitor } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='nav__box'>
      <Link to={'/'}>
        <div className='nav__item'>
          <FiTrendingUp />
        </div>
      </Link>
      <Link to={'/movies'}>
        <div className='nav__item'>
          <BiMovie />
        </div>
      </Link>
      <Link to={'/series'}>
        <div className='nav__item'>
          <MdMonitor />
        </div>
      </Link>
      <Link to={'/search'}>
        <div className='nav__item'>
          <AiOutlineSearch />
        </div>
      </Link>
    </div>
  );
};
