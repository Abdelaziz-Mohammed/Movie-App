import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import HorizontalSlider from '../components/HorizontalSlider';

function Home() {
  const trendingData = useSelector(state => state.movie.bannerData);
  const nowPlayingData = useSelector(state => state.movie.nowPlayingData);
  const topRatedData = useSelector(state => state.movie.topRatedData);
  const popularData = useSelector(state => state.movie.popularData);
  const onTheAirData = useSelector(state => state.movie.onTheAirData);
  return (
    <div>
      <Banner />
      <HorizontalSlider headingTitle='Trending' sliderData={trendingData} isTrending={true} />
      <HorizontalSlider headingTitle='Now Playing' sliderData={nowPlayingData} media_type='movie' />
      <HorizontalSlider headingTitle='Top Rated Movies' sliderData={topRatedData} media_type='movie' />
      <HorizontalSlider headingTitle='Popular TV Shows' sliderData={popularData} media_type='tv' />
      <HorizontalSlider headingTitle='On The Air' sliderData={onTheAirData} media_type='tv' />
    </div>
  )
}

export default Home