import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Find the root container
const container = document.getElementById('root');

// Ensure the container exists before rendering
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root container not found. Ensure there is a <div id="root"></div> in your index.html.');
}
