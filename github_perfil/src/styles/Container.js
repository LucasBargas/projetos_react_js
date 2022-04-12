import styled from 'styled-components';

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (max-width: 1280px) {
    max-width: 1240px;
  }

  @media (max-width: 414px) {
    padding: 0 1.5rem;
  }
`;

export default Container;
