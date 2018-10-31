import styled from 'styled-components';
import Atributos from './Atributos';
import AtributosSecundarios from './AtributosSecundarios';
import styleVariables from '../../Assets/StyleVariables';

const EstadisticasComponent = styled.div``;
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
const FlexContainerClase = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const FlexContainerExperiencia = styled.div`
  width: 415px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const ClaseContainer = styled.div`
  color: white;
  background-color: ${styleVariables.colorAtributos};
  text-transform: uppercase;
  font-weight: 700;
  padding: 5px 0;
`;
const TextContainer = styled.div`
  padding-right: 50px;
  padding-left: 10px;
`;
const InputClase = styled.input`
  border: 1px solid black;
  height: 20px;
  width: 100%;
`;

export default function Estadisticas() {
  return (
    <EstadisticasComponent className="Estadisticas">
      <FlexContainerSpaced>
        <FlexContainerClase>
          <ClaseContainer>
            <TextContainer>Clase</TextContainer>
          </ClaseContainer>
          <InputClase />
        </FlexContainerClase>
        <FlexContainerExperiencia className="FlexContainerExperiencia">
          <ClaseContainer>
            <TextContainer>Experiencia</TextContainer>
          </ClaseContainer>
          <InputClase />
        </FlexContainerExperiencia>
      </FlexContainerSpaced>
      <FlexContainerAtributes>
        <Atributos />
        <AtributosSecundarios />
      </FlexContainerAtributes>
    </EstadisticasComponent>
  );
}
