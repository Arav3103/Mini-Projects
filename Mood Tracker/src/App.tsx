import "./App.css";
import "./styles/global.css";
import MoodInput from "./components/MoodInput";

function App() {
  return (
    <>
      <section className="flex items-center flex-col gap-5 mt-2">
        <h1 className="text-2xl">Mood Tracker</h1>
        <MoodInput />
      </section>
    </>
  );
}

export default App;
