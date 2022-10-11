import '../../scss/navbar/navbar.css';
import { FiTrendingUp } from 'react-icons/fi';
import { BiMovie } from 'react-icons/bi';
import { MdMonitor } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='nav__box'>
      <Link to={'/trending'}>
        <div className='nav__item'>
          <FiTrendingUp />
        </div>
      </Link>
      <div className='nav__item'>
        <BiMovie />
      </div>
      <div className='nav__item'>
        <MdMonitor />
      </div>
      <div className='nav__item'>
        <AiOutlineSearch />
      </div>
    </div>
  );
};
