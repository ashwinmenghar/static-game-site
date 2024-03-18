import React, { useEffect, useState } from "react";
import GlobalApi from "../api/GlobalApi";

function GenreList({ genreId }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((res) => {
      setGenreList(res?.data?.results);
    });
  };
  return (
    <>
      <div className="text-[30px] font-bold dark:text-white">Genre</div>
      {genreList &&
        genreList.map((item, index) => (
          <div
            onClick={() => {
              setActiveIndex(index);
              genreId(item.id);
            }}
            className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group hover:dark:bg-gray-600 rounded-lg ${
              activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null
            }`}
            key={index}
          >
            <img
              src={item?.image_background}
              alt=""
              className={`w-[40px] h-[40px] object-cover rounded-lg hover:dark:bg-gray-600 group-hover:scale-105 translate-all ease-out duration-300 ${
                activeIndex == index ? "scale-105" : null
              }`}
            />
            <h3
              className={`dark:text-white text-[18px] group-hover:font-bold translate-all ease-out duration-300 ${
                activeIndex == index ? "font-bold" : null
              }`}
            >
              {item.name}
            </h3>
          </div>
        ))}
    </>
  );
}

export default GenreList;
