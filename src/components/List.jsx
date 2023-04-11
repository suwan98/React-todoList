import React from "react";

export default function List({ todoData, setTodoData }) {
  const handleCompltedChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.complted = !data.complted;
      }
      return data;
    });
    setTodoData(newTodoData);
  };
  const getStyle = (complted) => {
    return {
      padding: "10px",
      boderBottom: "1px #ccc dotted",
      textDecoration: complted ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div style={getStyle(data.complted)} key={data.id}>
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={() => handleCompltedChange(data.id)}
          />
          {data.title}
          <button className="btn" onClick={() => handleClick(data.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}
