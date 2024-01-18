import { createSlice } from "@reduxjs/toolkit";

const SECS_PER_QUESTION = 30;

const initialState = {
    questions: [],
    index: 0,
    username: "",
    status: "loading",
    answer: null,
    points: 0,
    pointsEarned: Array(25).fill(0),
    totalPoints: 0,
    secondsRemaining: null,
    questionsAnswered: 0,
    sectionQuestionsAnswered: {
        HTML: 0,
        CSS: 0,
        JS: 0,
        REACT: 0,
        DSA: 0,
  },
}

console.log(initialState.questions)

const quizSlice = createSlice({
    name: 'quiz',
    initialState: initialState,
    reducers: {
        createUser(state, action){
            state.username = action.payload;
            // state.status = 'start';
        },
        setQuestions(state, action) {
            state.questions = action.payload;
            state.status = 'ready';
            state.secondsRemaining = state.questions.length * SECS_PER_QUESTION
        },
        nextQuestion(state){
            state.index += 1;
            state.answer = null;
        },
        previousQuestion(state){
            state.index -= 1;
            state.answer = null;
        },
        TimerControl(state){
            state.secondsRemaining -= 1;
            if (state.secondsRemaining === 0) {
                state.status = 'finished';
            }
        },
        PointsTracking(state, action){
            const question = state.questions[state.index]
            const selectedOptionIndex = action.payload
            const isCorrect = selectedOptionIndex === question.correctOption;
            const pointsEarned = isCorrect ? question.points : 0;
            state.answer = action.payload;
            state.pointsEarned[state.index] = pointsEarned;
            state.totalPoints = state.pointsEarned.reduce((acc, points) => acc + points, 0);

            if (!state.questions[state.index].answered) {
                state.questionsAnswered += 1;
                state.questions[state.index].answered = true;
            
                state.sectionQuestionsAnswered[question.section] += 1;
            }

            return state;
        },
        resetQuiz(){
            return initialState;
        }
    }
})

export const { createUser, setQuestions, nextQuestion, previousQuestion, TimerControl, PointsTracking, resetQuiz } = quizSlice.actions



export default quizSlice.reducer;







