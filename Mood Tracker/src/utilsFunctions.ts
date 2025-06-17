import type { MoodType } from "./components/MoodInput";

export const ascendingOrderSort = (inputArr: MoodType[]) => {
  return [...inputArr].sort(
    (firstItem, secondItem) =>
      new Date(firstItem?.timeStamp).getTime() -
      new Date(secondItem?.timeStamp).getTime()
  );
};

export const descendingOrderSort = (inputArr: MoodType[]) => {
  return [...inputArr].sort(
    (firstItem, secondItem) =>
      new Date(secondItem?.timeStamp).getTime() -
      new Date(firstItem?.timeStamp).getTime()
  );
};
