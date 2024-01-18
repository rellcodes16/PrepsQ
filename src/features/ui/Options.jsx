import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PointsTracking } from "../quizSlice"

const Options = () => {
  const { questions, index } = useSelector(store=>store.quiz)
  const question = questions[index]

  const [selectedOptions, setSelectedOptions] = useState(new Array(question.options.length).fill(null));

  const dispatch = useDispatch()

  const handleTick = (optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = optionIndex;
    setSelectedOptions(newSelectedOptions);
    dispatch(PointsTracking(optionIndex))
  };

  const parsedOptions = JSON.parse(question.options);
  return (
    <div className="grid ">
        {parsedOptions.map((option, optionIndex) =>
            <button key={option} className="flex" onClick={() => handleTick(optionIndex)}>
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" className="mt-[-2.2rem] mr-[-1.3rem]"> 
                <circle cx="50" cy="50" r="10" fill={selectedOptions[index] === optionIndex ? "black" : "none"} stroke="black"/>
              </svg>
              {option}
            </button>
        )}
    </div>
  )
}

export default Options





