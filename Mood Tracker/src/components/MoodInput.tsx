import { moodList } from "../shared/shared.constants";

const MoodInput = () => {
  return (
    <>
      <section className="flex items-center flex-col gap-5">
        <h2>Whats your mood today?</h2>
        <ul className="flex items-center flex-row gap-2">
          {moodList.map((item) => (
            <>
              <li key={item.name}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
                  <span>{item.emoji}</span>
                  {item.name}
                </button>
              </li>
            </>
          ))}
        </ul>
      </section>
    </>
  );
};

export default MoodInput;
