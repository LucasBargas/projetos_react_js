import styled from "styled-components";

const ProfileArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1.75rem 0 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  } 

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  } 
`;

export default ProfileArea;
