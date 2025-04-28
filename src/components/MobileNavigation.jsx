import { useEffect, useState } from 'react';
import { mobileNavItems } from './../constants/navigation';
import { NavLink } from 'react-router-dom';

function MobileNavigation() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 200); // Delay after scroll ends
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className={`md:hidden h-14 w-full bg-black bg-opacity-75 fixed bottom-0 z-50
      ${isVisible ? 'opacity-1 cursor-auto' : 'opacity-0 cursor-none'} transition-opacity duration-300
    `}>
      <ul className='flex items-center justify-evenly h-full'>
        {
          mobileNavItems.map(item =>
            <li key={item.id} className='h-full'>
              <NavLink to={item.link}
                className={({isActive}) => `px-3 h-full flex flex-col items-center justify-center gap-1
                hover:text-neutral-100 transition-colors duration-300
                ${isActive ? 'text-neutral-100' : 'text-neutral-400'}`}>
                <span className='text-2xl'>
                  {item.icon}
                </span>
                <span className='text-sm'>
                  {item.label}
                </span>
              </NavLink>
            </li>
          )
        }
      </ul>
    </section>
  )
}

export default MobileNavigation