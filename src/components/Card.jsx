import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

function Card({data, isTrending, index}) {
  const imageURL = useSelector(state => state.movie.imageURL);
  // console.log(data);
  return (
    <Link to={'/'+data.media_type+'/'+data.id} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded relative
      border border-neutral-800'>
      <img src={imageURL+data.poster_path} alt={data.title || data.name} loading="eager" />
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