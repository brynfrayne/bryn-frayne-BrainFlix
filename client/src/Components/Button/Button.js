// import { Link } from "react-router-dom";
import "../Button/Button.scss";

function Button({icon,buttonText, buttonUrl,onclick, form}) {
    return (
        <button to={buttonUrl} className="button-container" form={form} type="submit">
            <img className="button-icon" src={icon} alt=""/>
            <span className="button__text">{buttonText}</span>
        </button>  
        
    )
}
export default Button;

