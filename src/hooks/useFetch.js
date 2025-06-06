import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(endpoint);
                setData(response.data);
            }
            catch(err) {
                console.error('Error fetching data:', err);
            }
        }
        fetchData();
    }, [endpoint]);

    return { data };
}

export default useFetch;