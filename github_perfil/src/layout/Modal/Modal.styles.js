import styled, { keyframes } from 'styled-components';

const modalAnimation = keyframes`
  from{
    opacity: 0;
    transform: translateY(-50px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.section`
  display: ${({ modal }) => (modal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background: rgba(13, 16, 23, .9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20000;
`;

export const ModalArea = styled.div`
  width: 550px;
  height: auto;
  border: 1px solid rgba(240,246,252,0.1);
  background: ${({ theme }) => theme.colors.DarkBtnColor};
  box-shadow: 0 8px 24px #010409;
  border-radius: 10px;
  animation: ${modalAnimation} 0.6s forwards;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const ButtonClose = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    height: 46px;
    width: 46px;
    background: transparent;

    svg {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.LightColor};
    }
  }
`;

export const ModalContent = styled.div`
  text-align: center;
  padding: 0 1.25rem 40px 1.25rem;

  h2 {
    color: ${({ theme }) => theme.colors.LightColor};
    margin-bottom: 20px;
  }

  p {
    color: ${({ theme }) => theme.colors.LightColor};
    line-height: 1.5;
    word-spacing: 1px;

    a {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.LinkColor};
    }
  }
`;

export const LinkToGithub = styled.a`
  display: inline-block;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.LinkColor};
  margin: 10px 0 30px 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const ViewButton = styled.button`
  background: ${({ theme }) => theme.colors.GreenColor};
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.LightColor};
  transition: .2s;

  &:hover {
    background: ${({ theme }) => theme.colors.GreenColorHover};
  }
`;