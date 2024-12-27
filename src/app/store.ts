import { combineReducers, legacy_createStore } from "redux";
import { CountReducer } from "../model/сount-reducer";

const rootReducer = combineReducers({
  count: CountReducer
})

export const store = legacy_createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

//@ts-ignore
window.store = store