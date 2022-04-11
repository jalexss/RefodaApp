// importaciones de librerias
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import ReactDOM from 'react-dom';


// importaciones mias 
import { RefodaApp } from './RefodaApp'; // raiz proyecto anexo del index



/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/



const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<RefodaApp />);

