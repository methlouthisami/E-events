import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { eventReducer } from "./reducers/eventeReducer";

const Reducers = combineReducers({
    eventStore: eventReducer,
});
const store = createStore(Reducers, applyMiddleware(thunk));
export default store;
