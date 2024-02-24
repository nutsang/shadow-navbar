import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home'
import SignUp from './pages/sign-up/SignUp'
import SignIn from './pages/sign-in/SignIn';

document.body.className = 'font-Kanit'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route exact path='/sign-up' element={<SignUp />} />
          <Route exact path='/sign-in' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
