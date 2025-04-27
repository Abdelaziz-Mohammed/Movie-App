import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

function Card({data, media_type, isTrending, index, hoverEffect = false}) {
  const imageURL = useSelector(state => state.movie.imageURL);
  const mediaType = data.media_type || media_type;
  return (
    <Link to={'/'+mediaType+'/'+data.id} className={`w-full min-w-[230px] max-w-[230px] block h-80 !overflow-hidden rounded relative
      border-[2px] border-neutral-800
      ${hoverEffect && 'hover:scale-105 hover:-rotate-2 transition-all duration-300'}
      `}>
      {
        data.poster_path ?
        <img src={imageURL+data.poster_path} alt={data.title || data.name} loading="eager" /> :
        <div className='bg-neutral-800 h-full flex items-center justify-center'>
          <span className='text-white/90 text-lg font-bold'>No Poster Found</span>
        </div>
      }
      {
        isTrending
        &&
        <div className='absolute top-2 left-0 px-2 py-[2px] bg-red-800 rounded-r-full backdrop-blur-3xl overflow-hidden'>
          <span className='text-white text-sm font-normal w-full h-full'>
            <span className='text-base font-bold'>#{index}</span> Trending
          </span>
        </div>
      }
      <div className='absolute bottom-0 left-0 backdrop-blur-3xl overflow-hidden w-full h-18 bg-black/85 p-2'>
        <h2 className='text-ellipsis line-clamp-1 text-white text-lg font-semibold'>
          {data.title || data.name || `${data.media_type} Title`}
        </h2>
        <div className='text-sm text-neutral-400
          flex items-center justify-between'>
          <p>
            {moment(data.release_date).format('MMM Do YYYY')}
          </p>
          <p className='bg-black px-2 py-1 rounded-full text-xs text-neutral-200
            border border-neutral-700 shadow-lg'>
            Rating: {Number(data.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card