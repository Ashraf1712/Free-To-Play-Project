import axios from "axios";
import React, { useState, useEffect } from "react";

function DataFetching() {
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { "sort-by": "alphabetical" },
    headers: {
      "X-RapidAPI-Key": "5a491e0825mshec3426d8e95d6f4p1c1f4fjsneb7434db6f1d",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        const data = response.data;
        setGames(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  function getAutoCompleteResults(query) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          games.filter((game) =>
            game.title.toLowerCase().includes(query.toLowerCase())
          )
        );
      }, Math.random() * 1000);
    });
  }

  useEffect(() => {
    (async () => {
      setSuggestions([]);
      if (query.length > 0) {
        console.log(query);
        const data = await getAutoCompleteResults(query);
        setSuggestions(data);
      }
    })();
  }, [query]);

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <input
        className="mt-24 mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="text-gray-200 flex flex-col gap-2 items-start">
        {query.length > 0
          ? suggestions.map((suggestion) => (
              <div key={suggestion.id}>{suggestion.title}</div>
            ))
          : games.map((game) => <div key={game.id}>{game.title}</div>)}
      </div>
    </div>
  );
}

export default DataFetching;
