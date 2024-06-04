import React from "react";

const Task = ({ title, description, deleteHandler, index }) => {
  return (
    <div className="task-box">
      <div className="task">
        <h3>{title} </h3>
        <p>{description} </p>
      </div>
      <div onClick={() => deleteHandler(index)} className="btn">
        -
      </div>
    </div>
  );
};

export default Task;
