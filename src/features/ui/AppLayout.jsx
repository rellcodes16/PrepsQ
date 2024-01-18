import { useDispatch, useSelector } from "react-redux"
import Button from "./Button"
import Header from "./Header"
import Loader from "./Loader"
import Options from "./Options"
import Question from "./Question"
import Sidebar from "./Sidebar"
import SmallCard from "./SmallCard"
import Timer from "./Timer"
import { useEffect, useState } from "react"
import { nextQuestion, previousQuestion, setQuestions } from "../quizSlice"
import AlertScreen from "./AlertScreen"
import { useNavigate } from "react-router-dom"
import { getQuestions } from "../../services/apiQuestions"

const AppLayout = () => {
  const dispatch = useDispatch();
  const { status, index, questions } = useSelector((state) => state.quiz);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const navigate = useNavigate()

  const handleYes = () => {
    console.log('Yes clicked');
    setIsPopupVisible(false);
    navigate('/stats')
  };

  const handleNo = () => {
    console.log('No clicked');
    setIsPopupVisible(false);
  };

  const handleShowPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };



  useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getQuestions();
          dispatch(setQuestions(data));
          // console.log(data)
        } catch (error) {
          console.error('Error fetching questions:', error);
        }
    };
    if (status === 'loading') {
      fetchData();
    }
  }, [status, dispatch])


  const question = questions[index]

  // console.error(question)

  if (status === 'loading'  || !questions[index]) {
    return <Loader />;
  }

  const section = question.section
  // console.log(section)

  const handleNext = () => {
    dispatch(nextQuestion())
  }

  const handlePrevious = () => {
    dispatch(previousQuestion())
  }

  return (
    <div className={`h-screen relative ${isPopupVisible === true && 'before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-slate-500 before:opacity-50 overflow-hidden'}`}>
      <Header/>
      <div className={`grid justify-center ${isPopupVisible === true && 'blur-md'}`}>   
      <div  className="flex">
      <div>
        <div className="flex flex-wrap">
          <SmallCard value='HTML' activeSection={section}>HTML</SmallCard>
          <SmallCard value='CSS' activeSection={section}>CSS</SmallCard>
          <SmallCard value='JS' activeSection={section}>JS</SmallCard>
          <SmallCard value='REACT' activeSection={section}>REACT</SmallCard>
          <SmallCard value='DSA' activeSection={section}>DSA</SmallCard>
          <Timer />
        </div>

        <Question/>
        <Options />

        <div className="flex justify-between relative">
          {index > 0 && <Button type='primary' onClick={handlePrevious}>&lt;&lt; Previous</Button>}
          {index < 24 ? (<Button type='secondary' onClick={handleNext}>Next &gt;&gt;</Button>) : <Button type='secondary' onClick={handleShowPopup}>Submit</Button>}
        </div>
      </div>

      <Sidebar />
      </div>

    </div>

    <div>
      {isPopupVisible && (
        <AlertScreen
          message="Are you sure you want to submit?"
          onYes={handleYes}
          onNo={handleNo}
          onClose={handleClosePopup}
        />
      )}
    </div>

    </div>
    
  )
}

export default AppLayout


