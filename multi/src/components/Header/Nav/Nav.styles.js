import styled, { keyframes } from 'styled-components';

const test = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const NavContainer = styled.nav`
  @media (max-width: 768px) {
    display: ${({ mobile }) => (mobile ? 'flex' : 'none')};
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column-reverse;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(4, 12, 21, .9);
    padding: 0 1rem 1rem 1rem;
    animation: ${test} .6s forwards;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;

  a {
    font-size: .9375rem;
    color: #0b2341;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    transition: .6s;

    @media (max-width: 768px) {
      padding: .75rem;
    }

    &:hover {
      color: #ed502e;
    }
  }

  @media (max-width: 768px) {
    display: block;
    padding: .5rem;
    background: #fff;
    height: 100%;
    width: 100%;
  }
`;

export const ButtonClose = styled.button`
  border: none;
  padding: 1rem 0 1rem .5rem;
  margin: 5px 0;
  display: none;
  background: transparent;
  align-items: center;
  color: #fff;
  font-size: 1rem;

  @media (max-width: 768px) {
    display: ${({ mobile }) => (mobile ? 'flex' : 'none')};
  }
`;

export const ButtonMenu = styled(ButtonClose)`
  color: #0b2341;
  padding: .25rem;
  font-size: 1.5rem;
  margin: 0;
  
  @media (max-width: 768px) {
    display: ${({ mobile }) => (mobile ? 'none' : 'flex')};;
  }
`;