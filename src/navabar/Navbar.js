import './Navbar.css';
import arrow from '../img/up-arrow.svg';
import {Routes, Route, useNavigate} from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const navigateToStoria = () => {
      navigate('/storia');
    };
  
    const navigateToAnalisiTerritoriale = () => {
      navigate('/analisi-territoriale');
    };
    return (
        <header>
            <div class="navbar">
                <div class="titolo">
                    <span>Titolo Progetto</span>
                </div>
                <div class="menu-navbar">
                    <nav> 
                        <div class="dropdown-provincia">
                            <img id="arrow" src={arrow} alt="Dropdown"/>
                            <span id="mappe">Mappa Provincia</span>
                            <div class="dropdown-provincia-content">
                                <a id="dropdown-provincia-content-a" href="#">Mappa Impianto</a>
                                <a id="dropdown-provincia-content-a" href="#">Mappa Con Ortofoto</a>
                            </div>
                        </div>
                        <span id="sep">|</span>
                        <div class="dropdown-ilva">
                            <img  id="arrow" src={arrow} alt="Dropdown"/>
                            <span id="mappe">Mappa Ilva</span>
                            <div class="dropdown-ilva-content">
                                <a id="dropdown-ilva-content-a" href="#">Mappa Impianto</a>
                                <a id="dropdown-ilva-content-a" href="#">Mappa Con Ortofoto</a>
                            </div>
                        </div>
                        <span id="sep">|</span>
                        <div >
                            <a id="links_a" href="" onClick={navigateToAnalisiTerritoriale}>Analisi Territoriale</a>
                        </div>
                        <span id="sep">|</span>
                        <div>
                            <a id="links_a" href="" onClick={navigateToStoria}>Storia</a>   
                        </div> 
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar