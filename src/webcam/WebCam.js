import React from "react";
import './WebCam.css';
import ReactPlayer from "react-player";

class WebCam extends React.Component{
    render() {
        const webcam = this.props.webcam;
        return(
            <div>
                <div className='webcam'>
                    <ReactPlayer
                        url = {webcam.src}
                        width = '100%'
                        height= '100%'
                        controls = {true}
                        playing = {true}
                        config={{ file: {
                                attributes: {
                                    crossOrigin: 'true'
                                }}}}
                    />
                </div>
                <div className='webcam-description'>
                    <p>{webcam.title}</p>
                    <p>{webcam.country}</p>
                </div>
            </div>
        )
    }
}

export default WebCam;