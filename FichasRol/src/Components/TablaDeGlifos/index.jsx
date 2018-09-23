import styled from 'styled-components';

const TablaDeHechizosComponent = styled.div`
  font-size: 10px;
`;
const DivFlexGlifos = styled.div`
  display: grid;
  grid-template: 100% / 49% 49%;
  justify-content: space-between;
`;
const DivGlifo = styled.div`
  position: relative;
  text-align: center;
  height: 300px;
  border: 1px solid black;
  text-transform:uppercase;
`;
const DivFlexTituloGlifo = styled.div`
  display: flex;
  margin-top: 5px;
  flex-flow: column;
  justify-content:center;  
`;
const DivFlexNumberoGlifo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;
const DivTituloGlifo = styled.input`
  border: 1px solid black;
  width: 90%;
  align-self:center;
  height: 25px;
`;
const DivNumberGlifo = styled.input`
  border: 1px solid black;
  width: 50px;
  height: 25px;
  border-radius: 50px 0 0 50px;
`;
const DivNumberGlifo1 = styled.input`
  border: 1px solid black;
  width: 50px;
  height: 25px;
  border-radius:  0 50px 50px 0 ;
`;
const DivGlifoNumber = styled.div`
  position: absolute;
  bottom: 0;
  right: 10px;
  display: flex;
  flex-flow: column;
`;

function createGlifo() {
  return (
    <DivGlifo>
      <DivFlexTituloGlifo>
        Nombre Del glifo
        <DivTituloGlifo />
      </DivFlexTituloGlifo>
      <DivGlifoNumber>
        Espacio de Hechizos
        <DivFlexNumberoGlifo>
          <DivNumberGlifo />
          <DivNumberGlifo1 />
        </DivFlexNumberoGlifo>
      </DivGlifoNumber>
    </DivGlifo>
  );
}

export default function TablaDeGlifos() {
  return (
    <TablaDeHechizosComponent className="TablaDeGlifos">
      <DivFlexGlifos>
        {createGlifo()}
        {createGlifo()}
      </DivFlexGlifos>
    </TablaDeHechizosComponent>
  );
}
