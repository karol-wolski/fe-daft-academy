import { useCallback, useEffect, useState } from "react";

function useFetch(url: string) {
  const [data, setData] = useState<any>();
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

  const refetch = () => getData();

  return { data, loading, error, refetch };
}

export default useFetch;
