import styled from 'styled-components';
import './App.css';
import Cabezera from '../src/Components/Cabezera';
import Casillero from '../src/Components/Casillero';
import styleVariables from './Assets/StyleVariables';
import combatValues from './Values/combatValues';

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
const CasilleroContainer = styled.div`
  text-transform: uppercase;
`;
const FlexContainer = styled.div`
  display: flex;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const Row1 = styled(Row)``;
const Row2 = styled(Row)``;
const RightColumn = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
const Row3 = styled(Row)`
  justify-content: space-around;
`;
const Row4 = styled(Row)``;
const Row5 = styled(Row)``;
const Row5Title = styled.div`
  font-weight: 700;
`;
const Row5Columns = styled.div`
  padding: 5px 20px 5px 0;
`;
const BagContainer = styled.div`
  text-transform: uppercase;
  border: 1px black solid;
  height: 560px;
`;
const BagTitleContainer = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
`;
const BagTitleText = styled.div`
  display: flex;
  align-self: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
`;

export default function FichaPersonaje() {
  return (
    <PageContainer>
      <GridContainer className="Ficha de Combate">
        <Cabezera title="Ficha de Combate" />
        <CasilleroContainer className="CasilleroContainer">
          <div>
            <Row1>
              <Casillero className="LifePoints" values={combatValues.lifePoints} />
              <Casillero className="seriousInjury" values={combatValues.seriousInjury} />
              <Casillero className="Defense" values={combatValues.defense} />
            </Row1>
            <Row2>
              <div>
                <Casillero className="Armor" values={combatValues.armor} />
                <Casillero className="ArmorFollow" values={combatValues.armorFollow} />
                <Casillero className="ArmorFollow" values={combatValues.armorFollow} />
              </div>
              <RightColumn>
                <Casillero className="heroism" values={combatValues.heroism} />
                <Casillero className="speed" values={combatValues.speed} />
              </RightColumn>
            </Row2>
            <Row3>
              <Casillero className="Impact" values={combatValues.impact} />
              <Casillero className="ImpactDistant" values={combatValues.impactDistant} />
            </Row3>
            <Row4>
              <div>
                <Casillero className="Weapon" values={combatValues.weapons} />
                <Casillero className="WeaponFollow" />
                <Casillero className="WeaponFollow" values={combatValues.weaponsFollow} />
                <Casillero className="WeaponFollow" values={combatValues.weaponsFollow} />
              </div>
              <RightColumn>
                <Casillero className="Mana" values={combatValues.mana} />
                <Casillero className="Favor" values={combatValues.favor} />
              </RightColumn>
            </Row4>
            <Row5>
              <div>
                <Row5Title>Reducción de daños</Row5Title>
                <FlexContainer>
                  <Row5Columns>
                    <Casillero className="rDPhysical" values={combatValues.rDPhysical} />
                    <Casillero className="rDArcane" values={combatValues.rDArcane} />
                    <Casillero className="rDDark" values={combatValues.rDDark} />
                    <Casillero className="rDLight" values={combatValues.rDLight} />
                  </Row5Columns>
                  <Row5Columns>
                    <Casillero className="rDFire" values={combatValues.rDFire} />
                    <Casillero className="rDEarth" values={combatValues.rDEarth} />
                    <Casillero className="rDWater" values={combatValues.rDWater} />
                    <Casillero className="rDAir" values={combatValues.rDAir} />
                  </Row5Columns>
                </FlexContainer>
              </div>
              <div>
                <Row5Title>Consumibles y pociones rápidas</Row5Title>
                <div>
                  <Casillero className="consumable" values={combatValues.consumable} />
                  <Casillero className="consumableFollow" values={combatValues.consumableFollow} />
                  <Casillero className="consumableFollow" values={combatValues.consumableFollow} />
                </div>
              </div>
            </Row5>
          </div>
        </CasilleroContainer>
        <BagContainer>
          <BagTitleContainer>
            <BagTitleText>Bolsa</BagTitleText>
            <Casillero className="Slots" values={combatValues.slots} />
            <Casillero className="Money" values={combatValues.money} />
          </BagTitleContainer>
          <div />
        </BagContainer>
      </GridContainer>
    </PageContainer>
  );
}
