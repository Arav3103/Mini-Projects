import { descendingOrderSort } from "../utilsFunctions";
import type { MoodType } from "./MoodInput";

interface MoodHistoryProps {
  selectedMoodList: MoodType[];
}

const MoodHistory = ({ selectedMoodList }: MoodHistoryProps) => {
  const updatedArray = descendingOrderSort(selectedMoodList);
//   const headers = updatedArray.length ? Object.keys(updatedArray[0]) : null;
  return (
    <>
      <table className="border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Mood</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {updatedArray.map((mood, idx) => (
            <tr key={idx}>
              <td className="border border-gray-300 px-4 py-2">{mood.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(mood.timeStamp).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MoodHistory;
