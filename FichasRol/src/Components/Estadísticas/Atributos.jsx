import styled from 'styled-components';
import styleVariables from '../../Assets/StyleVariables';

const AtributoComponent = styled.div`
  width: 1375px;
`;
const FlexContainerTitles = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  text-transform:uppercase;
  font-size:12px;
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
  background-color: ${styleVariables.colorAtributos};
  text-transform: uppercase;
  font-weight: 700;
  padding: 5px 0;
`;
const TextContainer = styled.div`
  width: 150px;
  padding-left: 10px;
`;
const InputClase = styled.input`
  border: 1px solid black;
  height: 20px;
  width: 100%;
`;
const TextOtrosContainer = styled.div`
margin-right:15px;
`;
const TextRacialContainer = styled.div`
margin-right:25px;
`;
const TextMejoraContainer = styled.div`
margin-right:20px;
`;
const TextTotalContainer = styled.div`
margin-right:25px;
`;
const TextModContainer = styled.div`
margin-right:25px;
`;
let key = 0;
function getKey() {
  key += 1;
  return key;
}
const atributos = ['Fuerza', 'Destreza', 'Constitución', 'Inteligencia', 'Sabiduria', 'Carisma'];

export default function Atributos() {
  return (
    <AtributoComponent className="Atributos">
      <FlexContainerTitles>
        <TextModContainer>Mod</TextModContainer>
        <TextTotalContainer>Total</TextTotalContainer>
        <TextMejoraContainer>Mejora</TextMejoraContainer>
        <TextRacialContainer>Racial</TextRacialContainer>
        <TextOtrosContainer>Otros</TextOtrosContainer>
      </FlexContainerTitles>
      {atributos.map((value) => {
        const Container = (
          <div key={getKey()}>
            <FlexContainerAtributo>
              <ClaseContainer>
                <TextContainer>{value}</TextContainer>
              </ClaseContainer>
              <FlexContainerInputs>
                <InputClase /> <InputClase />=<InputClase />+<InputClase />+<InputClase />
              </FlexContainerInputs>
            </FlexContainerAtributo>
          </div>
        );
        return Container;
      })}
    </AtributoComponent>
  );
}
