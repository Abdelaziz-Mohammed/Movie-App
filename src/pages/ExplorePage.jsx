import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Card from './../components/Card';

function ExplorePage() {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);

  const fetchExploreData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
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
    fetchExploreData();
  }, [pageNo]);

  useEffect(() => {
    fetchExploreData();
    setData([]);
    setPageNo(1);
  }, [params.explore]);

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setPageNo(prev => prev + 1);
      }
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 min-h-[calc(100vh-115px)]">
      <div className="container mx-auto px-4">
        <h2 className="capitalize text-xl sm:text-2xl md:text-3xl text-white font-bold my-4 text-center">
          Popular {params.explore} Shows
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-4 justify-center">
          {
            data.map((item, index)=>
              <Card key={item.id+'explore'+index} data={item} media_type={params.explore} hoverEffect={true} />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default ExplorePage