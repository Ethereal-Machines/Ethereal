/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 * __language__ = Javascript
 * __encoding__ = UTF-8
 */

// importing React and related dependencies
import React, { Component } from 'react';

// Importing CSS for the App.jsx file
import './app.css';

// Importing Components used in App.jsx

import Routes from './routes/routes';

class App extends Component {

  render() {
    return (
      <div className="app">
        
        <Routes />
        
      </div>
    );
  }
}

export default App;