import './Header.css';
import Navigation from "../navigation/Navigation.jsx";



function Header() {
    return(
        <>
            <header className="header-container">
                <header/>
                <Navigation/>
                <p>
                    Cocktails<span className="space">Sip&Spark</span>
                </p>
            </header>

        </>
    )
}

export default Header;