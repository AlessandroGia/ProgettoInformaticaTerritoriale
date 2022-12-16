import logo from './logo.svg';
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Storia from './pages/storia/Storia';
import AnalisiTerritoriale from './pages/analisi_territoriale/AnalisiTerritoriale';

function App() {

  return (
    <div>
      <div>
        <Routes>
          <Route path="/storia" element={<Storia />} />
          <Route path="/analisi-territoriale" element={<AnalisiTerritoriale />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
