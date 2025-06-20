import React, { useState, type ChangeEvent, type SetStateAction } from "react";
import type { Task } from "./TodoDashboard";

interface TodoDisplayProps {
  taskList: Task[];
  setTaskList: React.Dispatch<SetStateAction<Task[]>>;
  filterStatus: "All" | "Completed" | "Not Completed";
  setFilterStatus: React.Dispatch<
    SetStateAction<"All" | "Completed" | "Not Completed">
  >;
}
const TodoDisplay = ({ taskList, setTaskList, filterStatus, setFilterStatus }: TodoDisplayProps) => {
    const filteredTaskList = taskList.filter(item => {
        if(filterStatus === "Completed") return item.isCompleted
        else if (filterStatus === "Not Completed") return !item.isCompleted;
        else return true;
    })
  const handleToggle = (id: number) => {
    setTaskList((prevList) =>
      prevList.map((item) =>
        item.id === id
          ? {
              ...item,
              isCompleted: !item.isCompleted,
              completedDateTime: !item.isCompleted
                ? new Date().toLocaleString()
                : "",
            }
          : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setTaskList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const handleFilter = (e:ChangeEvent<HTMLSelectElement>)=>{
    setFilterStatus(e.target.value as "All" | "Completed" | "Not Completed");
  };

  return (
    <section>
      <label htmlFor="filterTasks">Filter</label>
      <select
        id="filterTasks"
        className="border px-3 py-1 rounded-md shadow-sm"
        value={filterStatus}
        onChange={handleFilter}
      >
        <option value="All">All</option>
        <option value="Not Completed">Not Completed</option>
        <option value="Completed">Completed</option>
      </select>

      {filteredTaskList.length > 0 && (
        <table className="table-auto border-collapse w-full text-left bg-blue-100">
          <thead>
            <tr>
              <th className="w-16 px-4 py-2">ID</th>
              <th className="w-64 px-4 py-2">Task</th>
              <th className="w-32 px-4 py-2">Status</th>
              <th className="w-48 px-4 py-2">Completed time</th>
              <th className="w-32 px-4 py-2">Priority</th>
              <th className="w-24 px-4 py-2">Mark as Complete</th>
              <th className="w-24 px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {filteredTaskList.map((rowItem) => (
              <tr key={rowItem.id} className="border-t">
                <td className="px-4 py-4">{rowItem.id}</td>
                <td
                  className={
                    rowItem.isCompleted
                      ? "line-through text-gray-500 italic"
                      : "px-4 py-4"
                  }
                >
                  {rowItem.name}
                </td>
                <td className="px-4 py-4">
                  {rowItem.isCompleted ? "Completed" : "Not Completed"}
                </td>
                <td className="px-4 py-4">{rowItem.completedDateTime}</td>
                <td className="px-4 py-4">{rowItem.priority}</td>
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    checked={rowItem.isCompleted}
                    name={rowItem.name}
                    id={rowItem.name}
                    onChange={() => handleToggle(rowItem.id)}
                  />
                </td>
                <td>
                  <button
                    className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
                    onClick={() => handleDelete(rowItem.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {filteredTaskList.length <= 0 && "No Tasks Added"}
    </section>
  );
};

export default TodoDisplay;
