import './Footer.css';
import logo from '../img/Unimol-logo.png';

function Footer() {
    return (
        <footer>
            <div class="logo-title">
                <img src={logo}></img>
                <div class="title">
                    <span> Progetto Informatica Territoriale</span>
                </div>
            </div>
            <div class="sources-credits">
                <div class="credits">
                    <div id="names">Roberto Casale</div>
                    <div id="names">Alessandro Notte</div>
                    <div id="names">Alessandro Giacento</div>
                </div>
                <div class="sources">
                    <a href="#">Torna Su</a>  
                    <span id="sep-fonti">|</span>
                    <a href="#">Fonti</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer