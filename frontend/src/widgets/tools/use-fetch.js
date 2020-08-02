import { useState } from 'react';

const useFetch = (fetch) => {
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState(false);
  const [response, setResponse] = useState(false);

  const call = async (...args) => {
    setLoading(true);
    return fetch(...args)
      .then((res) => {
        setData(res.data);
        setResponse(res);
        setLoad('success');
        setLoading(false);
        setLoaded(true);
        return res;
      })
      .catch((error) => {
        console.log(' useFetch => error.request -> ', error.response);
        setData(error.response?.data);
        setResponse(error.response);
        setLoad('failure');
        setLoading(false);
        setLoaded(false);
        return error;
      });
  };

  return ({
    call,
    data,
    load,
    loaded,
    loading,
    response
  });
};

export default useFetch;
