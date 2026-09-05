import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import './style.css';
import { StudioApp } from './components/StudioApp';

const rootElement = document.getElementById('app');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <StudioApp />
    </React.StrictMode>
  );
}
