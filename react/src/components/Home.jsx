import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const initialtask = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  const submitHandler = (e) => {
    setTask([...task, { title, des }]);

    setTitle("");
    setDes("");
  };
  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const changeDesHandler = (e) => {
    setDes(e.target.value);
  };

  const deleteHandler = (index) => {
    let filteredArray = task.filter((value, i) => i !== index);
    setTask(filteredArray);
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div className="container">
      <h2>Daily Goals</h2>
      <div className="inputEle">
        <input
          type="text"
          placeholder="input your Task"
          value={title}
          onChange={changeTitleHandler}
        />
        <input
          type="text"
          placeholder="input task description"
          value={des}
          onChange={changeDesHandler}
        />
        <button onClick={submitHandler} className="submit-btn">
          submit
        </button>
      </div>
      {task.map((value, index) => (
        <Task
          key={index}
          title={value.title}
          description={value.des}
          deleteHandler={deleteHandler}
          index={index}
        />
      ))}
    </div>
  );
};

export default Home;
