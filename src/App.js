import React, { Component } from 'react';

import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Count from './components/index'
import Controll from './components/Controller'

class App extends Component {
  render() {
    /*const reducer = (state = {},action)=>{
      if(action.type === 'A'){
        return{
          ...state,
          A: 'I am A'
        }
      }
      if(action.type === 'B'){
        return{
          ...state,
          B: 'I am B'
        }
      }
      return state;
    }
    const store = createStore(reducer);
    store.subscribe(()=>{
      console.log(store.getState());
    })

    store.dispatch({type: "A"})
    store.dispatch({type: "Something"})
    store.dispatch({type: "B"})
    */
    return (
      <Provider store={store}>
        <div className="App">
          <Count/>
          <Controll/>
        </div>
      </Provider>
    );
  }
}

export default App;
