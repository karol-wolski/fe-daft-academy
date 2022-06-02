import { useCallback, useEffect, useState } from "react";

interface Iapi {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}

function useFetch(url: string) {
  const [data, setData] = useState<Iapi>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Something went wrong :(. Status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading, error };
}

export default useFetch;
