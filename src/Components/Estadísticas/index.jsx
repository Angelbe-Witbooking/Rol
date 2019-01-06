import styled from 'styled-components';
import PropTypes from 'prop-types';
import Atributos from './Atributos';
import AtributosSecundarios from './AtributosSecundarios';
import Casillero from '../Casillero';

const EstadisticasComponent = styled.div`
  text-transform: uppercase;
`;
const FlexContainerSpaced = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const FlexContainerAtributes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default function Estadisticas(props) {
  return (
    <EstadisticasComponent className="Estadisticas">
      <FlexContainerSpaced>
        <Casillero className="Clase" values={props.characterValues.clase} />
        <Casillero className="Experience" values={props.characterValues.experience} />
      </FlexContainerSpaced>
      <FlexContainerAtributes>
        <Atributos characterValues={props.characterValues} />
        <AtributosSecundarios characterValues={props.characterValues} />
      </FlexContainerAtributes>
    </EstadisticasComponent>
  );
}

Estadisticas.propTypes = {
  characterValues: PropTypes.object,
};

Estadisticas.defaultProps = {
  characterValues: {},
};
