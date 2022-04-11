import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background: #161b21;
  padding: 1rem 2rem;
  font-size: .875rem;
  position: relative;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    a {
      display: inline-block;
      text-align: center;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
  }

  #initialLogo {
    width: 32px;
    height: 32px;
  }
`;

export const HeaderBtnOpen = styled.button`
  display: none;
  background: transparent;
  padding: 5px;

  @media (max-width: 768px) {
    display: inline-block;
    text-align: left;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  svg {
    display: inline-block;
    color: #ffffff;
    font-size: 1.5rem;
  }
`;