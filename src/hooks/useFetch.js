import { useState, useEffect } from 'react';
import api from '../api/axiosInstance';

export default function useFetch(url, params = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await api.get(url, { params });
                setData(response.data);
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, JSON.stringify(params)]);

    return { data, loading, error, setData };
}