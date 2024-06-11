import jsonData from "../datas.json";

import React, { useState } from "react";

const Data = () => {
  const [ndata, setNData] = useState(jsonData);

  const removeHandler = (identifier) => {
    console.log(identifier);
    setNData(
      ndata.filter((ele) => {
        ele.id !== identifier;
      })
    );
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
