import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import EcommerceRegistration from './EcommerceProject/EcommerceRegistration';
// import EcommerceLogin from './EcommerceProject/EcommerceLogin';
// import Header from './EcommerceProject/Components/Header';
// import Footer from './EcommerceProject/Components/Footer';
// import Home from './EcommerceProject/Components/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
