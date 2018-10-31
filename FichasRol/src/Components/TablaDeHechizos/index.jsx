import styled from 'styled-components';

const TablaDeHechizosComponent = styled.div`
  font-size: 10px;
  text-transform: uppercase;
  >div{
      margin-bottom: 5px;
  }
`;
const InfoSpell = styled.div`
  width: 300px;
  text-align: center;
  margin: 10px;
  margin-left: 15px;
`;
const FlexContainerSpells = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 5px;
  padding-bottom:4.5px;
`;
const HechizosGeneratorContainer = styled.div`
  border: 1px solid black;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const FlexContainer1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const InputContainer = styled.div`
  width: 50%;
`;
const InputContainer1 = styled.div`
  width: 50%;
  margin-left: 10px;
`;
const InputClase = styled.input`
  border: 1px solid black;
  height: 20px;
  width: 100%;
`;
const NivelDiv = styled.div`
  width: 10%;
`;
const NombreDiv = styled.div`
  width: 85%;
`;

function hechizosGenerator() {
  return (
    <HechizosGeneratorContainer>
      <InfoSpell>
        <FlexContainer1>
          <NombreDiv>
            Nombre
            <InputClase />
          </NombreDiv>
          <NivelDiv>
            Nivel
            <InputClase />
          </NivelDiv>
        </FlexContainer1>
        <FlexContainerSpells>
          <InputContainer>
            Alcance
            <InputClase />
          </InputContainer>
          <InputContainer1>
            Duracion
            <InputClase />
          </InputContainer1>
        </FlexContainerSpells>
        <FlexContainerSpells>
          <InputContainer>
            Resistencia
            <InputClase />
          </InputContainer>
          <InputContainer1>
            Escuela
            <InputClase />
          </InputContainer1>
        </FlexContainerSpells>
      </InfoSpell>
    </HechizosGeneratorContainer>
  );
}
export default function TablaDeHechizos() {
  return (
    <TablaDeHechizosComponent className="TablaDeHechizos">
      {hechizosGenerator()}
      {hechizosGenerator()}
      {hechizosGenerator()}
      {hechizosGenerator()}
      {hechizosGenerator()}
      {hechizosGenerator()}
    </TablaDeHechizosComponent>
  );
}

// for (let i = 0; i < 5; i += 1) {}

