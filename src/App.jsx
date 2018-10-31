import './App.css';
import FichasPersonaje from './FichaPersonaje';
import FichasHechizos from './FichaHechizos';
import FichasHechizos2 from './FichaHechizos2';

const Ficha = { FichasHechizos, FichasPersonaje, FichasHechizos2 };

export default function App() {
  return (
    <div>
      <Ficha.FichasHechizos2 />
    </div>
  );
}
