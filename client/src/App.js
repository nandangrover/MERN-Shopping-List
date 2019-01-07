import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './Components/AppNavBar';
import ShoppingList from './Components/ShoppingList';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;