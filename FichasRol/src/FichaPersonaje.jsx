import styled from 'styled-components';
import './App.css';
import Cabezera from './Components/Cabezera/index';
import Personaje from './Components/Personaje/index';
import Estadisticas from './Components/Estadísticas/index';
import Habilidades from './Components/Habilidades/index';
import TablaEXP from './Components/TablaExp/index';
import styleVariables from './Assets/StyleVariables';

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
        <Estadisticas />
        <Habilidades />
        <TablaEXP />
      </GridContainer>
    </PageContainer>
  );
}
