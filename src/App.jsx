import React from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import MovieThumbnail from "components/Movies/MovieThumbnail";

import "./App.css";
import SearchHistory from "./components/History/SearchHistory";
import MovieSearch from "./components/MovieSearch";
import { MovieProvider } from "./store/MovieStore";
import { queryClient } from "./utils/queryClient";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MovieProvider>
      <div className="flex h-screen w-[100vw] overflow-hidden">
        <div className="flex h-screen w-2/3 flex-col items-center justify-center p-10">
          <MovieSearch />
        </div>
        <div className="h-screen w-1/3 flex-col border-l-4">
          <div className="flex h-[60%] w-full items-center justify-center border-b-4">
            {/* <MoviePreviewCard /> */}
            <MovieThumbnail />
          </div>
          <div className="h-[40%] w-full flex-col gap-3">
            <SearchHistory />
          </div>
        </div>
      </div>
    </MovieProvider>
  </QueryClientProvider>
);

export default App;
