import styled from 'styled-components';
import PropTypes from 'prop-types';
import Casillero from '../Casillero';

const AtributoComponent = styled.div`
  width: 1375px;
`;
const TitleContainer = styled.div`
  font-weight: 700;
  font-size: 20px;
  text-decoration: underline;
`;

export default function Atributos(props) {
  return (
    <AtributoComponent className="Atributos">
      <TitleContainer>Atributos</TitleContainer>
      <div>
        <Casillero className="Strenght" values={props.characterValues.strenght} />
        <Casillero className="Dexterity" values={props.characterValues.dexterity} />
        <Casillero className="Constitution" values={props.characterValues.constitution} />
        <Casillero className="Intelligence" values={props.characterValues.intelligence} />
        <Casillero className="Wisdom" values={props.characterValues.wisdom} />
        <Casillero className="Charisma" values={props.characterValues.charisma} />
      </div>
    </AtributoComponent>
  );
}

Atributos.propTypes = {
  characterValues: PropTypes.object,
};

Atributos.defaultProps = {
  characterValues: {},
};
