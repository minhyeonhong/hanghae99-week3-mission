
//action 타입
const ADD_TODO = 'ADD_TODO';
const CHANGE_DONE = 'CHANGE_DONE';
const DELETE_TODO = 'DELETE_TODO';
const GET_DETAIL = 'GET_DETAIL';

//action 함수
export const addTodo = (obj) => {
    return {
        type: ADD_TODO,
        id: obj.id,
        title: obj.title,
        content: obj.content,
        done: false
    };
}

export const changeDone = (id) => {
    return {
        type: CHANGE_DONE,
        id: id
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id: id
    }
}

export const getDetail = (id) => {
    return {
        type: GET_DETAIL,
        id: id
    }
}

// 초기 상태값
const initTodoList = {
    todoList: [
        {
            id: 0,
            title: `리액트 공부하기`,
            content: `리액트 기초를 공부해봅시다.`,
            done: false,
        },
        {
            id: 1,
            title: `리액트 공부하기2`,
            content: `리액트 기초를 공부해봅시다2.`,
            done: true,
        }
    ],
    todo: {
        id: 1,
        title: `리액트 공부하기2`,
        content: `리액트 기초를 공부해봅시다2.`,
        done: true,
    }
};
// 리듀서
const todoList = (state = initTodoList, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: state.todoList.length === 0 ? 0 : action.id,
                        title: action.title,
                        content: action.content,
                        done: action.done
                    }
                ]
            };
        case CHANGE_DONE:
            state.todoList.map((val, i, arr) => {
                if (val.id === action.id) {
                    arr[i].done ? arr[i].done = false : arr[i].done = true
                }
            })
            return { ...state, todoList: [...state.todoList] };
        case DELETE_TODO:
            state.todoList.map((val, i, arr) => {
                if (val.id === action.id) {
                    arr.splice(i, 1);
                }
            })
            return { ...state, todoList: [...state.todoList] };
        case GET_DETAIL:
            const [selTodo] = state.todoList.filter((val) => {
                return (val.id === action.id);
            })
            return { ...state, todo: selTodo };
        default:
            return state;
    }
};

export default todoList;