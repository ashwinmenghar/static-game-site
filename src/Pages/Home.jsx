import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../api/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenresId from "../Components/GamesByGenresId";
import Loading from "../assets/Loading";

function Home() {
  const [allgameList, setAllGameList] = useState([]);
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllGames();
    getGameListByGenreId(4);
  }, []);
  const getAllGames = () => {
    GlobalApi.getAllGames.then((res) => {});
  };

  const getGameListByGenreId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((res) => {
      setGameListByGenre(res?.data?.results);
      setAllGameList(res?.data?.results);
    });
    setLoading(false);
  };
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="h-full hidden md:block p-3">
        <GenreList
          genreId={(setGenreId) => {
            setLoading(true);
            getGameListByGenreId(setGenreId);
            setGameListByGenre([]);
          }}
        />
      </div>

      {loading == true ? (
        <div className="col-span-3 flex justify-center items-center h-screen">
          <Loading />
        </div>
      ) : (
        <div className="col-span-4 md:col-span-3">
          {allgameList?.length > 0 && gameListByGenre.length > 0 ? (
            <div>
              <Banner gameBanner={allgameList[0]} />
              <TrendingGames gameList={allgameList} />
              <GamesByGenresId gameList={gameListByGenre} />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Home;
