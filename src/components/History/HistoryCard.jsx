import React from "react";

import { useMovie } from "../../store/MovieStore";

const HistoryCard = ({ info }) => {
  const { currentMovie, setCurrentMovie } = useMovie();
  const handleClick = () => {
    setCurrentMovie(info);
  };

  console.log("from history card", currentMovie);

  return (
    <div
      className={`bg-slate-600 flex h-full w-full cursor-pointer items-center justify-center rounded-xl p-2 text-white ${
        String(info.imdbID) === String(currentMovie?.imdbID)
          ? "bg-purple-600"
          : "bg-purple-200"
      }`}
      onClick={handleClick}
    >
      {info.Title}
    </div>
  );
};

export default HistoryCard;
