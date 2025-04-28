import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaRegUser, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <footer className='text-center'>
      <div className='container mx-auto'>
        <div className='p-4 pb-2 flex items-center justify-center gap-4
          border-b border-neutral-700
        '>
          <Link to='https://www.linkedin.com/in/abdelaziz/' target='_blank'
            className='text-base rounded-lg border border-neutral-700 p-2
              hover:text-white hover:bg-neutral-800 transition-colors duration-100'>
            <FaLinkedinIn />
          </Link>
          <Link to='https://personal-portfolio-liart-rho.vercel.app/' target='_blank'
            className='text-base rounded-lg border border-neutral-700 p-2
              hover:text-white hover:bg-neutral-800 transition-colors duration-100'>
            <FaRegUser />          
          </Link>
          <Link to='https://github.com/Abdelaziz-Mohammed' target='_blank'
            className='text-base rounded-lg border border-neutral-700 p-2
              hover:text-white hover:bg-neutral-800 transition-colors duration-100'>
            <FiGithub />          
          </Link>
          <Link to='https://www.instagram.com/' target='_blank'
            className='text-base rounded-lg border border-neutral-700 p-2
              hover:text-white hover:bg-neutral-800 transition-colors duration-100'>
            <FaInstagram />          
          </Link>
          <Link to='https://x.com/' target='_blank'
            className='text-base rounded-lg border border-neutral-700 p-2
              hover:text-white hover:bg-neutral-800 transition-colors duration-100'>
            <FaTwitter />          
          </Link>
        </div>
        <p className='p-4 text-xs sm:text-sm'>
          &copy; 2025; Created By {' '}
          <Link to='https://www.linkedin.com/in/abdelaziz/' target='_blank'
            className='text-primary text-sm sm:text-base font-bold'>
            Abdelaziz Mohamed
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer