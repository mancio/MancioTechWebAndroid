import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function NotFound(){

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/menu');
        }, 2000)
    }, [navigate])

    return(
        <div>
            <p>404 - NOT FOUND</p>
            <p>Please check the URL</p>
        </div>
    )
}