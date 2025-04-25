import { Outlet } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MobileNavigation from "./components/header/MobileNavigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTrendingData, fetchConfiguration, fetchNowPlayingData, fetchTopRatedData, fetchPopularData, fetchOnTheAirData } from "./store/movieActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingData());
    dispatch(fetchConfiguration());
    dispatch(fetchNowPlayingData());
    dispatch(fetchTopRatedData());
    dispatch(fetchPopularData());
    dispatch(fetchOnTheAirData());
  }, [dispatch]);

  return (
    <main className="pb-14 md:pb-0">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  )
}

export default App