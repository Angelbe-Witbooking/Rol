import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexContainer = styled.div`
  display: flex;
  /* justify-content:center; */
  align-items: center;
`;

const TitleContainer = styled.div`
  border: 1px solid black;
  color: white;
  background-color: black;
  padding: 5px 15px;
`;
const EmptyContainer = styled.input`
  width: 40px;
  height: 20px;
`;

export default function Casillero(props) {
  return (
    <div className="Casillero">
      <FlexContainer>
        <TitleContainer>{props.title}</TitleContainer>
        <EmptyContainer />
        {props.twinContainer && <EmptyContainer />}
        {props.operations && '='}
        {props.operations && props.operations.map(value => console.log(value))}
      </FlexContainer>
    </div>
  );
}

Casillero.propTypes = {
  title: PropTypes.string.isRequired,
  twinContainer: PropTypes.bool,
  operations: PropTypes.array,
};

Casillero.defaultProps = {
  twinContainer: false,
  operations: null,
};
