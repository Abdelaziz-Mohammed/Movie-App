import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import moment from "moment";
import HorizontalSlider from './../components/HorizontalSlider';
import VideoPlay from './../components/VideoPlay';

function DetailsPage() {
  const params = useParams();
  const imageURL = useSelector(state => state.movie.imageURL);
  const {data} = useFetch(`/${params?.explore}/${params?.id}`);
  const {data: castData} = useFetch(`/${params?.explore}/${params?.id}/credits`);
  const {data: similar} = useFetch(`/${params?.explore}/${params?.id}/similar`);
  const similarData = similar?.results || [];
  const {data: recommended} = useFetch(`/${params?.explore}/${params?.id}/recommendations`);
  const recommendedData = recommended?.results || [];
  const [playVideo, setPlayVideo] = useState(false);

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
      {/* poster image + desc */}
      <div className="container mx-auto px-4 pt-44 md:pt-0
        flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="-mt-20 relative w-fit mx-auto md:mx-0">
          <img src={imageURL+data?.poster_path} alt={data?.title} loading="eager"
            className='w-60 min-w-60 h-80 object-cover rounded-lg' />
          <button onClick={() => setPlayVideo(true)}
            className='text-black bg-white h-10 w-full font-bold rounded mt-3 shadow-lg
            hover:bg-gradient-to-l from-red-500 to-orange-500 transition-all duration-300'>
            Play Now
          </button>
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
          {/* cast */}
          <div className="border-b border-neutral-700 pb-5">
            <h2 className="text-xl text-white font-bold mb-5">
              Cast :
            </h2>
            <div className="flex flex-wrap justify-between gap-y-8 gap-x-6">
              {
                castData?.cast?.map((cast, index) =>
                  <div key={index}
                    className="h-[120px] flex flex-col items-center justify-start w-20 gap-2"
                  >
                    {
                      cast?.profile_path ?
                      <img src={imageURL+cast?.profile_path} alt={cast.name || cast.original_name}
                        className="w-20 h-20 rounded-full object-cover border border-neutral-700
                        hover:scale-110 transition-all duration-100"
                      /> :
                      <div className="w-20 h-20 rounded-full bg-neutral-800 flex items-center justify-center">
                        <span className="text-xs text-white/90">No Photo</span>
                      </div>
                    }
                    <span className="text-neutral-400 text-xs text-center text-ellipsis line-clamp-2">
                      {cast.name || cast.original_name}
                    </span>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
      {/* similar */}
      {
        (similarData.length > 0) ?
        <HorizontalSlider onclick={window.scrollTo({ top: 0, behavior: 'smooth' })}
          headingTitle={`Similar ${params?.explore === 'tv' ? 'TV Shows' : 'Movies'} :`}
          sliderData={similarData}
          media_type={params?.explore}
        /> :
        <div className="container mx-auto my-5">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4">
            No Similar {params?.explore === 'tv' ? 'TV Shows' : 'Movies'} Found!
          </h2>
        </div>
      }
      {/* recommended */}
      {
        (similarData.length > 0) ?
        <HorizontalSlider onclick={window.scrollTo({ top: 0, behavior: 'smooth' })}
          headingTitle={`Recommended ${params?.explore === 'tv' ? 'TV Shows' : 'Movies'} :`}
          sliderData={recommendedData}
          media_type={params?.explore}
        /> :
        <div className="container mx-auto my-5">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4">
            No Recommended {params?.explore === 'tv' ? 'TV Shows' : 'Movies'} Found!
          </h2>
        </div>
      }
      {
        playVideo
        &&
        <VideoPlay close={() => setPlayVideo(false)} />
      }
    </section>
  )
}

export default DetailsPage