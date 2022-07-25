import './ButtonTemplate.css';
import SelectIcon from "./icon/SelectIcon";
import {useNavigate} from "react-router-dom";
import {getRandomCamTag} from "../webcam/WebCamHandler";



function ButtonTemplate(props) {


    const navigate = useNavigate();

    function clicked(){
        const page = props.tag;
        switch (page){
            case 'index':
                navigate('/');
                break;
            case 'menu':
                navigate('/menu');
                break;
            case 'design':
                navigate('/design');
                break;
            case 'story':
                navigate('/mystory');
                break;
            case 'contact':
                navigate('/contact');
                break;
            case 'emu':
                navigate('/emulist');
                break;
            case 'trivial':
                navigate('/trivial');
                break;
            case 'dashboard':
                navigate('/dashboard');
                break;
            case 'cam':
                navigate('/webcams/' + getRandomCamTag());
                break;
            case 'tv':
                navigate('/enterTvLink');
                break;
            case 'platform':
                navigate('/filmseries/selectplatform');
                break;
            case 'netflix':
                navigate('/filmseries/filter/netflix');
                break;
            case 'hbo':
                navigate('/filmseries/filter/hbo');
                break;
            case 'prime':
                navigate('/filmseries/filter/prime');
                break;
            case 'themoviedb':
                navigate('/filmseries/filter/themoviedb');
                break;
            case 'weather':
                navigate('/weather');
                break;
            case 'recipes':
                navigate('/recipes');
                break;
            case 'ktools':
                navigate('/kitchenTools');
                break;
            case 'fart':
                navigate('/fartIsFun');
                break;
            case 'alwayson':
                navigate('/alwaysOn');
                break;
            case 'scorecounter':
                navigate('/scoreCounter');
                break;
            case 'back':
                navigate(-1);
                break;
            default:
                navigate('/boo');
                break;
        }

    }

    return(
        <div className='list'>
            <SelectIcon name={props.icon} iconColor={props.iconColor}/>
            <button id={props.id} className='menu-button' onClick={clicked}>
                <svg className='design-button' xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
                    <rect width={props.width} height={props.height} rx="27.5" fill={props.svgColor}/>
                    <text  x="50%" y="60%" className='button-text' dominantBaseline="middle" textAnchor="middle" fill={props.textColor} stroke="rgba(0,0,0,0)" strokeWidth="1" fontSize="25" letterSpacing="0.04em">{props.textField}</text>
                </svg>
            </button>
        </div>
    );

}

export default ButtonTemplate;