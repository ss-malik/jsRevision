import jsonData from "../datas.json";

import React, { useState } from "react";

const Data = () => {
  const [ndata, setNData] = useState(jsonData);

  const removeHandler = (identifier) => {
    const filteredArray = ndata.filter((ele) => {
      return ele.id != identifier;
    });
    setNData(filteredArray);
  };

  const removeUl = () => {
    setNData([]);
  };

  return (
    <div>
      <ul className="box">
        {ndata.map((ele) => (
          <li key={ele.id}>
            {ele.name}
            <button onClick={() => removeHandler(ele.id)}>del</button>
          </li>
        ))}
      </ul>
      <button onClick={removeUl}>Remove List Items</button>
    </div>
  );
};

export default Data;
