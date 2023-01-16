import { useEffect, useState } from "react";
import "./App.css";
import DisplayGames from "./components/displayGames";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <AiOutlineLoading3Quarters
            className="animate-spin text-sky-500"
            size={48}
          />
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="text-3xl underline font-gg">FREE TO PLAY GAME!</div>
          <DisplayGames />
        </>
      )}
    </>
  );
}

export default App;
