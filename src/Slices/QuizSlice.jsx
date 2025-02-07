import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  questions: [
    {
      qn: "What is 5 + 3?",
      options: [7, 8, 9],
      ans: 8,
    },
    {
      qn: "What is the color of the sky?",
      options: ["Red", "Blue", "Green"],
      ans: "Blue",
    },
    {
      qn: "How many legs does a cat have?",
      options: [2, 3, 4],
      ans: 4,
    },
  ],
  currentIndex: 0,
  answers: {},
  score: 0,
};
const QuizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      const { index, answer } = action.payload;
      state.answers[index] = answer;
      if (answer == state.questions[index].ans) {
        state.score += 1;
      }
    },
    nextQuestion: (state) => {
      if (state.currentIndex <= state.questions.length) {
        state.currentIndex += 1;
      }
    },
  },
});
export default QuizSlice.reducer;
export const { addAnswer, nextQuestion } = QuizSlice.actions;
