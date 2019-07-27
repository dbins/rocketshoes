import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import './config/ReactotronConfig';
import Navigation from './services/navigation';

import Header from './components/Header';
import Routes from './routes';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#141419" />
        <Header />
        <Routes ref={nav => Navigation.set(nav)} />
        <FlashMessage position="top" duration={3000} />
      </Provider>
    );
  }
}

export default App;
