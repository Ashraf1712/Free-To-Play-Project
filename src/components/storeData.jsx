import axios from "axios";
import React, { useState, useEffect } from "react";
// Create a context for the data
export const DataContext = React.createContext();

const options = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  params: { "sort-by": "alphabetical" },
  headers: {
    "X-RapidAPI-Key": "5a491e0825mshec3426d8e95d6f4p1c1f4fjsneb7434db6f1d",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

const useFetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        const data = response.data;
        setData(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return data;
};

export default useFetchData;
