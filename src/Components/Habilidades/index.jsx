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
  margin: 3px 0;
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
  border-radius: 8px;
  background-color: ${props => (props.relleno ? styleVariables.colorHabilidades : '')};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
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
  height: 25px;
  width: 100%;
  color: ${styleVariables.colorAtributosSombreados};
  text-align: center;
`;
const TextOtrosContainer = styled.div`
  margin-right: 20px;
`;
const TextMejoraContainer = styled.div`
  margin-right: 43px;
`;
const TextTotalContainer = styled.div`
  margin-right: 45px;
`;
const TextModContainer = styled.div`
  margin-right: 47px;
`;
const TitleContainer = styled.div`
  font-weight: 700;
  font-size: 20px;
  text-decoration: underline;
`;
const habilidades1 = [
  { name: 'Acrobacias', attribute: 'DES' },
  { name: 'Animales', attribute: 'CAR' },
  { name: 'Artesanía', attribute: 'INT' },
  { name: 'Artesanía', attribute: 'INT' },
  { name: 'Atletismo', attribute: 'FUE' },
  { name: 'Bailar y Cantar', attribute: 'CAR' },
  { name: 'Buscar', attribute: 'INT' },
  { name: 'Cabalgar', attribute: 'DES' },
  { name: 'Cerraduras', attribute: 'DES' },
  { name: 'Cocina', attribute: 'SAB' },
  { name: 'Concentración', attribute: 'SAB' },
  { name: 'Descifrar', attribute: 'INT' },
  { name: 'Disfrazarse', attribute: 'CAR' },
  { name: 'Embaucar', attribute: 'CAR' },
  { name: 'Interpretar', attribute: 'CAR' },
];
const habilidades2 = [
  { name: 'Intimidar', attribute: 'FUE' },
  { name: 'Juego de Manos', attribute: 'DES' },
  { name: 'Labia', attribute: 'CAR' },
  { name: 'Mecanismos', attribute: 'SAB' },
  { name: 'Medicina', attribute: 'SAB' },
  { name: 'Nadar', attribute: 'DES' },
  { name: 'Observación', attribute: 'SAB' },
  { name: 'Oficio', attribute: 'SAB' },
  { name: 'Oficio', attribute: 'SAB' },
  { name: 'Orientación', attribute: 'SAB' },
  { name: 'Saber', attribute: 'INT' },
  { name: 'Saber', attribute: 'INT' },
  { name: 'Sigilo', attribute: 'DES' },
  { name: 'Supervivencia', attribute: 'SAB' },

  { name: '', attribute: undefined },
];
let key = 0;
function getKey() {
  key += 1;
  return key;
}

function inputGenerator(attribute) {
  return (
    <FlexContainerInputs>
      <InputClase />=<InputClase defaultValue={attribute} />+<InputClase />+<InputClase />
    </FlexContainerInputs>
  );
}
function titlesGenerator() {
  return (
    <FlexContainerTitles>
      <TextTotalContainer>Total</TextTotalContainer>
      <TextModContainer>Mod.</TextModContainer>
      <TextMejoraContainer>Base</TextMejoraContainer>
      <TextOtrosContainer>Otros</TextOtrosContainer>
    </FlexContainerTitles>
  );
}

export default function Habilidades() {
  return (
    <HabilidadesComponent className="Habilidades">
      <TitleContainer>Habilidades</TitleContainer>
      <div>
        <FlexContainerSpaced>
          <div>
            {titlesGenerator()}
            {habilidades1.map((value) => {
              const Container = (
                <div key={getKey()}>
                  <FlexContainerAtributo>
                    <ClaseContainer relleno={value.attribute}>
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
                    <ClaseContainer relleno={value.attribute}>
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
      </div>
    </HabilidadesComponent>
  );
}
