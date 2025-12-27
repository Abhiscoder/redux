import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer
  },

})



// poli:22940968
//   9654702370
//   compFile:PNB0412