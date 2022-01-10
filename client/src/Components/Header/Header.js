import BrainFlixLogo from '../../Assets/Logo/BrainFlix-logo.svg';
import Search from "../Search/Search";
import "./Header.scss";
import Button from "../Button/Button";
import uploadIcon from "../../Assets/Icons/upload.svg";
import { Link } from 'react-router-dom';



function Header() {
    return (

        <header className="header">
            
            <img className="header__logo" src={BrainFlixLogo} alt="LOGO" />
            <div className="header__search-avatar-button-box">
                <div className="header__search-avatar-box">
                    <Search />
                    <div className="header__avatar-left"></div>
                </div>
                <Link to='/upload'>
                <Button icon={uploadIcon} buttonText={"UPLOAD"} buttonUrl={'/upload'}/>
                </Link>
                <div className="header__avatar-right"></div>
            </div>
        </header>
    )
};
 export default Header;
