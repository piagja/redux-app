import React from 'react';
import store from './store'

import Home from './components/Home';
import AboutUs from './components/AboutUs';

import { Provider } from 'react-redux'


const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Home /> 
        <AboutUs />
      </Provider>
    </>
  );
}

export default App;
