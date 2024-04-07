import { useContext, useState } from "react";
import "./history.css";
import { InputValueContext } from "../../contexts/inputValueContext";

export function History() {
  const [searchTerm, setSearchTerm] = useState("");
  const { values } = useContext(InputValueContext);

  const uniqValues: string[] = [];

  for (const value of values) {
    if (!uniqValues.includes(value)) {
      uniqValues.push(value);
    }
  }

  //Filter the array of words so that the final result remains
  for (let i = 1; i < uniqValues.length; i++) {
    const previousValue = uniqValues[i - 1];
    const currentValue = uniqValues[i];

    const prevValueLength = previousValue.length;

    // Divide the current value into parts equal to the length of the previous value
    const dividedParts = [];
    for (let j = 0; j < currentValue.length; j += prevValueLength) {
      dividedParts.push(currentValue.slice(j, j + prevValueLength));
    }

    // Compare the first element of the divided parts with the previous value
    if (dividedParts[0] === previousValue) {
      uniqValues.splice(i - 1, 1);
      i--;
    }
  }
  return (
    <>
      <div className="historyContentDiv">
        {uniqValues
          .map((value, index) => (
            <button
              className="valueButton"
              key={index}
              onClick={() => {
                setSearchTerm(value);
              }}
            >
              {value}
            </button>
          ))
          .reverse()}
      </div>
      searching
    </>
  );
}
