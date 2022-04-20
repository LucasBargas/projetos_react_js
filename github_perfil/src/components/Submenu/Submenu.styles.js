import styled, { keyframes } from 'styled-components';
import * as Variables from '../../styles/Variables';
import { animationModal } from '../../pages/Repositories/NewRepository/NewRepository.styles';

const showSubmenu = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -5px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const ButtonSubmenuContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 10;
  width: ${({ width }) => (width ? width : '20vw')};
  display: ${({ show }) => show ? 'block' : 'none'};

  @media (max-width: 480px) {
    background: rgba(13,16,23,.9);
    display: ${({ show }) => show ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    width: 100%;
    height: 100vh;
    padding: 1.5rem;
  }
`;

export const ButtonSubmenu = styled.nav`
  background: ${Variables.SecondaryBgColor};
  margin-top: 7px;
  box-shadow: 0 8px 24px #010409;
  border: 1px solid rgba(240,246,252,0.1);
  border-radius: 6px;
  font-size: .75rem;
  animation: ${showSubmenu} .3s forwards;

  @media (max-width: 480px) {
    width: 100%;
    animation: ${animationModal} .4s forwards;
  }
`;