import React, { useState, useEffect } from "react";
import useFetchData from "./storeData";
import AdComponent from "../components/AdComponent";
import { AiFillWindows } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";

function DisplayGames() {
  const games = useFetchData();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeItem, setActiveItem] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const filteredItems = games.filter(
    (item) => !selectedLetter || item.title.startsWith(selectedLetter)
  );

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
    <div className="w-full h-screen font-gg">
      <div>
        <button
          className={`p-2 mr-2 ${
            selectedLetter === null ? "bg-blue-500 text-white" : "bg-gray-500"
          }`}
          onClick={() => setSelectedLetter(null)}
        >
          All
        </button>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className={`p-2 mr-2 ${
              letter === selectedLetter
                ? "bg-blue-500 text-white"
                : "bg-gray-500"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>
      <input
        className="mt-24 mb-20"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2 ">
        {filteredItems.map((game) => (
          <>
            <a
              className="hover:cursor-pointer hover:text-gray-200 ml-12 bg-gray-800 rounded-lg max-w-xs shadow-lg shadow-green-300"
              href={game.game_url}
              target="_blank"
            >
              <div className="">
                <img
                  src={game.thumbnail}
                  alt="Gambar"
                  className="rounded-t-lg"
                ></img>
                <div className=" justify-between flex">
                  <div className="left-0  w-80">{game.title}</div>
                  <div className=" ">Free</div>
                </div>

                <div
                  key={game}
                  className={`truncate text-ellipsis box-border h-10 w-128`}
                >
                  {game.short_description}
                </div>
                <div className="justify-between flex">
                  <div className="left-0 "></div>
                  <div className=" justify-between flex gap-2 p-1">
                    <div className=" ">{game.genre}</div>
                    {game.platform.split(",").map((platform) => (
                      <>
                        {platform === "PC (Windows)" ? (
                          <AiFillWindows />
                        ) : (
                          <BsGlobe2 />
                        )}
                      </>
                    ))}
                    {/* <div className="border-2">{game.platform}</div> */}
                  </div>
                </div>
              </div>
            </a>
          </>
        ))}
      </div>
      {/* 
      <div className="text-gray-200 flex flex-col gap-2 items-start">
        {query.length > 0
          ? suggestions.map((suggestion) => (
              <div key={suggestion.id}>{suggestion.title}</div>
            ))
          : games.map((game) => <div key={game.id}>{game.title}</div>)}
      </div> */}
    </div>
  );
}

export default DisplayGames;
