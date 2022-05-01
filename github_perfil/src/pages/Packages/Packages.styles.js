import styled from "styled-components";

const PackagesContainer = styled.section`
  padding-top: 1rem;
  text-align: center;

  img {
    width: 56px;
    height: 56px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.MainFontColor};
    font-size: 2rem;
    font-weight: 500;
    margin: 2px 0 1rem  0;
  }

  p {
    color: ${({ theme }) => theme.colors.GrayColor};
  }
`;

export default PackagesContainer;
