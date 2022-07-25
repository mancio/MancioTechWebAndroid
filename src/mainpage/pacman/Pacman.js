import logo from "./Pacman.svg";
import './Pacman.css';

function Pacman(){
    return(
        <div>
            <img src={logo} className="Pacman" alt="Do you like Pacman?"/>
        </div>
    );
}

export default Pacman;