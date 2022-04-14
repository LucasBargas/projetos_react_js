import styled from 'styled-components';

export const ProfilePagesArea = styled.div`
  grid-column: 2 / 5;
  grid-row: 2 / 3;

  @media (max-width: 768px) {
    grid-column: 2 / 4;
  }

  @media (max-width: 480px) {
    order: 3;
  }
`;