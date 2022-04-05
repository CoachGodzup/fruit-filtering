import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './store/store';
import Filters from './components/Filters/Filters';
import List from './components/List/List';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <main>
        <Filters></Filters>
        <List></List>
      </main>
    </React.StrictMode>
  </Provider>
);
