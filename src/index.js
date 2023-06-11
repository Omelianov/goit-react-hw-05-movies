import { React, ReactDOM } from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

