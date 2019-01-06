import styled from 'styled-components';
import PropTypes from 'prop-types';
import Casillero from '../Casillero';

const AtributoSecundarioComponent = styled.div``;

const TitleContainer = styled.div`
  font-weight: 700;
  font-size: 20px;
  text-decoration: underline;
`;

export default function AtributosSecundarios(props) {
  return (
    <AtributoSecundarioComponent className="AtributosSecundarios">
      <TitleContainer>Atributos Secundarios</TitleContainer>
      <div>
        <Casillero className="Strenght" values={props.characterValues.fortitude} />
        <Casillero className="Dexterity" values={props.characterValues.reflexes} />
        <Casillero className="Strenght" values={props.characterValues.will} />
        <Casillero className="Strenght" values={props.characterValues.attack} />
        <Casillero className="Strenght" values={props.characterValues.precision} />
      </div>
    </AtributoSecundarioComponent>
  );
}

AtributosSecundarios.propTypes = {
  characterValues: PropTypes.object,
};

AtributosSecundarios.defaultProps = {
  characterValues: {},
};
