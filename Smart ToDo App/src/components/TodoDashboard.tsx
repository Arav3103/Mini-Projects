import { useState } from "react";
import "../styles/global.css";
import ToDoInput from "./TodoInput";
import TodoDisplay from "./TodoDisplay";

export interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
  completedDateTime: string;
  priority: PriorityLevel;
}
export type PriorityLevel = "Low" | "Medium" | "High";

const TodoDashboard = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [filterStatus, setFilterStatus] = useState<
    "All" | "Completed" | "Not Completed"
  >("All");

  return (
    <section className="w-screen h-screen text-center p-10">
      <h1 className="text-3xl">Todo Dashboard</h1>
      <ToDoInput setTaskList={setTaskList} />
      <TodoDisplay
        taskList={taskList}
        setTaskList={setTaskList}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
    </section>
  );
};

export default TodoDashboard;
