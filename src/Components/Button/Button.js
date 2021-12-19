import { Link } from "react-router-dom";
import "../Button/Button.scss";

function Button({icon,buttonText, buttonUrl}) {
    return (
        <Link to={buttonUrl} className="button-container">
            <img className="button-icon" src={icon} alt=""/>
            <span className="button__text">{buttonText}</span>
        </Link>  
        
    )
}
export default Button;

