import styled, { keyframes } from 'styled-components';

export const animationModal = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const NewRepoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background: rgba(13, 16, 23, .9);

  @media (max-width: 480px) {
    padding: 0 1.5rem;
  }
`;

export const CloseModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: #ffffff;
    padding: .5rem;
    font-size: 1.5rem;
  }
`;

export const NewRepoModal = styled.div`
  border: 1px solid rgba(240,246,252,0.1);
  background: #21262d;
  width: 40%;
  border-radius: 6px;
  animation: ${animationModal} .5s forwards;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const NewRepoContent = styled.div`
  padding: .2rem 1.5rem 1.5rem 1.5rem;

  @media (max-width: 360px) {
    padding: .2rem 1rem 1.5rem 1rem;
  }

  h2 {
    text-align: center;
    font-weight: 500;
  }
`;

export const FormRepo = styled.form`
  padding-top: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  #nome {
    height: 30px;
  }

  #desc {
    overflow-y: auto;
    height: 100px;
    resize: none;
  }
`;

export const SelectArea = styled.div`
  display: flex;
  gap: .5rem;

  @media (max-width: 414px) {
    flex-direction: column;
    align-items: center;
  }

  select {
    width: calc(100% / 3);

    @media (max-width: 414px) {
      width: 80%;
    }
  }
`;

export const ModalReposButtons = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  gap: .5rem;

  #send, #cancel {
    padding: 3px 12px;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
    border: 1px solid rgba(240,246,252,0.1);
    border-radius: 6px;
  }

  #send {
    background: #238636;
  }

  #cancel {
    background: #0d1017;
  }
`;