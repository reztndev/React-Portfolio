import '../Style.css';

import Navigation from './Navigation';

// Once the Header component loads, load Navigation component
function Header() {
    return (
        <>
            <header>
             <h1 className="header-title">Mehrdod</h1>
            </header>

            <Navigation />
        </>
    )
}

export default Header;