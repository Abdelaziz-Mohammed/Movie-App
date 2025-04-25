import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function ExplorePage() {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);

  const fetchExploreData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          pageNo: pageNo,
        },
      });
      setData((prev) => {
        return [
          ...prev,
          ...response.data.results,
        ];
      });

      // kick start from here 🐱‍🏍😎
      // let's go to 🥱😴
      console.log(response.data.results);
    }
    catch(err) {
      console.error(`Error fetching ${params.explore} data:`, err);
    }
  }

  useEffect(() => {
    fetchExploreData();
  }, []);

  return (
    <div>ExplorePage</div>
  )
}

export default ExplorePage