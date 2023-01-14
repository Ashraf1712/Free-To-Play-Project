import axios from "axios";
import React, { useState, useEffect } from "react";

function DataFetching() {
  const [games, setGames] = useState([]);

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
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const createGamesMapData = () => {
    let gamesData = {};
    games.map((key) => {
      gamesData[key] = this.state.items.filter((currentValue) => {
        if (currentValue.value[0] === key) return currentValue;
      });
    });
  };

  const handleClick = (event) => {
    const brandValues = event.target.value;
    if (event.target.value === "all") {
      return this.getBrands();
    } else {
      console.log(this.state.brandSortData);
      let brandSortDataByCharacter = this.state.brandSortData.filter(
        (currentCharacter) => {
          if (currentCharacter.value[0] === brandValues)
            return currentCharacter;
        }
      );
      return brandSortDataByCharacter;
    }
  };

  return (
    <div>
      <button
        value="all"
        className="BrandPageList_AllButton"
        onClick={handleClick}
      >
        All
      </button>
      {games.map((game) => (
        <button
          value={game.title}
          key={game.id}
          className="BrandPageList_AlphabetButtons"
          onClick={handleClick}
        >
          {game.title}
        </button>
      ))}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
