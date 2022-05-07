import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// run -  npx create-react-app cra-redux --template redux   - to create react app with redux, where you have  redux-toolkit already set-up for you.
//This configureStore() has redux-devtool and redux-thunk installed by defaul. So we don't have to configure them in here.
