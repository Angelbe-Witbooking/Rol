import './App.css';
import FichasPersonaje from './FichaPersonaje';
import FichasHechizos from './FichaHechizos';
import FichasHechizos2 from './FichaHechizos2';
import FichasCombate from './FichaCombate';

const Ficha = {
  FichasHechizos, FichasPersonaje, FichasHechizos2, FichasCombate,
};

export default function App() {
  return (
    <div>
      <Ficha.FichasCombate />
    </div>
  );
}
