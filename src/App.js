import React, { useState } from 'react';

import Navbar from './components/Nav/Navbar';
import Routes from './components/Routes';
import Footer from './components/UI/Footer';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="flex flex-col justify-between min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200 black">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>

  );
};

export default App;
