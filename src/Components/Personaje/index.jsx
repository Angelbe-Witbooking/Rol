import styled from 'styled-components';

const PersonajeComponent = styled.div``;
const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const NombreDelPersonaje = styled.div`
  margin: 10px 0;
  text-transform: uppercase;
`;
const FlexDibujo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding-left: 30px;
  width: 300px;
  text-transform: uppercase;
`;
const Cajita = styled.input`
  border: 1px solid black;
  height: 25px;
  width: 100%;
`;
const Historia = styled.div`
  font-size: 13px;
  border: 1px solid black;
  height: 105px;
  width: 100%;
  margin-top: 15px;
`;
const Dibujo = styled.div`
  border: 1px solid black;
  height: 100%;
  width: 100%;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template: 50% 50% / 25% 25% 24% 24%;
  grid-gap: 5px 5px;
  text-transform: uppercase;
`;
const CajitasContainer = styled.div`
  margin-top: 10px;
`;
const PersonajeStyle = styled.div``;
const titulosPersonaje = [
  'edad',
  'sexo',
  'raza',
  'Estatura',
  'Peso',
  'Color de Ojos',
  'Color de Pelo',
  'Color de Piel',
];
let key = 0;
function getKey() {
  key += 1;
  return key;
}

export default function Personaje() {
  return (
    <PersonajeComponent className="Personaje">
      <FlexContainer>
        <PersonajeStyle>
          <NombreDelPersonaje>
            <div>
              <Cajita />
            </div>
            <div>Nombre de Personaje</div>
          </NombreDelPersonaje>
          <GridContainer>
            {titulosPersonaje.map((value) => {
              const Container = (
                <CajitasContainer key={getKey()}>
                  <Cajita />
                  <div>{value}</div>
                </CajitasContainer>
              );
              return Container;
            })}
          </GridContainer>
          <div>
            <Historia>
              <div>Historia:</div>
            </Historia>
          </div>
        </PersonajeStyle>
        <FlexDibujo>
          <div>Dibujo</div>
          <Dibujo />
        </FlexDibujo>
      </FlexContainer>
    </PersonajeComponent>
  );
}
