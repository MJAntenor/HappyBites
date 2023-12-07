import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    
    useEffect(() => {
        fetch(url)
            .then(res => {
            return res.json();
            })
            .then((data) => {
            setData(data);
            setIsPending(false);
            })
            .catch(err => {
            console.log('Error: Failed to fetch');
            setIsPending(false);
            })
        }, []);

    return {data, isPending}
}

export default useFetch;