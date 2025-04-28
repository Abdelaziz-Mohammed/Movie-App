import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const bannerData = useSelector(state => state.movie.bannerData);
  const imageURL = useSelector(state => state.movie.imageURL);
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  const handlePrev = () => {
    setCurrentImage(curr => curr > 0 ? curr - 1 : curr);
  }
  const handleNext = () => {
    setCurrentImage(curr => curr <  bannerData.length - 1 ? curr + 1 : curr);
  }
  // auto sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(curr => curr < bannerData.length - 1 ? curr + 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerData]);
  return (
    <section className='w-full h-full'>
      <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
        {
          bannerData.map(data =>
            <div key={data.id}
              className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative'
              style={{ transform: `translateX(-${currentImage * 100}%)`}}>
              {/* image slider */}
              <div className='w-full h-full'>
                <img src={imageURL+data.backdrop_path} alt={data.title || data.name} loading="eager"
                className='w-full h-full object-cover' />
              </div>
              {/* prev & next btns */}
              <div className='absolute top-0 w-full h-full hidden md:flex items-center justify-between'>
                {/* prev btn */}
                <button onClick={handlePrev}
                  className='z-10 bg-white opacity-35 hover:opacity-75 p-1 rounded-full text-black ml-4 transition-all duration-300'>
                  <FaAngleLeft className='text-xl sm:text-2xl' />
                </button>
                {/* next btn */}
                <button onClick={handleNext}
                  className='z-10 bg-white opacity-35 hover:opacity-75 p-1 rounded-full text-black mr-4 transition-all duration-300'>
                  <FaAngleRight className='text-xl sm:text-2xl' />
                </button>
              </div>
              {/* backdrop */}
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>
              </div>
              {/* movie/tv data */}
              <div className='container mx-auto'>
                <div className='absolute w-full bottom-0 max-w-md'>
                  <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:5xl font-bold text-white drop-shadow-3xl px-4'>
                    {data.title || data.name || `${data.media_type} Title`}
                  </h2>
                  <p className='text-ellipsis line-clamp-2 px-4 my-2'>
                    {data.overview || `${data.media_type} Overview`}
                  </p>
                  <div className='flex flex-wrap items-center gap-3 px-4'>
                    <p>
                      Rating : {Number(data.vote_average).toFixed(1)}+
                    </p>
                    {' | '}
                    <p>
                      View : {Number(data.popularity).toFixed(0)}
                    </p>
                  </div>
                  <button onClick={() => navigate(`/${data.media_type}/${data.id}`)} className='text-black bg-white px-4 py-2 font-bold rounded m-4 shadow-lg
                    hover:bg-gradient-to-l from-red-500 to-orange-500 transition-all duration-300'>
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Banner