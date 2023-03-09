import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

//react-router-dom "useHistory" hook and some other features of v5 
//is not compatible with React18. So thats why we are not using <StrictMode> component
//to render <App> component.
