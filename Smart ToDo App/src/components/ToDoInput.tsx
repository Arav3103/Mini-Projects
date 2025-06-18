import { useState, type ChangeEvent } from "react";
import RadioBtnGroup from "../shared/RadioBtnGroup";

interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
  completedDateTime: string;
  priority: PriorityLevel;
}
export type PriorityLevel = "Low" | "Medium" | "High";

const ToDoInput = () => {
  const [task, setTask] = useState<string>("");
  const [, setTaskList] = useState<Task[]>([]);
  const [priority, setPriority] = useState<PriorityLevel>("Low");
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.currentTarget.value);
    setTask(e.currentTarget.value);
  };

  const handleAddTask = (): void => {
    if (task.trim() !== "") {
      setTaskList((currentTaskList) => [
        ...currentTaskList,
        {
          id: currentTaskList.length + 1,
          name: task,
          isCompleted: false,
          completedDateTime: "",
          priority: priority,
        },
      ]);
    }
    setTask('');
  };

  return (
    <section className="flex flex-col gap-y-5 items-center my-5">
      <input
        type="text"
        placeholder="Enter the task"
        value={task}
        maxLength={50}
        onChange={handleChange}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
      <RadioBtnGroup
        groupName="priority"
        selectedValue={priority}
        selectorFn={setPriority}
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
      >
        Add
      </button>
    </section>
  );
};

export default ToDoInput;
