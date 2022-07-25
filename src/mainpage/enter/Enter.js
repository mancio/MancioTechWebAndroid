import './Enter.css';
import {Link, useNavigate} from 'react-router-dom';

function Enter() {

    const navigate = useNavigate();

    return (
        <Link to='/menu'>
            <button id='0' className='enter-button' onClick={() => navigate('/menu')}>
                <svg className='Enter' xmlns="http://www.w3.org/2000/svg" width="250" height="55" viewBox="0 0 250 55">
                    <rect width="250" height="55" rx="27.5" fill="#ff00ec"/>
                    <text className='button-text' id="ENTER" transform="translate(80 38)" fill="#fff" stroke="rgba(0,0,0,0)"
                          strokeWidth="1" fontSize="25" letterSpacing="0.04em">
                        <tspan x="0" y="0">ENTER</tspan>
                    </text>
                </svg>
            </button>
        </Link>
    );
}

export default Enter;