import axios from 'axios'
import  { useEffect, useState } from 'react'

const useFetch = (url) => {
  const prefix = 'http://127.0.0.1:8000/api';
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    useEffect(()=>{ 
      setTimeout(()=>{
        axios.get(prefix + url)
        .then(function (response) {
          setData(response.data)
          setLoading(false)
        })
        .catch(function (error) {
          setLoading(false)
          setError(false)
        }); 
      },400)
    },[url])
    return {data , loading , error}
}
export default useFetch