import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { CategoriesReducer } from './store/reducers/CategoriesReducer';
import { PriceReducer } from './store/reducers/PriceReducer';
import { SwitchInputReducer } from './store/reducers/SwitchInputReducer';
import { SearchBoxReducer } from './store/reducers/SearchBoxReducer';
import { TagsReducer } from './store/reducers/TagsReducer';
import { AdsReducer } from './store/reducers/AdsReducer';
import { LocationReducer } from './store/reducers/LocationReducer';


const store = createStore (combineReducers ({CategoriesReducer, PriceReducer, SwitchInputReducer, SearchBoxReducer, TagsReducer, AdsReducer, LocationReducer}) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );



ReactDOM.render(
  
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
