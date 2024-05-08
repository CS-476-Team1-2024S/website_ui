import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Directory from './components/Directory';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const directory = ReactDOM.createRoot(document.getElementById('nav'));
await directory.render(
  <Directory></Directory>
);

/* For local testing */
// if (title.includes("%20(Prod%20build)%20%7C%7C%20.%20(Local%20development)")) {
//   title = title.split("%20(Prod%20build)%20%7C%7C%20.%20(Local%20development)")[1];
// }

// /* Actual title part */
// if (title !== "" && title !== "about") {
//   const title_div = ReactDOM.createRoot(document.getElementById('title'));
//   title_div.render(
//     <Title title={title}/>
//   );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
