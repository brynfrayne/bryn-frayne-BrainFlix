import BrainFlixLogo from '../../Assets/Logo/BrainFlix-logo.svg';
import Search from "../Search/Search";
import AvatarImage from "../../Assets/Images/Mohan-muruge.jpg";
import "./Header.scss";
import Button from "../Button/Button";


function Header() {
    return (

        <header className="header">

            <img className="header__logo" src={BrainFlixLogo} alt="LOGO" />
            
            <div className="header__search-avatar">
                <Search />
                <img className="header__avatar" src={AvatarImage} alt="Avatar" />
            </div>
            
            <Button />
        </header>
    )
};
 export default Header;
