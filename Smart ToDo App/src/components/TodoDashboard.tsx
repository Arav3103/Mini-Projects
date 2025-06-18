import "../styles/global.css";
import ToDoInput from "./ToDoInput";

const TodoDashboard = () => {
  return (
    <section className="w-screen h-screen text-center p-10">
      <h1 className="text-3xl">Todo Dashboard</h1>
      <ToDoInput />
    </section>
  );
};

export default TodoDashboard;
