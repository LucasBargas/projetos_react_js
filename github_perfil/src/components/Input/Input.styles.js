import styled from 'styled-components';

const DefaultInput = styled.input`
  display: block;
  height: 2rem;
  width: 100%;

  &:focus {
    border-color: ${({ theme }) => theme.colors.BorderFocus};
    box-shadow: 0px 0px 6px 0px ${({ theme }) => theme.colors.BorderFocus};
  }
`;

export default DefaultInput;
