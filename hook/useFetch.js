
import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from '@env'

// const rapidAPiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'e7ad192babmsh4c4d1f683f8d9acp18839ajsn39c49d3b6ef5',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
            ...query
        },

    };

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert(`There is an error ${error}`)

        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => { fetchData() }, [])

    //Some time's there will be issue in fetching the data so to resolve that issue we created the reFetch function to fetch the data again

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, error, isLoading, refetch }


}

export default useFetch;
