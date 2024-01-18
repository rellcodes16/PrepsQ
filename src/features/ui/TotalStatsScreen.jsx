import { useNavigate } from "react-router-dom"
import Button from "./Button"
import Header from "./Header"
import { useDispatch, useSelector } from "react-redux"
import { resetQuiz } from "../quizSlice"

const TotalStatsScreen = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { questions, pointsEarned, totalPoints } = useSelector((store) => store.quiz);

    const sectionPoints = questions.reduce((acc, question, index) => {
        const section = question.section;
        const points = pointsEarned[index];
        acc[section] = (acc[section] || 0) + points;
    
        return acc;
      }, {});


    const handleBackToHome = () => {
        navigate('/')
        dispatch(resetQuiz())
    }
  return (
    <div>
        <Header />

        <div className="px-8 py-8">
            {Object.entries(sectionPoints).map(([section, points]) => (
                <div className="flex justify-between" key={section}>
                    <h2>{section}</h2>
                    <p>{points}</p>
                </div>
            ))}
            <div className="flex justify-between pt-5">
                <h2 className="font-bold">TOTAL</h2>
                <p>{totalPoints}</p>
            </div>
        </div>
        <div className="flex justify-center pt-2">
            <Button onClick={handleBackToHome}>Take Test Again</Button>
        </div>
    </div>
  )
}

export default TotalStatsScreen

