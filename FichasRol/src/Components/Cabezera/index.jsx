import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export default function Cabezera(props) {
  return (
    <div className="Cabezera">
      <FlexContainer>
        <PlayerName>Jugador:</PlayerName>
        <Titulo>{props.title}</Titulo>
      </FlexContainer>
    </div>
  );
}

Cabezera.propTypes = {
  title: PropTypes.string.isRequired,
};
