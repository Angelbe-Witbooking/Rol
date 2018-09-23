import styled from 'styled-components';

const DivFlexHechizos = styled.div`
  font-size: 10px;
  display: grid;
  grid-template: 100% / 49% 49%;
  grid-gap: 10px 0;
  justify-content: space-between;
`;
const DivHechizo = styled.div`
  text-align: center;
  height: 310px;
  border: 1px solid black;
  text-transform: uppercase;
  display: grid;
  grid-template: 50px 50px auto / 25% 25% 25% 25%;
  grid-template-areas:
    'titulo titulo titulo nivel'
    'alcance duracion resistencia escuela';
`;
const InputHechizo = styled.input`
  border: 1px solid black;
  align-self: center;
  height: 25px;
  width: 100%;
`;
const DivContenedorHechizo = styled.div`
  display: flex;
  flex-flow: column;
  grid-area: ${props => props.area};
  padding: 5px;
`;

const cajitas = [
  {
    nombre: 'Nombre del Hechizo',
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

function createHechizo() {
  return (
    <DivHechizo>
      {cajitas.map(value => (
        <DivContenedorHechizo area={value.area} key={getKey()}>
          {value.nombre}
          <InputHechizo />
        </DivContenedorHechizo>
      ))}
    </DivHechizo>
  );
}
export default function TablaDeHechizos() {
  return (
    <DivFlexHechizos className="TablaDeHechizos">
      {createHechizo()}
      {createHechizo()}
      {createHechizo()}
      {createHechizo()}
      {createHechizo()}
      {createHechizo()}
    </DivFlexHechizos>
  );
}

// for (let i = 0; i < 5; i += 1) {}
