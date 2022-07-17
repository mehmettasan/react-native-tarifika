import React,{useEffect,useState} from 'react';
import axios from 'axios';

const useFetch=(url)=>{
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async ()=>{
        try {
            const result = await axios.get(url)
            setData(result.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
        }

        return {data,loading,error};

}

export default useFetch;

