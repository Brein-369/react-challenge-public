import {useState, useEffect} from 'react'

function useFetch(url) {
    
    const [data , setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetchAll()
    }, [])

    function fetchAll(){
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            setData(res)
        })
        .catch(err=>{
            console.log(err);
        })
        .finally(()=>{
            console.log(data, 'data di use fetch');
            setLoading(false)
        })
    }


    return {
        data,
        loading
    }
}

export default useFetch