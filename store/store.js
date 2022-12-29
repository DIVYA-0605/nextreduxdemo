import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import users from './usersSlice';
import counter from './counterSlice'
import Cookies from "universal-cookie";
const cookies = new Cookies();


const combinedReducer = combineReducers({
  users,
  counter
});

const masterReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
           counter: {
                count: state.counter.count + action.payload.counter.count,
            },
            users: {
                users: [...action.payload.users.users, ...state.users.users]
            }
          
        }
     console.log('fromstore ',nextState);
        return nextState;
    } else {
      // console.log('fromstore ',state);
      const newState  = combinedReducer(state,action)
      console.log('fromstore ',state);
      return newState;

   
  }
}

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
