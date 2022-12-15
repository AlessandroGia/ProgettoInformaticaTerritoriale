import './Navbar.css';

function Navbar() {
    return (
        <header>
            <div class="navbar">
                <div class="titolo">
                    <span>Titolo Progetto</span>
                </div>
                <div class="menu-navbar">
                    <nav> 
                        <a href="#">Mappa Provincia</a>
                        <span id="sep">|</span>
                        <a href="#">Mappa Ilva</a>
                        <span id="sep">|</span>
                        <a href="#">Analisi Territoriale</a>
                        <span id="sep">|</span>
                        <a href="#">Storia</a>   
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar