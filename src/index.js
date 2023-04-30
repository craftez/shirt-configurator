import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Canvas } from './Canvas';
import reportWebVitals from './reportWebVitals';
import { Overlay } from './Overlay';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Canvas />
    <Overlay />
  </>
);

reportWebVitals();
