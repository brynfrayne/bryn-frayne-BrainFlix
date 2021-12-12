import "../Button/Button.scss";

function Button({icon,buttonText}) {
    return (
        <div className="button-container">
            <img className="button-icon" src={icon} alt=""/>
            <button className="button">{buttonText}</button>
        </div>  
        
    )
}
export default Button;

