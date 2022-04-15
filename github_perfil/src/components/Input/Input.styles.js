import styled from 'styled-components';

const DefaultInput = styled.input`
  display: block;
  height: 2rem;
  width: 100%;

  &:focus {
    border-color: #1158c7;
    box-shadow: 0px 0px 6px 0px #1158c7;
  }
`;

export default DefaultInput;
