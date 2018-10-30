import React from 'react';
import {connect} from 'react-redux';

const Number =(props)=>{
    return(
        <h1>{props.count}</h1>
    );
}
const mapStateToProps = (state)=>{
    return(
        {
            count : state.count
        }
    )
}

export default connect(mapStateToProps)(Number)