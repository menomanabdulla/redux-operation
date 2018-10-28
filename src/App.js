import React, { Component } from 'react';

import './App.css';

import {createStore} from 'redux'

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

    const reducer = (state={},action)=>{
      return state;
    }
    const store = createStore(reducer);

    store.subscribe(()=>{
      console.log(store.getState());
    })

    store.dispatch({type: 'Something'})

    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
