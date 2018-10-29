import React from 'react';
import {connect} from 'react-redux';

function Count(props){
    return(
        <div>
            <h1>{props.count}</h1>
        </div>
    )
}
function  mapStateToProps (state, ownProps){
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Count)