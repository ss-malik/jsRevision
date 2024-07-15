import React from "react";

const Data = () => {
  let dataObj = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/157336?api_key=5cb3fa1ae2426eeec692bfe6c9481b26"
    );
    let obj = await data.json();
    console.log("fetch- ", obj);
  };
  dataObj();

  return <div>Data</div>;
};

export default Data;
