import React from "react";
import Title from "./title/Title";
import Pacman from "./pacman/Pacman";
import Enter from "./enter/Enter";
import TimeNow from "./timenow/TimeNow";

class MainPage extends React.Component{

    render() {
        return(
            <div>
                <Title/>
                <TimeNow/>
                <Pacman/>
                <Enter/>
            </div>
        )
    }
}

export default MainPage;