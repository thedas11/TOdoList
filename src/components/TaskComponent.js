import React, { useState } from "react";
import TaskHeader from "./TaskHeader";
import { useState } from "react";
import TaskCard from "./TaskCard";
const TaskComponent = () => {
  const [text, setText] = useState("");

  const [assignedTask, setAssignedTask] = useState([]);

  const handleTodo = () => {
    if (text) {
      return setAssignedTask((assignedTask) => [...assignedTask, text]);
    }

    alert("add your Todo");
  }

  const handleDeleteAll=()=>{

   setAssignedTask([])

  }
  return (
    <div className="bg-gradient-to-r from-indigo-400 via-yellow-100 to-pink-100 w-1/2 rounded-md  ">
      <div className="text-center">
        <TaskHeader />

        
      </div>
      <div className="p-5 text-center">
        <input
          type="text"
          value={text}
          placeholder="Type you Todo"
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="w-[80%] rounded-md p-2 h-16"
        />
        <button className="w-[20px]" onClick={handleTodo}>
          ➕
        </button>
      </div>

      <div className="flex justify-center">
          <button className="mx-2 hover:bg-green-200 font-bold text-lg" onClick={handleDeleteAll}>Delete all</button>
        </div>

      {assignedTask && (
        <div>
          {assignedTask?.map((task) => {
            return (
              <div key={task}>
                <TaskCard todo={task} />
              </div>
            );
          })}
                  <div className="mb-2 mx-1">Total task: {assignedTask.length}</div>

        </div>
      )}
      
    </div>
  );
};

export default TaskComponent;
