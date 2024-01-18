import { useEffect, useRef } from "react";
import CreateUser from "../user/CreateUser"
import Header from "./Header"
import { useDispatch } from "react-redux";
import { resetQuiz } from "../quizSlice";

const Home = () => {
  const dispatch = useDispatch()
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      dispatch(resetQuiz());
    }

  }, [dispatch]);
  return (
    <div className="text-center">
      <Header/>
      <h1 className="mb-8 text-center text-xl font-semibold md:text-3xl px-5 pt-8">PrepsQ is an online quiz platform that tests your technical knowledge by giving questions ranging from HTML, CSS and JavaScript to Data Structure and Algorithms. All questions answered within a time frame.</h1>
      <CreateUser />
    </div>
  )
}

export default Home