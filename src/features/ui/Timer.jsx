import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TimerControl } from "../quizSlice";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const { secondsRemaining, status } = useSelector((store) => store.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSpeech = () => {
    const text = 'Time Up'
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech)
}

  const handleTimerTick = useCallback(() => {
    dispatch(TimerControl());
  }, [dispatch]);

  useEffect(() => {
    let timerId;

    if (status === "ready" && secondsRemaining > 0) {
      timerId = setInterval(handleTimerTick, 1000);
    }

    if(secondsRemaining === 1){
      handleSpeech()
    }
    if(status === 'finished' && secondsRemaining === 0){
      navigate('/stats')
    }

    return () => clearInterval(timerId);
  }, [status, secondsRemaining, handleTimerTick, navigate]);

  const remainingSeconds = Number(secondsRemaining)
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;


  return (
    <div className="bg-stone-500 rounded-md p-2 sm:mt-4 md:mt-4 sm:ml-[180px] md:ml-[180px] ml-[300px] mt-8">
      {minutes < 10 && "0"}
      {minutes}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;


