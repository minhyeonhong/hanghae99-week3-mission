
//action 타입
const ADD_TODO = 'ADD_TODO';

//action 함수
export const addTodo = (payload) => {
    if (payload.todo !== undefined && payload.todo !== "") {
        return {
            type: ADD_TODO,
            id: payload.length,
            content: payload.todo
        };
    }
}

// 초기 상태값
const initTodoList = [{
    id: 0,
    content: ""
}];
// 리듀서
const todoList = (state = initTodoList, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    content: action.content
                }
            ];
        default:
            return state;
    }
};

export default todoList;