import React, { Component } from 'react';
import { connect } from 'react-redux';

const CountController = (props)=>{
    return(
        <div>
            <button onClick={()=> props.add()}>ADD +</button>
            <button onClick={()=> props.sub()}>SUB -</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return({
        add: ()=>{
            dispatch({type: 'ADD'})
        },
        sub: ()=>{
            dispatch({type: 'SUB'})
        }
    })
}


export default connect(null,mapDispatchToProps)(CountController)