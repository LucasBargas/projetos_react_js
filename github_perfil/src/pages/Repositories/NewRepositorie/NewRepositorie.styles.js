import styled from 'styled-components';

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
  background: black;
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
  width: 60%;
  border-radius: 6px;
`;

export const NewRepoContent = styled.div`
  padding: .2rem 1.5rem 1.5rem 1.5rem;

  h2 {
    text-align: center;
    font-weight: 500;
  }
`;

export const FormRepo = styled.form`
  display: grid;
`;

export const SelectTypeRepo = styled.div`

`;