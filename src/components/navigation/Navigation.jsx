import './Navigation.css';
import {NavLink} from "react-router-dom";


function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <header className="navbar_container">

                    {/*<button>Registreren/Inloggen</button>*/}
                    {/*<button>Zoeken Bij Naam</button>*/}
                    {/*<button>Favorieten</button>*/}
                    {/*<button>Cocktail Builder</button>*/}
                </header>
                <ul>
                    <li><NavLink to="/search-by-name" className={({isActive}) => isActive === true ? "active-link" : "default-link"}>
                        Zoeken Bij Naam
                    </NavLink>
                    </li>
                </ul>


            </div>
        </nav>
    )
}


export default Navigation;
