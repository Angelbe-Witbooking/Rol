import styled from 'styled-components';
import './App.css';
import Cabezera from '../src/Components/Cabezera';
import styleVariables from './Assets/StyleVariables';
import TablaDeDotes from '../src/Components/TablaDeDotes';
import dotesValues from './Values/dotesValues';
import Casillero from './Components/Casillero';

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
const HeaderContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  font-weight: 600;
`;

export default function FichaDotes() {
  return (
    <PageContainer>
      <GridContainer className="Ficha de Dotes">
        <Cabezera title="Ficha de Dotes" />
        <HeaderContainer>
          <div>
            Dotes Fortaleza
            <Casillero className="talentFortitude" values={dotesValues.talentFortitude} />
          </div>
          <div>
            Dotes Reflejos
            <Casillero className="talentReflexes" values={dotesValues.talentReflexes} />
          </div>
          <div>
            Dotes Voluntad
            <Casillero className="talentWill" values={dotesValues.talentWill} />
          </div>
          <div>
            Dotes Ataque
            <Casillero className="talentAttack" values={dotesValues.talentAttack} />
          </div>
          <div>
            Dotes Precisión
            <Casillero className="talentPrecision" values={dotesValues.talentPrecision} />
          </div>
          <div>
            Dotes Mágicas
            <Casillero className="talentMagic" values={dotesValues.talentMagic} />
          </div>
          <div>
            Dotes Divinas
            <Casillero className="talentDivine" values={dotesValues.talentDivine} />
          </div>
        </HeaderContainer>
        <TablaDeDotes />
      </GridContainer>
    </PageContainer>
  );
}
