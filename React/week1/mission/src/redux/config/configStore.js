import { createStore } from "redux";
import { combineReducers } from "redux";

// 리듀서
import todoList from "../modules/todoList";

const rootReducer = combineReducers({
    todoList: todoList,
});

//스토어
const store = createStore(rootReducer);

//스토어 익스포트
export default store;