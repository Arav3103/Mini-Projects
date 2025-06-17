import React, { type SetStateAction } from "react";
import type { MoodType } from "./MoodInput";

interface MoodDisplayProps {
  selectedMoodList: MoodType[];
  updateSelectedMoodList: React.Dispatch<SetStateAction<MoodType[]>>;
  setIsMoodSelected: React.Dispatch<SetStateAction<boolean>>;
}

const MoodDisplay = ({
  selectedMoodList,
  updateSelectedMoodList,
  setIsMoodSelected,
}: MoodDisplayProps) => {
  const currDate = new Date().toISOString().split("T")[0];
  const currMood = selectedMoodList.filter(
    (item) => item.timeStamp === currDate
  );

  const handleReset = () => {
    selectedMoodList = selectedMoodList.filter(
      (item) => item.timeStamp != currDate
    );
    updateSelectedMoodList(selectedMoodList);
    setIsMoodSelected(false);
  };

  return (
    <section>
      {currMood.length > 0 && (
        <div className="flex items-center flex-col">
          <div>
            {`Current Mood : ${
              currMood[0]?.name === undefined
                ? "No mood selected today"
                : currMood[0]?.name
            }`}
          </div>
          <button
            className="bg-amber-100 text-black px-4 py-2 rounded-md hover:bg-amber-200 focus:outline-none"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      )}
    </section>
  );
};
export default MoodDisplay;
