import BrainFlixLogo from '../../Assets/Logo/BrainFlix-logo.svg';
import Search from "../Search/Search";
import AvatarImage from "../../Assets/Images/Mohan-muruge.jpg";
import "./Header.scss";
import Button from "../Button/Button";


function Header() {
    return (

        <header className="header">

            <img className="header__logo" src={BrainFlixLogo} alt="LOGO" />
            
            <div className="header__search-avatar-box">
                <Search />
                <div className="header__avatar-left"></div>
            </div>
            
            <Button />
            <div className="header__avatar-right"></div>
        </header>
    )
};
 export default Header;
