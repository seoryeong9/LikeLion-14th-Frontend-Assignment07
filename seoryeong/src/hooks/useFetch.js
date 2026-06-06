import { useState, useEffect } from 'react';
import instance from '../api/axiosInstance';

export const useFetch = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await instance.get(endpoint);
        setData(response.data);
      } catch (e) {
        setError(true);
        setErrorMessage(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { loading, data, error, errorMessage };
};