
//import React, { Component } from 'react';
const intialValue = {
    count : 0
}
function rootReducer(state=intialValue,action){
    switch(action.type){
        case 'ADD':{
            return{
                count: state.count+1
            }
        }
        case 'SUB':{
            return{
                count: state.count-1
            }
        }
        default: return state
    }
}

export default rootReducer;