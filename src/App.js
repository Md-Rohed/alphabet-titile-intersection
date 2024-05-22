import { useState } from "react";

const AlphabetTiles = () => {
  const [outputString, setOutputString] = useState("");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const splitLetterArr = letters.split("");

  const handleTileClick = (letter) => {
    let newOutputString = outputString + letter;

    const regex = /(.)\1{2,}/g;
    newOutputString = newOutputString.replace(regex, (match) =>
      "_".repeat(Math.ceil(match.length / 3))
    );

    setOutputString(newOutputString);
  };

  return (
    <div>
      <h1 className="text-center mt-[5rem] text-[2.5rem] font-bold text-blue-500">
        Alphabet Tile Interaction
      </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4 px-[5rem] ">
        {splitLetterArr.map((letter) => (
          <button
            role="button"
            key={letter}
            className="tile bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
            onClick={() => handleTileClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 flex items-center justify-center ">
        {outputString ? (
          <div className="font-bold text-[2rem]">{outputString}</div>
        ) : (
          <p className="font-bold text-[2rem]">Click alphabet to find result</p>
        )}
      </div>
    </div>
  );
};

export default AlphabetTiles;
