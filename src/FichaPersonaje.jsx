import styled from 'styled-components';
import './App.css';
import Cabezera from '../src/Components/Cabezera';
import Personaje from '../src/Components/Personaje';
import Estadisticas from '../src/Components/Estadísticas';
import Habilidades from '../src/Components/Habilidades';
import styleVariables from './Assets/StyleVariables';
import characterValues from './Values/characterValues';

const GridContainer = styled.div`
  display: grid;
  grid-template: auto auto auto / 100%;
  grid-gap: 20px 10px;
  font-family: ${styleVariables.letterStyle};
`;
const PageContainer = styled.div`
  width: 900px;
  height: 1000px;
`;

export default function FichaPersonaje() {
  return (
    <PageContainer>
      <GridContainer className="Ficha de Personaje">
        <Cabezera title="Ficha de Personaje" />
        <Personaje />
        <Estadisticas characterValues={characterValues} />
        <Habilidades />
      </GridContainer>
    </PageContainer>
  );
}
