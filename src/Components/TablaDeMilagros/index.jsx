import styled from 'styled-components';

const DivFlexMilagro = styled.div`
  font-size: 10px;
  display: grid;
  grid-template: auto / 49% 49%;
  grid-gap: 10px 0;
  justify-content: space-between;
  font-weight: 700;
`;
const DivMilagro = styled.div`
  text-align: center;
  height: 290px;
  border: 1px solid black;
  text-transform: uppercase;
  display: grid;
  grid-template: 50px 50px auto / 25% 25% 25% 25%;
  grid-template-areas:
    'titulo titulo titulo nivel'
    'alcance duracion resistencia escuela'
    '. . . deity';
`;
const InputMilagro = styled.input`
  border: 1px solid black;
  align-self: center;
  height: 25px;
  width: 100%;
`;
const DivContenedorMilagro = styled.div`
  display: flex;
  flex-flow: column;
  grid-area: ${props => props.area};
  padding: 5px;
`;
const DivContenedorDeity = styled.div`
  grid-area: deity;
  height: 40px;
  width: 100px;
  justify-self: end;
  align-self: end;
  border: 1px solid black;
  border-bottom: 0;
  border-right: 0;
`;

const cajitas = [
  {
    nombre: 'Nombre del Milagro',
    area: 'titulo',
  },
  {
    nombre: 'Nivel',
    area: 'nivel',
  },
  {
    nombre: 'Alcance',
    area: 'alcance',
  },
  {
    nombre: 'Duración',
    area: 'duracion',
  },
  {
    nombre: 'Resistencia',
    area: 'resistencia',
  },
  {
    nombre: 'Escuela',
    area: 'escuela',
  },
];

let key = 0;
function getKey() {
  key += 1;
  return key;
}

function createMilagro() {
  return (
    <DivMilagro>
      {cajitas.map(value => (
        <DivContenedorMilagro area={value.area} key={getKey()}>
          {value.nombre}
          <InputMilagro />
        </DivContenedorMilagro>
      ))}
      <DivContenedorDeity>Deidad</DivContenedorDeity>
    </DivMilagro>
  );
}
export default function TablaDeMilagro() {
  return (
    <DivFlexMilagro className="TablaDeMilagro">
      {createMilagro()}
      {createMilagro()}
      {createMilagro()}
      {createMilagro()}
      {createMilagro()}
      {createMilagro()}
      {createMilagro()}
      {createMilagro()}
    </DivFlexMilagro>
  );
}
