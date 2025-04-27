import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import moment from "moment";

function DetailsPage() {
  const params = useParams();
  const imageURL = useSelector(state => state.movie.imageURL);
  const {data} = useFetch(`/${params?.explore}/${params?.id}`);
  const {data: castData } = useFetch(`/${params?.explore}/${params?.id}/credits`);

  // console.log(data);
  console.log(castData);
  
  return (
    <section className="">
      <div className='relative hidden md:block'>
        {/* backdrop image */}
        <div className='w-full h-[280px]'>
          <img src={imageURL+data?.backdrop_path} alt={data?.title} loading="eager"
          className='w-full h-full object-cover' />
        </div>
        {/* backdrop */}
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>
        </div>
      </div>
      {/* poster image */}
      <div className="container mx-auto px-4 pt-52 pb-16 md:pt-0 md:pb-16
        flex flex-col md:flex-row items-center justify-start gap-6 md:gap-10
        ">
        <div className="-mt-28 relative w-fit mx-auto md:mx-0">
          <img src={imageURL+data?.poster_path} alt={data?.title} loading="eager"
            className='w-60 min-w-60 h-80 object-cover rounded-lg' />
        </div>
        <div>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:5xl font-bold text-white'>
            {data?.title || data?.name || 'Media Title'}
          </h2>
          <p className="text-neutral-400 text-base md:text-lg mt-2 mb-5
          border-b border-neutral-700 pb-5">
            {data?.tagline}
          </p>
          <div className="text-neutral-400 text-base
            flex items-center gap-3 mt-3 mb-5
            border-b border-neutral-700 pb-5
            ">
            <p className="border-r border-neutral-500 pr-3">
              <span className="text-neutral-200">Rating</span> : {Number(data?.vote_average).toFixed(1)}
            </p>
            <p className=" border-r border-neutral-500 pr-3">
              <span className="text-neutral-200">Views</span> : {Number(data?.vote_count)}
            </p>
            <p className="">
              <span className="text-neutral-200">Duration</span> : {' '}
              {(Number(data?.runtime)/60).toFixed(1).split('.')[0]}h {' '}
              {(Number(data?.runtime)/60).toFixed(1).split('.')[1]}m
            </p>
          </div>
          <div className="border-b border-neutral-700 pb-5">
            <h3 className="text-xl text-white font-bold mb-1">
              Overview
            </h3>
            <p className="text-neutral-300">
              {data?.overview}
            </p>
          </div>
          <div className="flex items-center gap-3 my-5 text-neutral-400 text-base
            border-b border-neutral-700 pb-5">
            <p className="border-r border-neutral-500 pr-3">
              <span className="text-neutral-200">Status</span> : {data?.status}
            </p>
            <p className="border-r border-neutral-500 pr-3">
              <span className="text-neutral-200">Release Date</span> : {moment(data?.release_date).format('MMM Do YYYY')}
            </p>
            <p>
              <span className="text-neutral-200">Revenue</span> : {data?.revenue}
            </p>
          </div>
          {/*
            Start from Here
            Its time to 🥱😴😴
          */}
        </div>
      </div>
    </section>
  )
}

export default DetailsPage