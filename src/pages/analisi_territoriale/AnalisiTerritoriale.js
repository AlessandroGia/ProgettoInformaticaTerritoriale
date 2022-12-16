import './AnalisiTerritoriale.css'

function AnalisiTerritoriale() {
    return(
        <div className="analisi-territoriale">
            <div id="at-containers">
                <div id='at-left'>
                    <div id="at-content">
                        <div id="at-titolo"><b>Wind day</b></div>
                        <div id="at-content-content">I "wind day" sono particolari giorni di vento molto forte nei quali gli agenti inquinanti di origine ingustriale si concentrano nei quartieri più vicini. In questi giorni il vento intenso determina un impatto negativo sulla qualità dell'aria con particolare riferimento al PM10 e al benzopirene.</div>
                        <div id="at-foto"></div>
                    </div>
                </div>
                <div id='at-right'>
                    <div id="at-content">
                        <div id="at-titolo"><b>Venti</b></div>
                        <div id="at-content-content"></div>
                        <div id="at-foto"></div>
                    </div>
                </div>
            </div>
            <div id="at-containers">
                <div id='at-left'>
                    <div id="at-content">
                        <div id="at-titolo"><b>Area di studio</b></div>
                        <div id="at-content-content">Abbiamo selezionato otto comuni, a distanze diverse (0-60 km), all'interno di un cono immaginario di dispersione degli inquinanti in direzione S-SE da Taranto. Abbiamo anche incluso la città di Taranto come 9° sito di studio e le due aree provinciali della regione (le Aree Metropolitane di Bari e Taranto) a cui appartengono i nove comuni studiati.</div>
                        <div id="at-foto"></div>
                    </div>
                </div>
                <div id='at-right'>
                    <div id="at-content ">
                        <div id="at-titolo"><b>Da Fare</b></div>
                        <div id="at-content-content"></div>
                        <div id="at-foto"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnalisiTerritoriale;