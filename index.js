/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider }  from 'react-redux';
import React from 'react';
import configureStore from './src/components/Store';
import Home from './src/screens/Home'

const store = configureStore()

const RNRedux = () => (
  <Provider store = { store }>
   
    <App />
  </Provider>
)



AppRegistry.registerComponent(appName, () => RNRedux);
