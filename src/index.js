import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReportcontextProvider from './Contexts/reportcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReportcontextProvider>
    <App />
    </ReportcontextProvider>
  </React.StrictMode>
);

reportWebVitals();
