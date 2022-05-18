import TravelComponent from "./TravelComponent";
import { useState, useEffect } from "react";

const Fetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
    return data;
  }, []);
};
export default Fetch;
