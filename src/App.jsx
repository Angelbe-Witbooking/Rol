import './App.css';
import FichasPersonaje from './FichaPersonaje';
import FichasHechizos from './FichaHechizos';
import FichasHechizos2 from './FichaHechizos2';
import FichasCombate from './FichaCombate';
import FichasDotes from './FichaDotes';
import FichasMilagros from './FichaMilagros';

const Ficha = {
  FichasHechizos,
  FichasPersonaje,
  FichasHechizos2,
  FichasCombate,
  FichasDotes,
  FichasMilagros,
};

export default function App() {
  return (
    <div>
      <Ficha.FichasPersonaje />
    </div>
  );
}
