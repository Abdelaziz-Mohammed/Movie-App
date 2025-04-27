import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import Card from "../components/Card";

function SearchPage() {
  const location = useLocation();
  const searchVal = location?.search?.slice(3)?.split('%20')?.join(' ');
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState(searchVal);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput) navigate(`/search?q=${searchInput}`);
  }, [searchInput, navigate]);

  const fetchExploreData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: location?.search.slice(3),
          page: pageNo,
        },
      });

      setData((prev) => {
        return [
          ...prev,
          ...response.data.results,
        ];
      });
    }
    catch(err) {
      console.error(`Error fetching data:`, err);
    }
  }

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchExploreData();
  }, [location?.search]);

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1) {
        setPageNo(prev => prev + 1);
      }
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // hide search box on scrolling
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 200); // Delay after scroll ends
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-16 min-h-[calc(100vh-115px)]">
      <div className="container mx-auto px-4">
        {/* search box for mobile */}
        <div className="mt-4 rounded-md max-w-[calc(2*230px+16px)] mx-auto sticky top-20 z-40">
          <input type="text" placeholder='Search here...'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={`md:hidden bg-white/25 px-4 py-1 outline-none
            rounded-md border border-neutral-600 placeholder:text-sm w-full
            ${isVisible ? 'opacity-1 cursor-auto' : 'opacity-0 cursor-none'} transition-opacity duration-300
            `}
          />
        </div>
        {/* search results */}
        <h2 className="capitalize text-xl sm:text-2xl md:text-3xl text-white font-bold my-4 text-center">
          Search Results
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-4 justify-center">
          {
            data.map((item, index)=>
              <Card key={item.id+'search'+index} data={item} media_type={item.media_type} hoverEffect={true} />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default SearchPage