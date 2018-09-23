import styled from 'styled-components';
import styleVariables from '../../Assets/StyleVariables';

const HabilidadesComponent = styled.div``;
const FlexContainerTitles = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  text-transform: uppercase;
  font-size: 11px;
`;
const FlexContainerSpaced = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const FlexContainerAtributo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const FlexContainerInputs = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  :last-child {
    margin-right: 6px;
  }
`;
const ClaseContainer = styled.div`
  color: white;
  border: 1px solid black;
  border-radius: 15px;
  background-color: ${styleVariables.colorHabilidades};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  padding: 5px 0;
  margin: 2px 2px;
`;
const TextContainer = styled.div`
  min-height: 15px;
  width: 130px;
  padding-left: 10px;
`;
const InputClase = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  height: 20px;
  width: 100%;
  color: ${styleVariables.colorAtributosSombreados};
  text-align: center;
`;
const TextOtrosContainer = styled.div`
  margin-right: 15px;
`;
const TextRacialContainer = styled.div`
  margin-right: 20px;
`;
const TextMejoraContainer = styled.div`
  margin-right: 20px;
`;
const TextTotalContainer = styled.div`
  margin-right: 30px;
`;
const TextModContainer = styled.div`
  margin-right: 25px;
`;
const habilidades1 = [
  { name: 'Acrobacias', attribute: 'FUE' },
  { name: 'Artesanía', attribute: 'INT' },
  { name: 'Artesanía', attribute: 'INT' },
  { name: 'Atención*', attribute: 'SAB' },
  { name: 'Atletismo*', attribute: 'FUE' },
  { name: 'Av. Intenciones*', attribute: 'SAB' },
  { name: 'Buscar*', attribute: 'INT' },
  { name: 'Cocina*', attribute: 'SAB' },
  { name: 'Cocentración*', attribute: 'SAB' },
  { name: 'Diplomacia*', attribute: 'CAR' },
  { name: 'Disfrazarse*', attribute: 'CAR' },
  { name: 'Engañar*', attribute: 'CAR' },
  { name: 'Interpretar', attribute: 'CAR' },
  { name: 'Intimidar', attribute: 'FUE' },
  { name: 'Mecanismos', attribute: 'INT' },
];
const habilidades2 = [
  { name: 'Juego de Manos', attribute: 'DES' },
  { name: 'Medicina', attribute: 'SAB' },
  { name: 'Montar', attribute: 'DES' },
  { name: 'Oficio', attribute: 'SAB' },
  { name: 'Oficio', attribute: 'SAB' },
  { name: 'Orientación*', attribute: 'SAB' },
  { name: 'Recabar Info.*', attribute: 'CAR' },
  { name: 'Saber', attribute: 'INT' },
  { name: 'Saber', attribute: 'INT' },
  { name: 'Sigilo*', attribute: 'DES' },
  { name: 'Supervivencia*', attribute: 'SAB' },
  { name: 'Animales*', attribute: 'CAR' },
  { name: '', attribute: '' },
  { name: '', attribute: '' },
  { name: '', attribute: '' },
];
let key = 0;
function getKey() {
  key += 1;
  return key;
}

function inputGenerator(attribute) {
  return (
    <FlexContainerInputs>
      <InputClase />=<InputClase defaultValue={attribute} />+<InputClase />+<InputClase />+
      <InputClase />
    </FlexContainerInputs>
  );
}
function titlesGenerator() {
  return (
    <FlexContainerTitles>
      <TextTotalContainer>Total</TextTotalContainer>
      <TextModContainer>Mod</TextModContainer>
      <TextMejoraContainer>Mejora</TextMejoraContainer>
      <TextRacialContainer>Racial</TextRacialContainer>
      <TextOtrosContainer>Otros</TextOtrosContainer>
    </FlexContainerTitles>
  );
}

export default function Habilidades() {
  return (
    <HabilidadesComponent className="Habilidades">
      <FlexContainerSpaced>
        <div>
          {titlesGenerator()}
          {habilidades1.map((value) => {
            const Container = (
              <div key={getKey()}>
                <FlexContainerAtributo>
                  <ClaseContainer>
                    <TextContainer>{value.name}</TextContainer>
                  </ClaseContainer>
                  {inputGenerator(value.attribute)}
                </FlexContainerAtributo>
              </div>
            );
            return Container;
          })}
        </div>

        <div>
          {titlesGenerator()}
          {habilidades2.map((value) => {
            const Container = (
              <div key={getKey()}>
                <FlexContainerAtributo>
                  <ClaseContainer>
                    <TextContainer>{value.name}</TextContainer>
                  </ClaseContainer>
                  {inputGenerator(value.attribute)}
                </FlexContainerAtributo>
              </div>
            );
            return Container;
          })}
        </div>
      </FlexContainerSpaced>
    </HabilidadesComponent>
  );
}
