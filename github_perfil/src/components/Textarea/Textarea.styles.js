import styled from 'styled-components';
import * as Variables from '../../styles/Variables';

const DefaultTextarea = styled.textarea`
  display: block;
  height: ${({ height }) => height};
  width: 100%;

  &:focus {
    border-color: ${Variables.BorderFocus};
    box-shadow: 0px 0px 6px 0px ${Variables.BorderFocus};
  }
`;

export default DefaultTextarea;
