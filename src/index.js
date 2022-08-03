import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import ScriptTag from 'react-script-tag';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <ScriptTag isHydrating={true} type="text/javascript" 
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" /> */}
  </React.StrictMode>
);
