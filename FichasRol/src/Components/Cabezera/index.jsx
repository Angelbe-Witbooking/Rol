import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const PlayerName = styled.div`
  border: 1px black solid;
  padding: 10px;
  width: 68%;
  margin-right: 20px;
`;
const Titulo = styled.div`
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  width: 31%;
`;

export default function Cabezera() {
  return (
    <div className="Cabezera">
      <FlexContainer>
        <PlayerName>Jugador:</PlayerName>
        <Titulo>Ficha de Personaje</Titulo>
      </FlexContainer>
    </div>
  );
}
