import Tools from "./Tools";
import Chip from "./Chip";
import Mail from "./Mail";
import Face from "./Face";
import Back from "./Back";
import React from "react";
import Game from "./Game";
import Cam from "./Cam";
import Tv from "./Tv";
import Series from "./Series";
import Weather from "./Weather";
import Trivial from "./Trivial";
import Recipes from "./Recipes";
import FartMan from "./FartMan";
import Monitor from "./Monitor";
import Score from "./Score";
import Ktools from "./Ktools";
import DashBoard from "./Dashboard";

class SelectIcon extends React.Component{

    constructor(props) {
        super(props);
        this.name = props.name;
        this.iconColor = props.iconColor;
    }

    render() {
        switch (this.name){
            case "TOOLS":
                return <Tools iconColor={this.iconColor}/>;
            case "CHIP":
                return <Chip iconColor={this.iconColor}/>;
            case 'MAIL':
                return <Mail iconColor={this.iconColor}/>;
            case 'FACE':
                return <Face iconColor={this.iconColor}/>;
            case 'EMU':
                return <Game iconColor={this.iconColor}/>;
            case 'TRIVIAL':
                return <Trivial iconColor={this.iconColor}/>;
            case 'DASHBOARD':
                return <DashBoard iconColor={this.iconColor}/>;
            case 'CAM':
                return <Cam iconColor={this.iconColor}/>;
            case 'TV':
                return <Tv iconColor={this.iconColor}/>;
            case 'SERIES':
                return <Series iconColor={this.iconColor}/>;
            case 'WEATHER':
                return <Weather iconColor={this.iconColor}/>;
            case 'RECIPES':
                return <Recipes iconColor={this.iconColor}/>;
            case 'KTOOLS':
                return <Ktools iconColor={this.iconColor}/>;
            case 'FART':
                return <FartMan iconColor={this.iconColor}/>;
            case 'ALWAYSON':
                return <Monitor iconColor={this.iconColor}/>;
            case 'SCORECOUNTER':
                return <Score iconColor={this.iconColor}/>;
            case 'BACK':
                return <Back iconColor={this.iconColor}/>;
            default:
                return <p>NO ICON</p>;
        }
    }
}

export default SelectIcon;
