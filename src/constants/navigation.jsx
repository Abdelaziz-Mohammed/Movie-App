import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";

// for large screens navigation
export const headerNavItems = [
  { 
    id: 1,
    label: 'TV Shows',
    link: '/tv'
  },
  {
    id: 2,
    label: 'Movies',
    link: '/movie'
  },
];

// for mobile navigation
export const mobileNavItems = [
  {
    id: 1,
    label: 'Home',
    link: '/',
    icon: <MdHomeFilled />,
  },
  {
    id: 2,
    label: 'TV Shows',
    link: '/tv',
    icon: <PiTelevisionFill />,
  },
  {
    id: 3,
    label: 'Movies',
    link: '/movie',
    icon: <BiSolidMoviePlay />,
  },
  {
    id: 4,
    label: 'Search',
    link: '/search',
    icon: <IoSearchOutline />,
  },
];