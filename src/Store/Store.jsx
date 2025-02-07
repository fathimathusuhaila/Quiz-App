import { configureStore } from "@reduxjs/toolkit";
import QuizReducer from '../Slices/QuizSlice'

const store=configureStore({
    reducer:{
        quiz:QuizReducer
    }
})
export default store;