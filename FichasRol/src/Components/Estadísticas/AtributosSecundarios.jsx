import styled from 'styled-components';
import styleVariables from '../../Assets/StyleVariables';

const AtributoSecundarioComponent = styled.div``;

const FlexContainerTitles = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  text-transform: uppercase;
  font-size: 11px;
`;
const FlexContainerAtributoSecundario = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const FlexContainerInputs = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const ClaseContainer = styled.div`
  color: white;
  background-color: ${styleVariables.colorAtributos};
  text-transform: uppercase;
  font-weight: 700;
  padding: 5px 0;
`;
const TextContainer = styled.div`
  width: 110px;
  padding-left: 10px;
`;
const InputClase = styled.input`
  border: 1px solid black;
  height: 20px;
  width: 100%;
  color: ${styleVariables.colorAtributosSombreados};
  text-align: center;
`;
const TextOtrosContainer = styled.div`
  margin-right: 5px;
`;
const TextRacialContainer = styled.div`
  margin-right: 12px;
`;
const TextMejoraContainer = styled.div`
  margin-right: 10px;
`;
const TextModContainer = styled.div`
  margin-right: 20px;
`;
const TextTotalContainer = styled.div`
  margin-right: 25px;
`;
let key = 0;
function getKey() {
  key += 1;
  return key;
}
const atributosSecundarios = [
  { name: 'Fortaleza', attribute: 'FUE' },
  { name: 'Reflejos', attribute: 'DES' },
  { name: 'Voluntad', attribute: 'SAB' },
  { name: 'Ataque', attribute: 'DES' },
];
export default function AtributosSecundarios() {
  return (
    <AtributoSecundarioComponent className="AtributosSecundarios">
      <FlexContainerTitles>
        <TextTotalContainer>Total</TextTotalContainer>
        <TextModContainer>Mod</TextModContainer>
        <TextMejoraContainer>Mejora</TextMejoraContainer>
        <TextRacialContainer>Racial</TextRacialContainer>
        <TextOtrosContainer>Otros</TextOtrosContainer>
      </FlexContainerTitles>
      {atributosSecundarios.map((value) => {
        const Container = (
          <div key={getKey()}>
            <FlexContainerAtributoSecundario>
              <ClaseContainer>
                <TextContainer>{value.name}</TextContainer>
              </ClaseContainer>
              <FlexContainerInputs>
                <InputClase />=<InputClase defaultValue={value.attribute} />+<InputClase />+
                <InputClase />+<InputClase />
              </FlexContainerInputs>
            </FlexContainerAtributoSecundario>
          </div>
        );
        return Container;
      })}
    </AtributoSecundarioComponent>
  );
}
