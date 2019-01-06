import styled from 'styled-components';

const DivFlexDotes = styled.div`
  font-size: 10px;
  display: grid;
  grid-template: auto / 49% 49%;
  grid-gap: 10px 0;
  justify-content: space-between;
`;
const DivDote = styled.div`
  text-align: center;
  height: 275px;
  border: 1px solid black;
  text-transform: uppercase;
  display: grid;
  grid-template: 50px auto / 33% 33% 10% 23%;
  grid-template-areas: 'titulo titulo heroismo type';
`;
const InputDote = styled.input`
  border: 1px solid black;
  align-self: center;
  height: 25px;
  width: ${props => (props.area === 'heroismo' ? '28px' : '100%')};
  border-radius: ${props => (props.area === 'heroismo' ? '100px' : '')};
`;
const DivContenedorDote = styled.div`
  display: flex;
  flex-flow: column;
  grid-area: ${props => props.area};
  font-weight: 700;
  padding: 5px;
  align-items: center;
`;

const cajitas = [
  {
    nombre: 'Nombre del Dote',
    area: 'titulo',
  },
  {
    nombre: 'Heroísmo',
    area: 'heroismo',
  },
  {
    nombre: 'Tipo',
    area: 'type',
  },
];

let key = 0;
function getKey() {
  key += 1;
  return key;
}

function createDote() {
  return (
    <DivDote>
      {cajitas.map(value => (
        <DivContenedorDote area={value.area} key={getKey()}>
          {value.nombre}
          <InputDote area={value.area} />
        </DivContenedorDote>
      ))}
    </DivDote>
  );
}
export default function TablaDeDotes() {
  return (
    <DivFlexDotes className="TablaDeDotes">
      {createDote()}
      {createDote()}
      {createDote()}
      {createDote()}
      {createDote()}
      {createDote()}
      {createDote()}
      {createDote()}
    </DivFlexDotes>
  );
}
