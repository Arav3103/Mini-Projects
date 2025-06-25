import { useEffect, useState } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Issue");
      const jsonData = await res.json();
      console.log(jsonData);
      setData(jsonData);
    };
    getData();
  }, [url]);

  return data;
}
