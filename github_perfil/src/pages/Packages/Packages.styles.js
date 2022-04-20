import styled from "styled-components";
import * as Variables from '../../styles/Variables';

const PackagesContainer = styled.section`
  padding-top: 1rem;
  text-align: center;

  img {
    width: 56px;
    height: 56px;
  }

  h1 {
    color: ${Variables.MainFontColor};
    font-size: 2rem;
    font-weight: 500;
    margin: 2px 0 1rem  0;
  }

  p {
    color: ${Variables.GrayColor};
  }
`;

export default PackagesContainer;
