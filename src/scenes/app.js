import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppProvider } from 'contexts/app-context';

import AppRoutes from 'routes/app-routes';

function App() {
  return (
    <div className='app'>
      <AppProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
