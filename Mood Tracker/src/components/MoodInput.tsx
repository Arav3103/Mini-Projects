import { useEffect, useState, type FC, type MouseEvent } from "react";
import { moodList } from "../shared/shared.constants";
import MoodDisplay from "./MoodDisplay";
import MoodHistory from "./MoodHistory";

export interface MoodType {
  name: string;
  timeStamp: string;
}
const MoodInput: FC = () => {
  const [selectedMoodLst, setSelectedMoodLst] = useState<MoodType[]>(() => {
    const storedMoodList = localStorage.getItem("MoodList");
    return storedMoodList ? JSON.parse(storedMoodList) : [];
  });
  const [isMoodSelected, setIsMoodSelected] = useState<boolean>(false);
  useEffect(() => {
    localStorage.setItem("MoodList", JSON.stringify(selectedMoodLst));
  }, [selectedMoodLst]);

  const handleMoodSelection = (event: MouseEvent<HTMLButtonElement>) => {
    if (!isMoodSelected) {
      setSelectedMoodLst([
        ...selectedMoodLst,
        {
          name: event.currentTarget.id,
          timeStamp: new Date().toISOString(),
        },
      ]);
      setIsMoodSelected(true);
    }
  };
  return (
    <>
      <section className="flex items-center flex-col gap-5">
        <h2>Whats your mood today?</h2>
        <ul className="flex items-center flex-row gap-2">
          {moodList.map((item) => (
            <li key={item.name}>
              <button
                onClick={handleMoodSelection}
                id={item.name}
                className="bg-amber-100 text-black px-4 py-2 rounded-md hover:bg-amber-200 focus:outline-none"
              >
                <span>{item.emoji}</span>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
      <MoodDisplay
        selectedMoodList={selectedMoodLst}
        updateSelectedMoodList={setSelectedMoodLst}
        setIsMoodSelected={setIsMoodSelected}
      />
      <MoodHistory selectedMoodList={selectedMoodLst} />
    </>
  );
};

export default MoodInput;
