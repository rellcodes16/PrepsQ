import { useSelector } from "react-redux"

const Question = () => {
  const { questions, index } = useSelector(store=>store.quiz)
  const question = questions[index]

  console.log(question)
  return (
    <div className="my-10 text-center text-xl">
        <h3>{question.question}</h3>
    </div>
  )
}

export default Question
