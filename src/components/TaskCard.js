import React from "react";
import { useState } from "react";

const TaskCard = (props) => {
  const { todo , setAssignedTask, assignedTask } = props;

  const [showTask, setShowTask] = useState(false);

  const [line, setLine] = useState(true);

  const handleDeleteTask = () => {
    setShowTask(!showTask);
    const index = assignedTask.indexOf(todo);
    if (index > -1){
      assignedTask.splice(index, 1);
      setAssignedTask([...assignedTask]);
    }
  };

  const handleStrikeThrough = () => {
    
    setLine(!line)

  


  };

  if (showTask === false) {
    return (
      <div className="flex justify-center">
        <div className="flex justify-between bg-slate-300 shadow-md w-[50%] m-1 opacity-[0.7]">
         {line ? <h1 className="m-4 py-1">{todo}</h1> : <h1 className="m-4 py-1 line-through">{todo}</h1> }  
          <div className="m-1 bg-opacity-75">
            <button className="m-4 {line}"  onClick={handleStrikeThrough}>
              ✅
            </button>
            <button
              onClick={handleDeleteTask}
              className="hover:bg-pink-200  bg-opacity-100"
            >
              ✘
            </button>
          </div>
        </div>
      </div>
    );
};
}

export default TaskCard;
