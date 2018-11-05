import styled from 'styled-components';
import './App.css';
import Cabezera from '../src/Components/Cabezera';
import Casillero from '../src/Components/Casillero';
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
      <GridContainer className="Ficha de Combate">
        <Cabezera title="Ficha de Combate" />
        <div>
          <Casillero title="Vida" twinContainer operations={['Patat']} />
        </div>
      </GridContainer>
    </PageContainer>
  );
}
