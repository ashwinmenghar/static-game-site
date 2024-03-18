import axios from "axios";

const key = "18d8dc115d954615a6fe8522598e8a97";

const apiInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const getGenreList = apiInstance.get("/genres?key=" + key);
const getAllGames = apiInstance.get("/games?key=" + key);
const getGameListByGenreId = (id) =>
  apiInstance.get("/games?key=" + key + "&genres=" + id);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
