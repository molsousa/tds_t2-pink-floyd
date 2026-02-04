import { useState, useEffect } from 'react';

/**
 Custom Hook para realizar requisições HTTP.
 requisito de hook customizado e useEffect.
 */
export const useFetch = (url) => {
    const [data, setData] = useState(null); // State tipo Objeto/Array 
    const [loading, setLoading] = useState(false); // State tipo Comum (boolean)
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Fetch API 
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};