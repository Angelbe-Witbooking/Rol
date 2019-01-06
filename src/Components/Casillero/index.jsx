import styled from 'styled-components';
import PropTypes from 'prop-types';
import styleVariables from '../../Assets/StyleVariables';
import GlobalFunction from '../../Assets/GlobalFunctions';

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  color: #ffffff;
  padding: 10px 20px;
  margin-top: 14px;
  font-weight: 700;
  ${props => GlobalFunction.cssStyler(props.titleStyles)}
`;
const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${props => (props.isHeaderEmpty ? '' : '13px')};
  ${props => GlobalFunction.cssStyler(props.boxContainerStyles)}
`;

const FlexContainerBoxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FlexContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SymbolContainer = styled.div`
  margin-top: 15px;
  padding: 0px 5px 0px 5px;
  color: white;
  background-color: black;
  ${props => GlobalFunction.cssStyler(props.symbolStyles)}
`;

const Box = styled.input`
  border: 1px solid black;
  width: 55px;
  height: 30px;
  text-align: center;
  ::placeholder {
    color: ${styleVariables.colorAtributosSombreados};
  }
  ${props => GlobalFunction.cssStyler(props.boxStyles)}
`;
const InputHeaderText = styled.div`
  font-size: 12px;
  ${props => GlobalFunction.cssStyler(props.headerStyles)}
`;

export default function Casillero(props) {
  return (
    <div className={`casillero ${props.className}`}>
      <FlexContainer key={props.values.key}>
        {props.values.title && (
          <TitleContainer titleStyles={props.values.titleStyles}>
            {props.values.title}
          </TitleContainer>
        )}
        <FlexContainerBoxes>
          {props.values.boxes &&
            props.values.boxes.map(value => (
              <BoxContainer
                isHeaderEmpty={value.header}
                key={value.key}
                boxContainerStyles={value.boxContainerStyles}
              >
                {value.symbol && (
                  <SymbolContainer symbolStyles={value.symbolStyles}>
                    {value.symbol}
                  </SymbolContainer>
                )}
                <FlexContainerBox>
                  <InputHeaderText headerStyles={value.headerStyles}>
                    {value.header}
                  </InputHeaderText>
                  <Box placeholder={value.boxContent} boxStyles={value.boxStyles} />
                </FlexContainerBox>
              </BoxContainer>
            ))}
        </FlexContainerBoxes>
      </FlexContainer>
    </div>
  );
}

Casillero.propTypes = {
  values: PropTypes.object,
  className: PropTypes.string,
};

Casillero.defaultProps = {
  values: {},
  className: '',
};
