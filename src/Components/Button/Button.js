import UploadButton from "../../Assets/Icons/upload.svg";
import "../Button/Button.scss";

function Button() {
    return (
        <div className="button-container">
            <img className="button-icon" src={UploadButton} alt=""/>
            <button className="button">UPLOAD</button>
        </div>  
        
    )
}

export default Button;
