import './Header.css';
import Navigation from "../navigation/Navigation.jsx";


function Header() {
    return (
        <>

            <header className="header-container">
                <p>
                    Cocktails<span className="space">Sip&Spark</span>
                </p>
                <Navigation/>
            </header>


        </>
    )
}

export default Header;