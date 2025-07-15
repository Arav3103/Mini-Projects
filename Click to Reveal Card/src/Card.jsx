import React, { useState } from "react";

const Card = () => {
  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    setFlag((prevFlag) => !prevFlag);
  };
  return (
    <>
      <section
        className="max-w-full flex items-center justify-center flex-col"
        onClick={handleClick}
      >
        <h1 className="text-xl my-10">Click to Reveal Card Mini Project</h1>
        {flag ? (
          <div className="max-w-sm rounded shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card is here</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-sm my-5">Click to reveal the card</h3>
          </div>
        )}
      </section>
    </>
  );
};

export default Card;
