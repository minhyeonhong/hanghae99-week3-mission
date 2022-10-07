// 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";
const ADD_NUMBER = "ADD_NUMBER";


// 추가된 코드 👇 - Action Creator를 만들어 줍니다. 
export const plusOne = () => {
    return {
        type: PLUS_ONE,
    };
};

export const minusOne = () => {
    return {
        type: MINUS_ONE,
    };
};

export const addNumber = (payload) => {
    return {
        type: ADD_NUMBER,
        payload: payload
    };
};

// 초기 상태값
const initialState = {
    number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
    console.log(action); // 여기에 console.log(action) 추가
    switch (action.type) {
        case PLUS_ONE:
            return { number: state.number + 1 };
        case MINUS_ONE:
            return { number: state.number - 1 };
        case ADD_NUMBER:
            return { number: state.number + action.payload };
        default:
            return state;
    }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;