import './Arrow.css';
import React from "react";

class Arrow extends React.Component{

    render() {
        const iconColor = this.props.iconColor;
        const direction = 'rotate(' + this.props.direction + ')';
        return(
            <button className='arrow-button' onClick={() => this.props.changeCam(this.props.direction)}>
                <svg className='arrow-svg' id="next-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="68.748" height="68.748" viewBox="0 0 68.748 68.748" transform={direction}>
                    <g id="Group_107" data-name="Group 107">
                        <path id="Path_92" data-name="Path 92" d="M34.374,0A34.374,34.374,0,1,0,68.748,34.374,34.374,34.374,0,0,0,34.374,0ZM44.848,36.7a3.242,3.242,0,0,1-.543.432l-12.9,12.9A3.209,3.209,0,0,1,26.867,45.5L37.983,34.377l-11.06-11.06a3.21,3.21,0,0,1,4.539-4.54L44.305,31.62a3.332,3.332,0,0,1,.543,5.082Z" fill={iconColor}/>
                    </g>
                </svg>
            </button>
        )
    }


}

export default Arrow;