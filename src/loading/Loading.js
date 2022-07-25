import React from "react";
import './Loading.css';

class Loading extends React.Component{
    render() {
        return(
            <div className='loading'>
                <h1>Please wait....</h1>
            </div>
        )
    }
}

export default Loading;