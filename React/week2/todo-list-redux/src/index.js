import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//스토어 가져오기
import store from "./redux/config/configStore";
//스토어 사용범위를 정할 프로바이더 가져오기
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 프로바이더 선언및 속성으로 스토어주기
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
