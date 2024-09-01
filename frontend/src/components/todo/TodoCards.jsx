import React from "react";
import "./Todo.css"
const TodoCards = () => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">{body.split("", 77)}...</p>
      </div>
        
    </div>
    
  );
};

export default TodoCards;
