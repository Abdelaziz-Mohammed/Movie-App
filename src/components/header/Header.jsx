import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoImg, userImg } from '../../assets/index';
import { IoSearchOutline } from "react-icons/io5";
import { headerNavItems } from './../../constants/navigation';

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (searchInput) navigate(`/search?q=${searchInput}`);
  }, [searchInput, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(`/search?q=${searchInput}`);
    // setSearchInput('');
  };
  return (
    <header className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75 z-50'>
      <div className='container mx-auto px-3
        flex items-center h-full'>
        {/* logo */}
        <NavLink to='/'>
          <img src={logoImg} alt="logo" width={120} />
        </NavLink>
        {/* navbar */}
        <nav className='hidden md:flex items-center gap-1 ml-5'>
          {
            headerNavItems.map(item =>
              <NavLink key={item.id}
                to={item.link}
                className={({isActive}) => `px-2 hover:text-neutral-100 transition-colors duration-300
                ${isActive && 'text-neutral-100'}`}>
                {item.label}
              </NavLink>
            )
          }
        </nav>
        {/* search + user */}
        <div className='ml-auto flex items-center gap-4'>
          {/* search box + search icon */}
          <form onSubmit={handleSubmit}
            className='flex items-center gap-2'>
            <input type="text" placeholder='Search here...'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className='hidden md:block bg-neutral-700 px-4 py-1 outline-none
              rounded-md border border-neutral-600 placeholder:text-sm' />
            <button className='w-8 h-8 flex items-center justify-center'>
              <IoSearchOutline className='text-2xl text-white' />
            </button>
          </form>
          {/* user icon */}
          <div className='w-8 h-8 rounded-full cursor-pointer border-2 border-amber-600 active:scale-50 transition-transform'>
            <img src={userImg} alt="user" className='rounded-full' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header