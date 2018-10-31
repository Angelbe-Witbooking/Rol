import styled from 'styled-components';

const TablaEXPComponent = styled.div`
  max-height: 130px;
  height: 130px;
`;
const FlexContainerSpaced = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const FlexContainerImagen = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  width: 50%;
`;
const FlexContainerExperiencia = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 50%;
`;
const TablaEXPHeader = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 2px;
`;
const TablaEXPBody = styled.div`
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2px;
`;
const TextContainer = styled.div``;
let key = 0;
function getKey() {
  key += 1;
  return key;
}
const costesArr = [
  { nombre: 'Atributos', valor: '20px' },
  { nombre: 'Atributos Secundarios', valor: '15px' },
  { nombre: 'Habilidades', valor: '5px' },
  { nombre: 'Dotes', valor: '15px' },
  { nombre: 'Hechizos/Milagros', valor: '5+5*Nivel de hechizo / conjuro' },
];

export default function TablaEXP() {
  return (
    <TablaEXPComponent className="TablaEXP">
      <FlexContainerSpaced>
        <FlexContainerExperiencia className="FlexContainerExperiencia" >
          <TablaEXPHeader>
            <TextContainer>Tabla de Experiencia</TextContainer>
          </TablaEXPHeader>
          {costesArr.map((value) => {
            const Container = (
              <TablaEXPBody key={getKey()}>
                <div>{value.nombre}</div>
                <div>{value.valor}</div>
              </TablaEXPBody>
            );
            return Container;
          })}
        </FlexContainerExperiencia>
        <FlexContainerImagen />
      </FlexContainerSpaced>
    </TablaEXPComponent>
  );
}
