import type { ChangeEvent, SetStateAction } from "react";
import { radioBtnList } from "../shared.constants";
import type { PriorityLevel } from "../components/ToDoInput";

interface RadioBtnGroupProps {
  groupName: string;
  selectedValue: string;
  selectorFn: React.Dispatch<SetStateAction<PriorityLevel>>;
}
const RadioBtnGroup = ({
  groupName,
  selectorFn,
  selectedValue,
}: RadioBtnGroupProps) => {
  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    selectorFn(e.currentTarget.value as PriorityLevel);
  };
  return (
    <>
      <div className="max-w-md flex flex-row gap-x-5 items-center mx-5">
        {radioBtnList.map((item) => (
          <label key={item}>
            <input
              className="mx-1"
              type="radio"
              name={groupName}
              id={item}
              value={item}
              checked={selectedValue === item}
              onChange={handleSelect}
              required
            />
            {item}
          </label>
        ))}
      </div>
    </>
  );
};

export default RadioBtnGroup;
