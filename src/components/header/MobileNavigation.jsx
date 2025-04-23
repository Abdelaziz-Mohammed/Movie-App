import { mobileNavItems } from './../../constants/navigation';
import { NavLink } from 'react-router-dom';

function MobileNavigation() {
  return (
    <section className='md:hidden h-14 w-full bg-neutral-600 bg-opacity-40 fixed bottom-0'>
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