import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/App';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
import { BrowserRouter } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store as any}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


