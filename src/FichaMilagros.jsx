import styled from 'styled-components';
import './App.css';
import Cabezera from './Components/Cabezera';
import styleVariables from './Assets/StyleVariables';
import TablaDeMilagros from './Components/TablaDeMilagros';

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

export default function FichaMilagros() {
  return (
    <PageContainer>
      <GridContainer className="Ficha de Milagros">
        <Cabezera title="Ficha de Milagros" />
        <TablaDeMilagros />
      </GridContainer>
    </PageContainer>
  );
}
