import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import './App.css';
import Number from './components/count';
import CountController from './components/count/controller';

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
              <h1>Hello react</h1>
              <Number/>
              <CountController/>
          </div>
        </Provider>
    );
  }
}
export default App;
