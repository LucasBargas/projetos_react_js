import styled from 'styled-components';
import * as Variables from '../../styles/Variables';

const DefaultInput = styled.input`
  display: block;
  height: 2rem;
  width: 100%;

  &:focus {
    border-color: ${Variables.BorderFocus};
    box-shadow: 0px 0px 6px 0px ${Variables.BorderFocus};
  }
`;

export default DefaultInput;
